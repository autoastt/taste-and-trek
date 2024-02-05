import search from "../map/search"
import {useState} from 'react'

const Map = (props) => {
    // const res = search("Pop mart Jurong point")
     const {mapId} = props

    search("Pop mart Jurong Point")
    const src = "https://www.google.com/maps/embed/v1/place?key=AIzaSyD99MOBbYjQAYrznnC1O9czEwqJjceFPzM&q=place_id:"+mapId
    return (
        <div>
        <iframe
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={src}>
        </iframe>
        </div>
    )
}
export default Map