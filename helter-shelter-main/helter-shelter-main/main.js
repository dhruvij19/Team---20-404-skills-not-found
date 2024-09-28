const mapData =
    [
      { LOCATION: 'Borivali west', NAME: 'Animal Rescue League of Borivali west', ADDRESS: 'Plot 101, Tps road' },

      { LOCATION: 'Kandivali east', NAME: ' Animal Protection', ADDRESS: 'Plot 20 Thakur village' },

      { LOCATION: 'Malad west', NAME: 'Live & Let Farm', ADDRESS: 'Link road' },

      { LOCATION: 'Borivali East', NAME: 'Animal Rescue League of Borivali east', ADDRESS: '94 Silk Farm Rd' },

      { LOCATION: 'Andheri west', NAME: 'Andheri west Area Humane Society', ADDRESS: '223 E Main St' },

      { LOCATION: 'Andheri east', NAME: 'The Greater Andheri east Society', ADDRESS: 'plot 11 Subhash nagar' },

      { LOCATION: 'Malad east', NAME: 'Malad east Humane Society', ADDRESS: 'plot 221 near Pushpa Park' },

      { LOCATION: 'Kandivali west', NAME: 'Kandivali west Humane Society', ADDRESS: '103 mahavir nagar' },

      { LOCATION: 'Borivali west', NAME: 'Animal Rescue League of Borivali west', ADDRESS: '109 chandavarkar road' },

      { LOCATION: 'Kandivali east', NAME: 'Animal Protection', ADDRESS: '14 Thakur complex' },

      { LOCATION: 'Malad west', NAME: 'Live & Let Farm', ADDRESS: '1305 link Rd near infiniti mall' },

      { LOCATION: 'Goregaon east', NAME: 'Second Chance Animal Rescue', ADDRESS: '1517 near growels' },

      { LOCATION: 'Goregaon west', NAME: 'Goregaon west Animal Shelter', ADDRESS: '490 Motilal nagar' },

      { LOCATION: 'Juhu jvpd', NAME: 'Humane Society for Juhu jvpd', ADDRESS: 'Plot 24, near Mithibai college' },

      { LOCATION: 'Bandra east', NAME: 'Live & Let Farm', ADDRESS: '733 BKC' },

      { LOCATION: 'Kandivali west', NAME: "Kandivali west Humane Society", ADDRESS: 'plot 984 near fisco' },

      { LOCATION: 'Borivali west', NAME: 'Animal Rescue League of Borivali west', ADDRESS: 'plot 111 ic colony' },

      { LOCATION: 'Kandivali east', NAME: 'Animal Protection', ADDRESS: '4 Mahavir nagar, near croma' }
     
    ];

const generateTableHead = (table, data) => {
  const tableHeader = table.createTHead();
  const row = tableHeader.insertRow();
  for (const key of data) {
    const th = document.createElement('th');
    const text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
};

const generateTable = (table, data) => {
  for (const element of data) {
    const row = table.insertRow();
    for (key in element) {
      const cell = row.insertCell();
      const tableText = document.createTextNode(element[key]);
      cell.appendChild(tableText);
    }
  }
};

const table = document.querySelector('table');
const data = Object.keys(mapData[0]);

generateTable(table, mapData);
generateTableHead(table, data);

// Collapsible Data Table
// calculates screen size to create a slide down effect on table expansion
const collapse = document.getElementsByClassName('collapseTableButton');
let i;

for (i = 0; i < collapse.length; i++) {
  collapse[i].addEventListener('click', function () {
    this.classList.toggle('active');
    const content = this.nextElementSibling;

    if (content.style.display === 'flex') {
      content.style.display = 'none';
    } else {
      content.style.display = 'flex';
    }
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
}

// Carousel Slider
// navigate gallery using a scrollbar that is hidden on mobile devices so you can swipe to move images on x-axis
const slider = document.querySelector('.gallery');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', e => {
  isDown = true;
  slider.classList.add('activeCarousel');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseup', _ => {
  isDown = false;
  slider.classList.remove('activeCarousel');
});

slider.addEventListener('mouseleave', _ => {
  isDown = false;
  slider.classList.remove('activeCarousel');
});

slider.addEventListener('mousemove', e => {
  if (!isDown) return;
  e.preventDefault();

  const x = e.pageX - slider.offsetLeft;
  const scrollSpeed = 3;
  const walk = (x - startX) * scrollSpeed;
  slider.scrollLeft = scrollLeft - walk;

  if (x == 0) {
    slider.scrollLeft = scrollLeft - walk;
  }
});