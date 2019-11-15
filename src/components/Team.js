import React from 'react'
import PropTypes from 'prop-types'
import pic02 from '../images/pic02.jpg'


const Team = (props) => (
    <article
          id="team"
          className={`${props.article === 'team' ? 'active' : ''} ${
            props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">team</h2>
          
          <span className="portrait main">
            <img src={pic02} alt="" />
            <div className="portrait bioleft">
              <p className="portrait bioText">test test</p>
            </div>
          </span>

          <span className="portrait main">
            <div className="portrait bioright">
              <p className="portrait bioText">test test</p>
            </div>
            <img src={pic02} alt="" />
          </span>

          <span className="portrait main">
            <img src={pic02} alt="" />
            <div className="portrait bioleft">
              <p className="portrait bioText">test test</p>
            </div>
          </span>

          <span className="portrait main">
            <div className="portrait bioright">
              <p className="portrait bioText">test test</p>
            </div>
            <img src={pic02} alt="" />
          </span>

          <p>magic area</p>

          {props.close}
    </article>
)

Team.propTypes = {

}

export default Team