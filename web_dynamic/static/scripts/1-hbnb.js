$(document).ready(function() {
  let amenities = [];

  // Listen for changes on each input checkbox tag
  $('input[type="checkbox"]').change(function() {
    let amenityId = $(this).parent().data('id');
    let amenityName = $(this).parent().data('name');

    if (this.checked) {
      amenities.push(amenityId);
    } else {
      let index = amenities.indexOf(amenityId);
      if (index !== -1) {
        amenities.splice(index, 1);
      }
    }

    // Update the h4 tag inside the div Amenities with the list of selected menities
    $('.amenities h4').text(amenities.length > 0 ? amenities.join(', ') : 'None');
  });
});
