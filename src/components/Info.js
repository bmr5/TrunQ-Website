import React from 'react'
import maps from '../images/maps.jpg'


const Info = (props) => (
  <article
    id="info"
    className={`${props.article === 'info' ? 'active' : ''} ${
      props.articleTimeout ? 'timeout' : ''
      }`}
    style={{ display: 'none' }}
  >
    <h2 className="major">Info</h2>
    <span className="image main">
      <img src={maps} alt="" />
    </span>
    <p>
      TrunQ is designed to give you the most flexible out-of-the-box caching solution
      for 3rd party APIs and remote servers. Employing both client-side and server-side caching,
      TrunQ gives you the option to decide what is most important for your application.
          </p>
    <p>
      TrunQ's NPM packages (<a href="https://www.npmjs.com/package/trunq">client</a> and <a href="https://www.npmjs.com/package/trunq-server">server</a>) offer numerous features for developers including:
          </p>
    <ul>
      <br />

      <li>In browser session storage for lightning fast cached responses</li>
      <li>Easily configurable Redis database with little setup for speedy server-side caching</li>
      <li>Unique Key generation for GraphQL responses to solve developer tagged caching</li>
      <li>Partial and Exact match query fields in the developer's GraphQL API</li>
      <li>Compressed queries based on cache results to minimize server and network data loads</li>
      <li>Ability to handle and seperate, multiple parent queries inside one large request</li>
      <li>Toggle feature to specify exact caching locations</li>

    </ul>
    <p>
      All of this is available with one simple invocation in both your front-end code and back-end middleware.
          </p>
    <p>
      On the Demo tab you'll be able to see all of this in action. Feel free to check out our <a href='https://github.com/oslabs-beta/trunQ'>GitHub</a> or <a href='https://www.npmjs.com/package/trunq'>NPM package</a> for
            more in-depth information. Or connect with the team via twitter <a href="https://twitter.com/trunq_io">@trunq_io</a>.
          </p>
    <p>
      If you are interested in learning more about OS-Labs or other open-source GraphQL projects, please check out these links!

            <ul>
        <br />
        <li><a href="https://github.com/oslabs-beta">OSLabs-Beta</a></li>
        <li><a href="https://graphquill.com/">GraphQuill</a></li>
      </ul>
    </p>
    {props.close}
  </article>
)


export default Info