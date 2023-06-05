$(document).ready(function() {
  // Request places from the API
  $.ajax({
    type: 'POST',
    url: 'http://0.0.0.0:5001/api/v1/places_search',
    contentType: 'application/json',
    data: JSON.stringify({})
  }).done(function(data) {
    // Loop through the places and create article tags
    for (let i = 0; i < data.length; i++) {
      let place = data[i];
      let article = '<article>' +
                      '<div class="title">' +
                        '<h2>' + place.name + '</h2>' +
                        '<div class="price_by_night">$' + place.price_by_night + '</div>' +
                      '</div>' +
                      '<div class="information">' +
                        '<div class="max_guest">' + place.max_guest + ' Guest' + (place.max_guest !== 1 ? 's' : '') + '</div>' +
                        '<div class="number_rooms">' + place.number_rooms + ' Bedroom' + (place.number_rooms !== 1 ? 's' : '') + '</div>' +
                        '<div class="number_bathrooms">' + place.number_bathrooms + ' Bathroom' + (place.number_bathrooms !== 1 ? 's' : '') + '</div>' +
                      '</div>' +
                      '<div class="user">' +
                        '<b>Owner:</b> ' + place.user_id +
                      '</div>' +
                      '<div class="description">' +
                        place.description +
                      '</div>' +
                    '</article>';
      $('.places').append(article);
    }
  });
});
