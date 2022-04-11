window.onload = function() {
    if (window.location.href.indexOf('scan.html') > -1 || window.location.href.indexOf('navscan.html') > -1) {
        scanner();
    };

    if (window.location.href.indexOf('detail.html') > -1 || window.location.href.indexOf('navdetail.html') > -1) {
        swipetab();
    };


};

// scanner
function scanner() {
    var scanner = new Instascan.Scanner({
        video: document.getElementById('preview'),
        scanPeriod: 5,
        mirror: false
    });
    scanner.addListener('scan', function(content) {
        // alert(content);
        window.location.href = content;
    });
    Instascan.Camera.getCameras().then(function(cameras) {
        if (cameras.length > 0) {
            scanner.start(cameras[1]);
            $('[name="options"]').on('change', function() {
                if ($(this).val() == 1) {
                    if (cameras[0] != "") {
                        scanner.start(cameras[0]);
                    } else {
                        alert('No Front camera found!');
                    }
                } else if ($(this).val() == 2) {
                    if (cameras[1] != "") {
                        scanner.start(cameras[1]);
                    } else {
                        alert('No Back camera found!');
                    }
                }
            });
        } else {
            console.error('No cameras found.');
            alert('No cameras found.');
        }
    }).catch(function(e) {
        console.error(e);
        alert(e);
    });

};

// swipe tab in detail page
function swipetab() {
    $(".card").swipe({
        swipeLeft: function(event, direction, distance, duration, fingerCount) {
            $(".nav-tabs li.active").next('li').find('a').tab('show');
        },
        swipeRight: function(event, direction, distance, duration, fingerCount) {
            $(".nav-tabs li.active").prev('li').find('a').tab('show');
        },
    });

};

// side nav
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";

}


