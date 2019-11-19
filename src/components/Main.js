import PropTypes from 'prop-types'
import React from 'react'
import Demo from './Demo.js'
import Info from './Info.js'
import Team from './Team.js'
//test

class Main extends React.Component {
  render() {
    let close = (<div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>)
    

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        
        <Info article={this.props.article} articleTimeout={this.props.articleTimeout} close={close}></Info>
        <Demo article={this.props.article} articleTimeout={this.props.articleTimeout} close={close} handleSelectQuery={this.props.handleSelectQuery} select1={this.props.select1} select2={this.props.select2} select3={this.props.select3} query={this.props.query} handleFetch={this.props.handleFetch} responses={this.props.responses} times={this.props.times}></Demo>
        <Team article={this.props.article} articleTimeout={this.props.articleTimeout} close={close}></Team>

        
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
