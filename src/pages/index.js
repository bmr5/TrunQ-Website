import React from 'react'
import Layout from '../components/layout'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: '',
      loading: 'is-loading',
      select1: '-------',
      select2: '-------',
      select3: '-------',
      query: 'build query',
      responses: []
    }
    this.handleOpenArticle = this.handleOpenArticle.bind(this)
    this.handleCloseArticle = this.handleCloseArticle.bind(this)
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleSelectQuery = this.handleSelectQuery.bind(this)
    this.handleFetch = this.handleFetch.bind(this)
  }

  //on a component mounting assign a timeoutId to a setTimeout ID to 'this' and add that event listener to close a page
  componentDidMount () {
    this.timeoutId = setTimeout(() => {
        this.setState({loading: ''});
    }, 100);
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  //on the unmount if that timeout ID still exists remove it and remove that event listener
  componentWillUnmount () {
    if (this.timeoutId) {
        clearTimeout(this.timeoutId);
    }
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleOpenArticle(article) {

    this.setState({
      isArticleVisible: !this.state.isArticleVisible,
      article
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        articleTimeout: !this.state.articleTimeout
      })
    }, 350)

  }

  handleCloseArticle() {

    this.setState({
      articleTimeout: !this.state.articleTimeout
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        isArticleVisible: !this.state.isArticleVisible,
        article: '',
        select1: '',
        select2: '',
        select3: '',
        query: 'build query',
        responses: []
      })
    }, 350)

  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      if (this.state.isArticleVisible) {
        this.handleCloseArticle();
      }
    }
  }

  handleSelectQuery (event) {
    let targetBox = event.target.id
    let obj = {}
    let select1 = targetBox === 'select1' ? event.target.value : this.state.select1
    let select2 = targetBox === 'select2' ? event.target.value : this.state.select2
    let select3 = targetBox === 'select3' ? event.target.value : this.state.select3

    obj[targetBox] = event.target.value

    obj.query = <pre >
{`{ 
  reddit {
    subreddit(name: "${select1}"){
      newListings(limit: 2) {
        title
          comments {
            body
          }
      }
    }
    user (username: "${select2}"){
        ${select3}
    }
  }
}`}
    </pre>
    this.setState(obj)
  }

  handleFetch(query) {
    query = `query {
      artist(id: "mark-rothko") {
        name
        image {
          id
        }
        artworks (size: 2) {
          id
          imageUrl
        }
      }
    }`
    fetch('https://metaphysics-production.artsy.net',
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({query: query})
    })
    .then(res => res.json())
    .then(res => {
      this.setState({
        responses: [...this.state.responses, res]
      })
    })
    .then(console.log(this.state))
  }

  render() {

    return (
      <Layout location={this.props.location}>
        <div className={`body ${this.state.loading} ${this.state.isArticleVisible ? 'is-article-visible' : ''}`}>
          <div id="wrapper">
            <Header onOpenArticle={this.handleOpenArticle} timeout={this.state.timeout} />
            <Main
              isArticleVisible={this.state.isArticleVisible}
              timeout={this.state.timeout}
              articleTimeout={this.state.articleTimeout}
              article={this.state.article}
              onCloseArticle={this.handleCloseArticle}
              setWrapperRef={this.setWrapperRef}
              handleSelectQuery={this.handleSelectQuery}
              query={this.state.query}
              handleFetch={this.handleFetch}
              responses={this.state.responses}
            />
            <Footer timeout={this.state.timeout} />
          </div>
          <div id="bg"></div>
        </div>
        
      </Layout>
    )
  }
}

export default IndexPage