function returnTxAsset(assetidt) {
    var xtp = new XMLHttpRequest();

    xtp.open("GET", 'https://cardano-mainnet.blockfrost.io/api/v0/assets/' + assetidt + '/txs', false); // false for synchronous request
    //Use the API account created on the header 
    xtp.setRequestHeader("project_id", 'mainnetfXjRIYdCo4FNIxJ15AgCSxLxjLLxZPag');
    xtp.send(null);
    //Then we retrieve the API response 
    var contentt = JSON.parse(xtp.responseText);
    // then we look for the transaction 0,1,2,3 to display them 
    var xts = new XMLHttpRequest();
    xts.open("GET", 'https://cardano-mainnet.blockfrost.io/api/v0/txs/' + contentt[0], false); // false for synchronous request
    xts.setRequestHeader("project_id", 'mainnetfXjRIYdCo4FNIxJ15AgCSxLxjLLxZPag');
    xts.send(null);

    var d0 = JSON.parse(xts.responseText)
    const unixTime0 = d0.block_time;
    const dd0 = new Date(unixTime0 * 1000);

    var xtpr = new XMLHttpRequest(); // Transaction 1 
    xtpr.open("GET", 'https://cardano-mainnet.blockfrost.io/api/v0/txs/' + contentt[1] + '/metadata', false); // false for synchronous request
    xtpr.setRequestHeader("project_id", 'mainnetfXjRIYdCo4FNIxJ15AgCSxLxjLLxZPag');
    xtpr.send(null)

    var textpr = JSON.parse((xtpr.responseText).replace('[', '').replace(']', '').replace('[', '').replace(']', ''));


    var xtprd = new XMLHttpRequest();
    xtprd.open("GET", 'https://cardano-mainnet.blockfrost.io/api/v0/txs/' + contentt[1], false); // false for synchronous request
    xtprd.setRequestHeader("project_id", 'mainnetfXjRIYdCo4FNIxJ15AgCSxLxjLLxZPag');
    xtprd.send(null);

    var d1 = JSON.parse(xtprd.responseText)
    const unixTime = d1.block_time;
    const dd1 = new Date(unixTime * 1000);

    /*var a =  returnIO(contentt[1]);
     a[0] = returnStake(a[0])
       a[1] = returnStake(a[1])*/



    var xp = new XMLHttpRequest(); // Transaction 2
    xp.open("GET", 'https://cardano-mainnet.blockfrost.io/api/v0/txs/' + contentt[2] + '/metadata', false); // 
    xp.setRequestHeader("project_id", 'mainnetfXjRIYdCo4FNIxJ15AgCSxLxjLLxZPag');
    xp.send(null);

    var textxp = JSON.parse((xp.responseText).replace('[', '').replace(']', '').replace('[', '').replace(']', ''))

    var xpd = new XMLHttpRequest();
    xpd.open("GET", 'https://cardano-mainnet.blockfrost.io/api/v0/txs/' + contentt[2], false); // false for synchronous request
    xpd.setRequestHeader("project_id", 'mainnetfXjRIYdCo4FNIxJ15AgCSxLxjLLxZPag');
    xpd.send(null);
    var d2 = JSON.parse(xpd.responseText)
    const unixTime2 = d2.block_time;
    const dd2 = new Date(unixTime2 * 1000);

    /*  var b =  returnIO(contentt[2]);
       b[0] = returnStake(b[0])
       b[1] = returnStake(b[1]) */



    var xhp = new XMLHttpRequest(); // Transaction 3
    xhp.open("GET", 'https://cardano-mainnet.blockfrost.io/api/v0/txs/' + contentt[3] + '/metadata', false);
    xhp.setRequestHeader("project_id", 'mainnetfXjRIYdCo4FNIxJ15AgCSxLxjLLxZPag');
    xhp.send(null);
    var textxhp = JSON.parse((xhp.responseText).replace('[', '').replace(']', '').replace('[', '').replace(']', ''))

    var xhpd = new XMLHttpRequest();
    xhpd.open("GET", 'https://cardano-mainnet.blockfrost.io/api/v0/txs/' + contentt[3], false); // false for synchronous request
    xhpd.setRequestHeader("project_id", 'mainnetfXjRIYdCo4FNIxJ15AgCSxLxjLLxZPag');
    xhpd.send(null);
    var d3 = JSON.parse(xhpd.responseText)
    const unixTime3 = d3.block_time;
    const dd3 = new Date(unixTime3 * 1000);

    /*  var c =  returnIO(contentt[3]);
c[0] = returnStake(c[0])
   c[1] = returnStake(c[1])
  
  //Once done we write transaction 1,2,3 on a list
    var txst //= document.getElementById(textidt);
  txst.innerHTML += 
 '1) '+dd1+ textpr.json_metadata.msg+' From :'+a[0]+' to :'+a[1]+'</br>'
  + 'Quantity: ' + a[5] +'</br>' 
+'2) '+dd2+textxp.json_metadata.msg + ' From :'+b[0]+' to :'+b[1]+'</br>' 
    + 'Quantity: ' + b[5] +'</br>' 
  +'3) '+dd3+textxhp.json_metadata.msg + ' From :'+c[0]+' to:'+c[1]+'</br>'
    + 'Quantity: ' + c[5] +'</br>' ; */

    var options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    const traceEvent = document.getElementById("traceEvent")
    var li1 = document.createElement('li');
    li1.setAttribute("data-date", dd0.toLocaleDateString("en-US", options));
    li1.setAttribute("class", "event")
    li1.innerHTML = " <h3>Picking inspection</h3><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>";
    traceEvent.append(li1);

    var li2 = document.createElement('li');
    li2.setAttribute("data-date", dd1.toLocaleDateString("en-US", options))
    li2.setAttribute("class", "event")
    li2.innerHTML = " <h3>Processing</h3><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>"



    traceEvent.append(li2);

    var li3 = document.createElement('li');
    li3.setAttribute("data-date", dd2.toLocaleDateString("en-US", options))
    li3.setAttribute("class", "event")
    li3.innerHTML = " <h3>Warehousing and Logistics</h3><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>"
    traceEvent.append(li3);

    var li4 = document.createElement('li');
    li4.setAttribute("data-date", dd3.toLocaleDateString("en-US", options))
    li4.setAttribute("class", "event")
    li4.innerHTML = " <h3>Retail</h3><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>"
    traceEvent.append(li4);



}

