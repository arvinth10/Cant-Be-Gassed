$("#startLogo").show();
function initMap() {
        var uluru = {lat: 43.653, lng: -79.382};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru,
          styles: [
                   {
                      "featureType":"administrative",
                      "elementType":"all",
                      "stylers":[
                         {
                            "visibility":"on"
                         },
                         {
                            "lightness":33
                         }
                      ]
                   },
                   {
                      "featureType":"landscape",
                      "elementType":"all",
                      "stylers":[
                         {
                            "color":"#f2e5d4"
                         }
                      ]
                   },
                   {
                      "featureType":"poi.park",
                      "elementType":"geometry",
                      "stylers":[
                         {
                            "color":"#c5dac6"
                         }
                      ]
                   },
                   {
                      "featureType":"poi.park",
                      "elementType":"labels",
                      "stylers":[
                         {
                            "visibility":"on"
                         },
                         {
                            "lightness":20
                         }
                      ]
                   },
                   {
                      "featureType":"road",
                      "elementType":"all",
                      "stylers":[
                         {
                            "lightness":20
                         }
                      ]
                   },
                   {
                      "featureType":"road.highway",
                      "elementType":"geometry",
                      "stylers":[
                         {
                            "color":"#c5c6c6"
                         }
                      ]
                   },
                   {
                      "featureType":"road.arterial",
                      "elementType":"geometry",
                      "stylers":[
                         {
                            "color":"#e4d7c6"
                         }
                      ]
                   },
                   {
                      "featureType":"road.local",
                      "elementType":"geometry",
                      "stylers":[
                         {
                            "color":"#fbfaf7"
                         }
                      ]
                   },
                   {
                      "featureType":"water",
                      "elementType":"all",
                      "stylers":[
                         {
                            "visibility":"on"
                         },
                         {
                            "color":"#acbcc9"
                         }
                      ]
                   }
                ]
        });

        var gasMarkers = [];
        var infoWinds = [];
        var markerBound = new google.maps.LatLngBounds();

        //Get current location
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var curPos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            //Add to local storage
            localStorage.setItem("userLat", curPos.lat);
            localStorage.setItem("userLng", curPos.lng);

            markerBound.extend(curPos);

            map.setCenter(curPos);

            var icon = {
              //url: "http://bluedot.ca/wp-content/themes/dsf-blue-dot-campaign-theme/src/images/marker-circle.png",
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Map-dot-grey-68a.svg/2000px-Map-dot-grey-68a.svg.png",
              scaledSize: new google.maps.Size(20,20)
            };

            var markerCurrent = new google.maps.Marker({
              position: curPos,
              map: map,
              icon: icon
            });

            var infowindow = new google.maps.InfoWindow();
            google.maps.event.addListener(markerCurrent, 'click', function() {
              infowindow.setContent('<div><strong>' + 'Your Current Location' + '</strong><br>' +
                'Latitude: ' + curPos.lat + '<br>' +
                'Longitude: ' + curPos.lng + '<br>' + '</div>');
              infowindow.open(map, this);
            });


            map.fitBounds(markerBound);

            //avoid over zoom
            if(map.getZoom() >15){
              map.setZoom(15);
            }

            $("#startLogo").hide();


          }, function() {
            alert("Current location not found");
          });
        } else {
          // Browser doesn't support Geolocation
          alert("Current location not supported by browser");

        }

        var gas_station_data = JSON.parse(localStorage.getItem("gasCosts"));


        if(gas_station_data != null){
          for (station in gas_station_data){
            gasMarkers[station] = new google.maps.Marker({
              position: gas_station_data[station].location,
              map: map
            });



            // infoWinds[station] = new google.maps.InfoWindow();

            // google.maps.event.addListener(gasMarkers[station],'click', function(){
            //   infoWinds[station].setContent(gas_station_data[station].name);

            //   infoWinds[station].open(map, this);

            // });

            markerBound.extend(gas_station_data[station].location);



          }




          map.fitBounds(markerBound);
        }


        //to avoid over zoom
        if(map.getZoom() >15){
          map.setZoom(15);
        }



}
