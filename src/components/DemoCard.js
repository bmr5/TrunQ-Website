import React from 'react'

const DemoCard = props => {
    let {name, artworks, hometown, years, birthday, nationality} = props.artist
    let hometownPara = hometown ? <p className='info'>Hometown: {hometown}</p> : ''
    let birthdayPara = birthday ? <p className='info'>Birthday: {birthday}</p> : ''
    let nationalityPara = nationality ? <p className='info'>Nationality: {nationality}</p> : ''
    let yearsPara = years ? <p className='info'>Years: {years}</p> : ''
    
    let images = artworks.map( (obj, i) => {
       return <img key ={i} src={`${obj.imageUrl}`} style={{'height': '40px', 'width': '40px'}}/>
    })

    return (
        <div className="card">
            <h3 className='info'>{name}</h3>
            {yearsPara}
            {birthdayPara}
            {nationalityPara}
            {hometownPara}
            {images}
            <h4 className='info'>Fetch Time: {props.time}</h4 >
        </div>
    )
}

export default DemoCard