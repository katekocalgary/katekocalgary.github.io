const url = "https://data.calgary.ca/resource/848s-4m4z.json?year=2019"

function initMap() {
  // The location of Uluru
  debugger
  fetch(url)
  .then(x => {
    return x.json()
  })
  .then (x => {
    const data = x
        .filter(x => x.community_name = "CITADEL")
        console.log(data)
        return data
  })
  .then (x => {
    const geocodeLat = Number(x[0].geocoded_column.latitude)
    const geocodeLon = Number(x[0].geocoded_column.longitude)
        console.log(geocodeLat,geocodeLon)
 debugger
    var uluru = {lat: geocodeLat, lng: geocodeLon};
  // The map, centered at Uluru
  debugger
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 10, center: uluru});
  // The marker, positioned at Uluru
  debugger
  var marker = new google.maps.Marker({position: uluru, map: map});
  })

}