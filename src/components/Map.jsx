
const Map = (props) => {
    // const res = search("Pop mart Jurong point")
    const {mapId} = props
    const googleMapAPI = process.env.GOOGLEMAP_API_KEY
    const src = `https://www.google.com/maps/embed/v1/directions?key=${googleMapAPI}&origin=place_id:${mapId[0]}&destination=place_id:${mapId[4]}&waypoints=place_id:${mapId[1]}|place_id:${mapId[2]}|place_id:${mapId[3]}`
    return (
        <div>
        <iframe
        className = "w-full"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={src}>
        </iframe>
        </div>
    )
}
export default Map