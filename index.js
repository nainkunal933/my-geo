const axios = require("axios");

let base_url = "https://maps.googleapis.com/maps/api/geocode/json?address=";
const api_key = process.env.api_key;

exports.handler = (event, context, callback) => {
  const address = event.station;
  var final_url = base_url + address + api_key;
  final_url = encodeURI(final_url);
  var geocode = {};
  // Sending API request to Google GeoCoding API
  axios
    .get(final_url)
    .then(function (response) {
      // handle success
      console.log(response.data.results[0].geometry.bounds.northeast);
      geocode = {
        lat: response.data.results[0].geometry.bounds.northeast.lat,
        lng: response.data.results[0].geometry.bounds.northeast.lng,
      };
      const result = {
        statusCode: 200,
        body: geocode,
      };
      console.log(result);
      callback(null, result);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
};