function returnAsset(assetid, imgid, textid) {
    var xtv = new XMLHttpRequest();
    xtv.open("GET", 'https://cardano-mainnet.blockfrost.io/api/v0/assets/' + assetid, false); // false for synchronous request
    xtv.setRequestHeader("project_id", 'mainnetfXjRIYdCo4FNIxJ15AgCSxLxjLLxZPag');
    xtv.send(null);


    var ascntr = JSON.parse(xtv.responseText);
    try {
        const myArray3 = ascntr.onchain_metadata.image.split("//");
        document.getElementById(imgid).src = 'https://ipfs.io/ipfs/' + myArray3[1];
    } catch {}

    var table = document.createElement('table');
    table.className = 'table table-striped';
    table.innerHTML = '<tr>  <td> Name </td> <td>' + ascntr.onchain_metadata.name + '</td></tr>' +
        '<tr><td> Variety </td><td>' + ascntr.onchain_metadata.harvestingProductVariety + '</td></tr>' +
        '<tr><td> Review </td><td>' + ascntr.onchain_metadata.review + '</td></tr>' +
        '<tr><td> Picking date </td><td>' + ascntr.onchain_metadata.harvestingTimeStart + '</td></tr>' +
        '<tr><td> Quantity </td><td>' + ascntr.onchain_metadata.harvestingQuantity + ascntr.onchain_metadata.harvestingQuantityUnit + '</td></tr>'
    document.getElementById(textid).appendChild(table);

    //Then we retrieve certification data

    var xtv = new XMLHttpRequest();
    xtv.open("GET", 'https://cardano-mainnet.blockfrost.io/api/v0/txs/' + ascntr.onchain_metadata.certificateTx + '/metadata', false); // false for synchronous request
    xtv.setRequestHeader("project_id", 'mainnetfXjRIYdCo4FNIxJ15AgCSxLxjLLxZPag');
    xtv.send(null);


    var w;
    var contentq = JSON.parse(xtv.responseText);
    //   alert(xtx.responseText);
    var u = (contentq[0].json_metadata);

    for (var key in u) {
        var value = u[key];
        for (var n in value) {
            w = value[n];
            // console.log(y);
        }
    }
    const myArray3 = w.image.split("//");
    document.getElementById("certificateImg").src = 'https://ipfs.io/ipfs/' + myArray3[1];
    var table = document.createElement('table');
    table.className = 'table table-striped';
    table.innerHTML = '<tr>  <td> Name </td> <td>' + w.name + '</td></tr>' +
        '<tr><td> Delivered By </td><td>' + w.deliveredBy + '</td></tr>' +
        '<tr><td> Score </td><td>' + w.scorePercent + '% of Organic leaves' + '</td></tr>' +
        '<tr><td> Certfication date </td><td>' + w.certificationStart + '</td></tr>' +
        '<tr><td> Renewal date </td><td>' + w.renewalDate + '</td></tr>';
    document.getElementById("certInfo").appendChild(table);


    var xte = new XMLHttpRequest();
    xte.open("GET", 'https://cardano-mainnet.blockfrost.io/api/v0/txs/' + ascntr.onchain_metadata.derivesFromTx + '/metadata', false); // false for synchronous request
    xte.setRequestHeader("project_id", 'mainnetfXjRIYdCo4FNIxJ15AgCSxLxjLLxZPag');
    xte.send(null);

    //We clean the data and store the data of interest in y
    var y;
    var contenth = JSON.parse(xte.responseText);
    //   alert(xtx.responseText);
    var z = (contenth[0].json_metadata);

    for (var key in z) {
        var value = z[key];
        for (var n in value) {
            y = value[n];
            // console.log(y);
        }
    }

    let placeName = document.getElementById("placeName");
    placeName.innerText = y.placeName;

    let placeAddress = document.getElementById("placeAddress");
    placeAddress.innerText = y.placeAddress;


    try {
        var propertydata = y.placeLatLong.split(", ");
    } catch {};
    //We choose OpenLayers to create the map 
    //Then we create an icon with Lat Lng 
    const iconFeature = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat([parseFloat(propertydata[1]), parseFloat(propertydata[0])])),
        name: 'Somewhere near Taiwan',
    });

    //Here we create the map 
    const map = new ol.Map({
        target: 'map',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM(),
            }),
            new ol.layer.Vector({
                source: new ol.source.Vector({
                    features: [iconFeature]
                }),
                style: new ol.style.Style({
                    image: new ol.style.Icon({
                        anchor: [0.5, 46],
                        anchorXUnits: 'fraction',
                        anchorYUnits: 'pixels',
                        src: 'https://openlayers.org/en/latest/examples/data/icon.png'
                    })
                })
            })
        ],
        //Then here we create a specific view 
        view: new ol.View({
            center: ol.proj.fromLonLat([parseFloat(propertydata[1]), parseFloat(propertydata[0])]),
            zoom: 6
        })
    });




}