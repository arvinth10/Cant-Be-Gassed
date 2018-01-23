String.prototype.replaceAll = function(search, replace)
{
    //if replace is not sent, return original string otherwise it will
    //replace search string with 'undefined'.
    if (replace === undefined) {
        return this.toString();
    }

    return this.replace(new RegExp('[' + search + ']', 'g'), replace);
};

$(document).ready(function(){
  var gas_station_data = JSON.parse(localStorage.getItem("gasCosts"));
  gas_station_data.sort(function(a, b) {
    return parseFloat(a.cost) - parseFloat(b.cost);
  });

  for (station in gas_station_data){

    var stationName = gas_station_data[station].name;
    var stationAddress = gas_station_data[station].address;
    var cost = Number(gas_station_data[station].cost.toFixed(4));
    $("#table_body").append("<tr><td>" + stationName + "</td>" +
                            "<td><a target = '_blank' href=https://www.google.ca/maps/place/" + stationAddress.replaceAll(" ", "+") + ">" + stationAddress + "</a></td>" +
                            "<td>"+ cost +"</td></tr>");

  }

});
