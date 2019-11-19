import React from 'react'
import Layout from '../components/layout'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import trunq from 'trunq'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: '',
      loading: 'is-loading',
      select1: 'mark-rothko',
      select2: 'hometown',
      select3: '2',
      query: <pre >
{`query {
  artist(id: "mark-rothko") {
    name
    hometown
    artworks(size: 2) {
      imageUrl
    }
  }
}
`}
      </pre>,
      responses: [],
      times: []
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

      let dropDowns = document.querySelectorAll('.query-box');
      for (var i = 0, l = dropDowns.length; i < l; i++) {
          dropDowns[i].selectedIndex = 0;
      }

      this.setState({
        isArticleVisible: !this.state.isArticleVisible,
        article: '',
        select1: 'mark-rothko',
        select2: 'hometown',
        select3: '2',
        query: <pre >
{`query {
  artist(id: "mark-rothko") {
    name
    hometown
    artworks(size: 2) {
      imageUrl
    }
  }
}
`}
</pre>,
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
{`query {
  artist(id: "${select1}") {
    name
    ${select2}
    artworks(size: ${select3}) {
      imageUrl
    }
  }
}
`}
    </pre>
    this.setState(obj)
  }

  async handleFetch(query) {
    console.log('right before trunqify')
    

    query = document.querySelector('pre').innerHTML
    let url = 'https://4lty9lrr06.execute-api.us-east-2.amazonaws.com/trunq/graphql'
    let startTime = Date.now()
    const results = await trunq.trunQify(query, ['id'], url, 'client')
    let elapsedTime = Date.now() - startTime
    this.setState({
      responses: [...this.state.responses, ...results],
      times: [...this.state.times, elapsedTime]
    })
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
              times={this.state.times}
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
