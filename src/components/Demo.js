import React from 'react'
import DemoCard from './DemoCard.js'


class Demo extends React.Component {
    render () {

        let arr = this.props.responses
        let testArr = arr.map( (x, i) => {
            return <DemoCard key={`card${i}`} />   
        })

        return (
            <article
                id="demo"
                className={`${this.props.article === 'demo' ? 'active' : ''} ${
                this.props.articleTimeout ? 'timeout' : ''
            }`}
            style={{ display: 'none' }}
            >

                <h2 className="major">demo</h2>

                {/* put the dynamic query button here using this image as the background */}
                <button className="image main" onClick={ ()=>this.props.handleFetch(this.props.query) }>
                    {this.props.query}
                </button>

                {/* put the input sections for the graphQL query here - 3 of them */}
                <div className='main query-input'>
                    <select className ='query-input query-box' id="select1" onChange={ (e)=>{this.props.handleSelectQuery(e)} }>
                        <option default value='mark-rothko'>Mark Rothko</option>
                        <option value="vincent-van-gogh">Van Gogh</option>
                        <option value="pablo-picasso">Picasso</option>
                        <option value="banksy">Banksy</option>
                        <option value="claude-monet">Monet</option>
                    </select>

                    <select className ='query-input query-box' id="select2" onChange={ (e)=>{this.props.handleSelectQuery(e)} }>
                        <option default value="hometown">Hometown</option>
                        <option value="years">Years</option>
                        <option value="birthday">Birthday</option>
                        <option value="nationality">Nationality</option>
                        <option value="hometown years birthday nationality">All of the Above</option>
                    </select>

                    <select className ='query-input query-box' id="select3" onChange={ (e)=>{this.props.handleSelectQuery(e)} }>
                        <option default value="2">2 Paintings</option>
                        <option value="3">3 Paintings</option>
                        <option value="4">4 Paintings</option>
                    </select>

                    {testArr}
                </div>

                {/* a 'box' of responses here with the correct time and everything */}
                <div className='main query-results'>
                    
                </div>
                
                
                {this.props.close}
                
            </article>
        )
    }
}

Demo.propTypes = {

}

export default Demo
