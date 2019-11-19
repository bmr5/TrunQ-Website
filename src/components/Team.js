import React from 'react'
import ben from '../images/ben.jpg'
import brian from '../images/brian.jpg'
import gordon from '../images/gordon.jpg'
import michael from '../images/michael.jpg'


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
            <div className="portrait bioleft">
            <img className='portrait image left' src={ben} alt="" />
              Ben Ray is a full-stack software engineer passionate about building performant React applications 
              people love to use. Prior to TrunQ, Ben was a CPA at Ernst & Young and now uses that analytical 
              training to architect complex full-stack applications. He loves to talk about front-end optimization 
              and the importance of the user experience. 
              <br/>
              <br/>
              <div className='links'>
                <a href='www.github.com/bmr5'>GitHub</a> <a href='https://www.linkedin.com/in/benray-/'>LinkedIn</a>
              </div>
            </div>
          </span>

          <span className="portrait main">
            <div className="portrait bioright">
              <img className='portrait image right' src={brian} alt="" />
              Brian Haller is a full-stack Javascript engineer specializing in React and Express. 
              He is deeply passionate about optimization, especially concerning redundant data transferral over HTTP. 
              Other areas of tech interest are security, user data privacy, and digital signal processing. 
              <br></br>
              <br></br>
              <div className='links'>
                <a href='www.github.com/brianjhaller'>Github</a> <a href='https://www.linkedin.com/in/brianjhaller/'>LinkedIn</a>              
              </div>
            </div>
          </span>

          <span className="portrait main">
            <div className="portrait bioleft">
            <img className='portrait image left' src={gordon} alt="" />
              Gordon Campbell is a full-stack Javascript engineer and is focused on designing and implementing modular full-stack applications through OOP. 
              Fluent in React, Node.js, and SQL, his interests lie in streaming and data transferral protocols. 
              <br/>
              <br/>
              <div className='links'>
                <a href='www.github.com/gordon-campbell13'>Github</a> <a href='https://www.linkedin.com/in/gordon-s-campbell/'>LinkedIn</a>
              </div>
            </div>
          </span>

          <span className="portrait main">
            <div className="portrait bioright">
              <img className='portrait image right' src={michael} alt="" />

              Michael Evans is a software engineer focused on developing full stack applications. Prior to TrunQ, 
              Michael was an analyst in the Private Equity Group at Goldman Sachs where he focused on transitioning 
              traditional spreadsheet-based financial modeling into scalable web based applications. Michael Graduated Summa Cum Laude 
              from the University of Colorado Boulder with a dual degrees in Economics and Finance. 
              <br/>
              <br/>
              <div className='links'>
                <a href ='www.github.com/mchlevans'>Github</a> <a href='https://www.linkedin.com/in/michael-evans-8278b865/'>LinkedIn</a>
              </div>
              
            </div>
          </span>
          {props.close}
    </article>
)

export default Team