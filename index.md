<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">

    <!--build:css css/main.css-->
    <link rel="stylesheet" href="style.css">
    <!-- endbuild-->

    <title>Document</title>
</head>

<body>
    <h2>JavaScript addEventListener()</h2>
    <p>Test to see how JS works when hosted on github.</p>
    <button id="myBtn">Try it</button>
    <div style="height:20px">
        <p style="height:20px" id="demo"></p>
    </div>

    <div class="col" name="globalMapSelector">
        <div id="map" class="rounded">

        </div>

    </div>




</body>

<!-- build:js js/main.js-->
<script src="script.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBBpCWDtOukjD5wmNsrxnUrDHLwas6TQSo&callback=initMap"></script>
<!-- endbuild-->

</html>