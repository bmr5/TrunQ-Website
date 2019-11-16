import React from 'react'
import DemoCard from './DemoCard.js'


class Demo extends React.Component {
    render () {

        let arr = this.props.responses
        let testArr = arr.map( (x, i) => {
            console.log(x)
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
                        <option default>Subreddit</option>
                        <option value="movies">movies</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>

                    <select className ='query-input query-box' id="select2" onChange={ (e)=>{this.props.handleSelectQuery(e)} }>
                        <option default>Username</option>
                        <option value="btcIII">btcIII</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>

                    <select className ='query-input query-box' id="select3" onChange={ (e)=>{this.props.handleSelectQuery(e)} }>
                        <option default>Karma</option>
                        <option value="commentKarma">commentKarma</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
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
