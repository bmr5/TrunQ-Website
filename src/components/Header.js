import React from 'react'
import PropTypes from 'prop-types'
import trunQicon from '../images/trunQicon.png' 


const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            {/* <span className="icon fa-diamond"></span> */}
            <img className="icon" src={trunQicon}></img>
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

            </ul>

        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
