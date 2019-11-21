import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../assets/scss/main.scss'

const Layout = ({ children, location }) => {

  let content;

  if (location && location.pathname === '/') {
    content = (
      <div>
        {children}
      </div>
    )
  } else {
    content = (
      <div id="wrapper" className="page">
        <div>
          {children}
        </div>
      </div>
    )
  }

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Easy to Implement GraphQL Solution!' },
              { name: 'keywords', content: 'TrunQ' },
              { property: "og:title", content: 'TrunQ'},
              { property: "og:url", content: 'https://trunq.io/'},
              { property: "og:description", content: 'Easy to Implement GraphQL Solution!'},
              { property: "og:image", content: "https://github.com/oslabs-beta/TrunQ/raw/master/demo/assets/trunqsocialbanner.png"} ,
              { property: "twitter:card", content: "https://github.com/oslabs-beta/TrunQ/raw/master/demo/assets/trunqsocialbanner.png"}
              { property: "twitter:image", content: "https://github.com/oslabs-beta/TrunQ/raw/master/demo/assets/trunqsocialbanner.png"} ,
              { property: "twitter:title", content: 'TrunQ'},
              { property: "twitter:description", content: 'Easy to Implement GraphQL Solution!'},



            ]}
          >
            <html lang="en" />
          </Helmet>
          {content}
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
