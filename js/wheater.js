function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lag = position.coords.longitude;
  console.log("You live in", lat, lag);
}

function onGeoError() {
  alert("Can't find you. No wheater for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
