import { useStaticQuery, graphql } from "gatsby"
import React from 'react'
import Img from 'gatsby-image'


export default () => {
    const data = useStaticQuery(graphql`
    query ImageQuery {
      file(name: {regex: "/blurry/"}) {
        name
        childImageSharp {
          fluid (maxWidth: 5000){
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }  
    `)

    let image = data.file.childImageSharp.fluid
    
    const imgStyle = {
        "background-position": "center",
        "background-size": "cover",
        "background-repeat": "no-repeat",
        "z-index": 1,
        "transform": "scale(1.125)",
        "height": "100%"
    }

    return (
        <Img fluid={image} style={imgStyle}/>
    )
} 