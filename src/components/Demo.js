import React from 'react'
import PropTypes from 'prop-types'
import pic02 from '../images/pic02.jpg'


// class Demo extends React.Component {
//     render () {
//         return (

//         )
//     }
// }

const Demo = (props) => (
    <article
        id="demo"
        className={`${props.article === 'demo' ? 'active' : ''} ${
        props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
    >

        <h2 className="major">demo</h2>
        {/* put the dynamic query button here using this image as the background */}
        <button className="image main">
            {/* <img src={pic02} alt="" /> */}
        </button>
        {/* put the input sections for the graphQL query here - 3 of them */}
        <p>hello I am working</p>
        {/* a 'box' of responses here with the correct time and everything */}
        {props.close}
    </article>
)

Demo.propTypes = {

}

export default Demo
