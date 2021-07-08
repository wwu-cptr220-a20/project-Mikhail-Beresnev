/*

Use the object to load the conversation based on the code

*/


const URL_TEMPLATE = "https://www.zipcodeapi.com/rest/w8cOLHkz85LBWJfP9Yq5glFXpmFhORgKVJbyW25d4Jb9dTaiDRUeCL9G1w8wcPiR/distance.json/<zip_code1>/<zip_code2>/km"

let button = document.querySelector('button');

let input = document.querySelector('textarea');

button.addEventListener('click', function() {
    let inputString = input.value;
    let zip1 = '';
    let zip2 = '';
    for (let i = 0; i < 5; i++) {
        zip1 = zip1 + inputString[i];
    }
    for (let i = 6; i < 11; i++) {
        zip2 = zip2 + inputString[i];
    }
    fetchDistance(zip1, zip2);
    this.preventDefault();
});


function showDistance(distance) {
    let divArea = document.querySelector('#message-history');
    divArea.innerHTML = distance;
    console.log(distance);
}

function fetchDistance(zip1, zip2) {
    let url = URL_TEMPLATE;
    url = url.replace('<zip_code1>', zip1);
    url = url.replace('<zip_code2>', zip2);
    let promise = fetch(url);
    promise
        .then(function(response) {
            let dataPromise = response.json()
            return dataPromise;
        })
        .then(function(data) {
            console.log(data);
            showDistance(data['distance']);
        });
}

var mymap = L.map('map').setView([46.045, -118.385], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWJlcmVzbmV2IiwiYSI6ImNrZ3U4ZndtbTE2dmoyc3AyYWV2ZHdvaWMifQ.kdbflmNEgYS6J3wa1CeZwA'
}).addTo(mymap);

// codeMap[chatroomCode]['chat'].forEach(element => {
//     // print out the conversation
//     // element.key
//     // element.value
// });

