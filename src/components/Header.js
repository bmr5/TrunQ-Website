import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import trunQicon from '../images/trunQicon.png' 


const Header = (props) => {
    
    const trunQicon = useStaticQuery(graphql`
  query {
    file(name: {regex: "/trunQicon/"}) {
      name
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
  `)

    return(
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            
            <a className='logo-link' href="https://github.com/oslabs-beta/trunQ">
                <Img className="icon" fluid={trunQicon.file.childImageSharp.fluid}/>    
            </a>
            
        </div>
        <div className="content">
            <div className="inner">
                <h1>TrunQ</h1>
                <p>The GraphQL caching solution of tomorrow... Today</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('info')}}>Info</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('demo')}}>Demo</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('team')}}>Team</a></li>
                <li><a href="https://github.com/oslabs-beta/trunQ">Github</a></li>

            </ul>

        </nav>
    </header>
)}

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
