const shelterMap = L.map('map-display').setView([19.1263600, 72.8489700], 8);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  minZoom: 7,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  iconSize: (30, 30),
  zoomOffset: -1,
  accessToken: 'pk.eyJ1Ijoic291bmR3YW5kZXJzIiwiYSI6ImNrcmpsZmFkaTcwcWEzMW10MXBpbXdrdTMifQ.BCHaQ4HmyW_TKhwQsxRbAQ'
}).addTo(shelterMap);

// override Leaflet default icon to pass custom icon parameters
const iconOptions = {
  iconUrl: 'media/icons/map-icon.png',
  iconSize: [30, 30]
};

// Assigning the custom icon paramaters to a new Icon variable
const smallIcon = L.icon(iconOptions);

// Set options for the map markers
const markerOptions = {
  title: this.value,
  clickable: true,
  draggable: false,
  icon: smallIcon
};

// Create an array of data then loop through to create a pin for each location using bind
const pins =
    [
      [
        'Borivali west <br/> Animal Rescue League of Borivali west <br/> Ajay Tiwari, 9876655342',
        19.2307, 72.8567
      ],
      [
        'Kandivali east <br/>  Animal Protection <br/> Ajay Tejani, 9867722645',
        19.2005, 72.8737
      ],
      [
        'Malad west <br/> Live & Let Farm <br/> Ravi Patel, 9802288675',
        19.1890, 72.8355
      ],
      [
        'Borivali East <br/> Animal Rescue League of Borivali east <br/> Hardik Gabani, 9864499876',
        19.2298, 72.8609
      ],
      [
        'Andheri west <br/> Andheri west Area Humane Society <br/> Arvind Tiwari, 9876655342',
        19.1364, 72.8296
      ],
      [
        'Andheri east/> The Greater Andheri east Society <br/> Jinal Tiwari, 9802288675',
        19.1179, 72.8631
      ],
      [
        'Malad east <br/> Malad east Humane Society <br/> Payal Mehra, 9876655342',
        19.1854, 72.8585
      ],
      [
        'Kandivali west <br/> Kandivali west Humane Society <br/> Janvi Gupta, 9864499876',
        19.1998, 72.8426
      ],
      [
        'Borivali west <br/> Animal Rescue League of Borivali west <br/> Arya Singh, 9876659342',
        19.2304, 72.8567
      ],
      [
        'Kandivali east <br/>  Animal Protection <br/> Aaryan Shah, 9876655341',
        19.2005, 72.8737
      ],
      [
        'Malad west <br/> Live & Let Farm <br/> Ajay Tiwari, 9876355342',
        19.1890, 72.8355
      ],
      [
        'Goregaon east <br/> Second Chance Animal Rescue <br/> Pranali Gupta, 9876655342',
        19.155001, 72.849998
      ],
      [
        'Goregaon west <br/> Goregaon west Animal Shelter <br/> Ajay Tiwari, 9876555342',
        19.1636, 72.8459
      ],
      [
        'Juhu jvpd <br/> Humane Society for Juhu jvpd <br/> Ajay jain, 9876655342',
        19.1106, 72.8326
      ],
      [
        'Bandra east <br/> Live & Let Farm <br/> Rahul shah, 9876655342',
        19.0609, 72.8465
      ],
     [
        'Kandivali west <br/> Kandivali west Humane Society <br/> Manish gabani, 9876655342',
        19.2008, 72.8424
      ],
      [
        'Borivali west <br/> Animal Rescue League of Borivali west <br/> Saloni sheth, 9876655342',
        19.2350, 72.8567
      ],
      [
        'Kandivali east <br/>  Animal Protection <br/> Aayushi Kalyani, 9876655342',
        19.2105, 72.8737
      ],
      
    ];

for (let i = 0; i < pins.length; i++) {
  marker = new L.marker([pins[i][1], pins[i][2]], markerOptions)
    .bindPopup(pins[i][0])
    .addTo(shelterMap);
}

// Reset the map to the initial view/zoom level
const resetBtn = document.getElementById('resetButton');

resetBtn.addEventListener('click', function () {
  shelterMap.flyTo([19.1263600, 72.8489700], 8);
});
