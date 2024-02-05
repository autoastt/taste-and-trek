import axios from 'axios';
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
      'X-Goog-Api-Key': 'AIzaSyD99MOBbYjQAYrznnC1O9czEwqJjceFPzM',
      'X-Goog-FieldMask': 'places.displayName,places.formattedAddress,places.id'
    }
  }
  )

  return req.data.places[0].id
  
}
export default search 
