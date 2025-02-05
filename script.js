window.onload = () => {
  let places = staticLoadPlaces();
  renderPlaces(places);
};

function staticLoadPlaces() {
  return [
    {
      name: 'Magnemite',
      location: {
        lat: 35.63393145121188,
        lng: 139.70815081983574,
      }
    },
    {
      name: 'Magnemite',
      location: {
        lat: 35.6339314512119,
        lng: 139.708150819836,
      }
    },
    {
      name: 'Magnemite',
      location: {
        lat: 35.6339314520,
        lng: 139.708150819836,
      }
    },
  ];
}

function renderPlaces(places) {
  let scene = document.querySelector('a-scene');

  places.forEach((place) => {
    let latitude = place.location.lat;
    let longitude = place.location.lng;

    let model = document.createElement('a-entity');
    model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
    model.setAttribute('gltf-model', './assets/magnemite/scene.gltf');
    model.setAttribute('rotation', '0 180 0');
    model.setAttribute('animation-mixer', '');
    model.setAttribute('scale', '0.5 0.5 0.5');

    model.addEventListener('loaded', () => {
      window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
    });

    scene.appendChild(model);
  });
}
