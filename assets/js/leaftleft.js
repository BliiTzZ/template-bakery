document.addEventListener("DOMContentLoaded", function() {

    // LeafLeft
    var mymap = L.map('map', {
        center : [44.1199941, 4.0746436],
        zoom: 13,
        zoomControl: true,
        zoomDelta: 1,
        boxZoom: true,
        gestureHandling: true
    });

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
    }).addTo(mymap);

    //Customization of Marker
    var customIcon = L.icon({
        iconUrl: '../assets/img/logo.png',
        iconSize:     [15, 15], 
        iconAnchor:   [],
        popupAnchor:  [7, 0]
    });

    //Init Marker
    var marker = L.marker([44.1199941, 4.0746436], {icon: customIcon}).addTo(mymap);

    //Init Popup
    var popup = L.popup()
        .setLatLng([44.1199941, 4.0746436])
        .setContent("I am a standalone popup.")
        .openOn(mymap);

    //Bind Marker on Popup
    marker.bindPopup("<img width='177px' src='../assets/img/logo.png'> <br><div align='center'><b></br>2 Bis Avenue Marcel Cachin,</br>Les Près Rasclaux</br>30100 Alès<br>France</b></div>").openPopup();

    // Navigation Scroll
    window.addEventListener('scroll', (e)=> {
        const nav = document.querySelector('nav');

        if(window.pageYOffset>0){
          nav.classList.add("add-shadow");
        } else {
          nav.classList.remove("add-shadow");
        }
    });
});