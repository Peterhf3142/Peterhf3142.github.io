<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">

    <!-- Bootstrap CSS -->

    <!-- build:css css/main.css-->
    <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="node_modules/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="node_modules/bootstrap-social/bootstrap-social.css">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
    <!-- endbuild-->

    <title>Document</title>
</head>

<body>

    <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-right">


        <a class="navbar-brand"><img src="img/PMB-logo-v2.png" width=auto height="40px"></img>
            <span><em><strong>Visitors moorings</strong></em>: select & book, online</span></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collabsableNavBar"
            aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="collabsableNavBar">
            <ul class="navbar-nav ml-auto mt-2 mt-lg-0 ">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="loginform.html">Login/Register</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Other</a>
                </li>
            </ul>

        </div>
    </nav>


    <div class="container.fluid">

        <div class="row">
            <div class="col-lg-5" id="searchqs">
                <div id="arrival" class="form-group  m-2">
                    <label>Arrival date</label>
                    <input type="date" class="form-control py-4 px-4 mr-2 mb-2" placeholder="arrival date">

                </div>
                <div id="departure" class="form-group  m-2">
                    <label>Departure date</label>
                    <input type="date" class="form-control py-4 px-4  mr-2 mb-2" placeholder="Departure date"
                        id="departuredate">

                </div>
                <div id="LOA" class="form-group  m-2">
                    <label>Overall length</label>
                    <input class="form-control py-4 px-4 " input type="number"
                        placeholder="to nearest metre (round up!) e.g. 8m">
                </div>
                <div id="beam" class="form-group m-2">
                    <label>Boat maximum width (beam)</label>
                    <input type="number" class="form-control py-4 px-4 mr-2 mb-2"
                        placeholder="to nearest metre, (round up!) e.g. 6.4">

                </div>
                <div id="draft" class="form-group  m-2">
                    <label rows="3">Boat draft (minimum depth of water (m) you're happy with!)</label>
                    <input type="number" class="form-control py-4 px-4 mr-2 mb-2  pb-4" style="
                align-self:top" placeholder="enter '0' if you are ok with drying moorings)">

                </div>


            </div>
            <div class="col-lg-1" style="background-color:lavenderblush;"></div>

            <div id="map" class="rounded col-lg-5">
            </div>
            <div class="col-1"></div>
        </div>
        <div id="marina">Marina log in area</div>
        <div id="footer">Footer area</div>



</body>

<!-- build:js js/main.js-->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
<script src="script.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/css/bootstrap-datepicker.css"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/js/bootstrap-datepicker.min.js"></script>
<script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBBpCWDtOukjD5wmNsrxnUrDHLwas6TQSo&callback=initMap"></script>
<script src="https://kit.fontawesome.com/ed04a38a58.js" crossorigin="anonymous"></script>
<script src="https://unpkg.com/gijgo@1.9.13/js/gijgo.min.js" type="text/javascript"></script>
<!-- endbuild-->

</html>