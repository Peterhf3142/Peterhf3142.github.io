document.getElementById("myBtn").addEventListener("click", displayDate);
function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}

// Initialize and add the global locator map
function initMap() {
    // locations
    var HaslarMarina = { lat: 50.798878, lng: -1.115388 }
    var Cowes = { lat: 50.765, lng: -1.300 };
    var Douglas = { lat: 54.161, lng: -4.492 };
    var ManchesterAirport = { lat: 53.365634, lng: -2.269787 }
    // The map, centered at Cowes
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 6, center: ManchesterAirport });
    //Marker, positioned at Cowes
    var marker = new google.maps.Marker({
        position: Cowes,
        map: map,
        title: "The Solent",
    });

    var information = new google.maps.InfoWindow({
        content: '<h4>The marker is at Cowes</h4>',
    });

    marker.addListener('click', function () {
        var map = new google.maps.Map(
            document.getElementById('map'), {
            zoom: 11, center: Cowes
        });
        var marker = new google.maps.Marker({
            position: HaslarMarina,
            map: map,
            title: "Haslar Marina",
        });
        var marker = new google.maps.Marker({
            position: Cowes,
            map: map,
            title: "Cowes",
        });
    });
}