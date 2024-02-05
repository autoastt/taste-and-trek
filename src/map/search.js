import axios from 'axios';
const googleMapAPI = process.env.GOOGLEMAP_API_KEY
const search  = async (place) => {

  const req = await axios.post(
  'https://places.googleapis.com/v1/places:searchText',
  // '{\n  "textQuery" : "Spicy Vegetarian Food in Sydney, Australia"\n}',
  {
    'textQuery': place
  },
  {
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': googleMapAPI,
      'X-Goog-FieldMask': 'places.id'
    }
  }
  )

  return req.data.places[0].id
  
}
export default search 
