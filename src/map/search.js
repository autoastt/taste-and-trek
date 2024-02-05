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
      'X-Goog-FieldMask': 'places.displayName,places.formattedAddress,places.id'
    }
  }
  )
  // Check if req.data.places is an array and has at least one element
  if (req.data.places && req.data.places.length > 0) {
    const firstPlace = req.data.places[0];

    // Check if the 'id' property exists in the first place
    if (firstPlace.id !== undefined) {
      // 'id' exists, you can safely access it
      return firstPlace.id;
    } else {
      // 'id' is undefined in the first place
      console.error('ID is undefined for the first place.');
      return undefined
      // Handle the case where 'id' is undefined, possibly return a default value or throw an error.
    }
  } else {
  // 'places' array is undefined or empty
  console.error('No places found in the response.');
  return undefined
  }
}
export default search 
