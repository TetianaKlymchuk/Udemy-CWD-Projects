
<!--index.php-->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Distance btw Cities App</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="styling.css" rel="stylesheet">
    <link href='https://fonts.googleapis.com/css?family=Arvo' rel='stylesheet' type='text/css'>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
    <div class="all">
      <div class="jumbotron">
          <div class="container-fluid">
              <h1>Distance between cities App.</h1>
              <p>Our app will help you calculate travelling distances.</p>
                <div class="row">
                    <div class="col-xs-12 col-md-6">
                        <form class="form-horizontal">
                            <div class="row">
                                <div class="col-xs-offset-3 col-xs-6 col-md-6">
                                    <div class="form-group">
                                        <label for="from" class=" control-label">From:</label>
                                        <div class="formInput">
                                            <input type="text" id="from" placeholder="Origin" class="form-control">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="to" class=" control-label">To:</label>
                                        <div class="formInput">
                                            <input type="text" id="to" placeholder="Destination" class="form-control">
                                        </div>
                                    </div>
                                        <div class="button">
                                            <button class="btn btn-info btn-lg" id="submit" onclick="calcRoute(event);">Submit</button>
                                        </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="col-xs-12 col-md-6">
                        <div class="row">
                            <div class="col-xs-offset-2 col-xs-8 col-md-offset-2 col-md-8">
                                <div id="googleMap"></div>
                                <div id="output"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    <div>
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCwJ2Vepe9L2Miuh7QH87SR_RItIXHlX6Q&libraries=places"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
      <script src="javascript.js"></script>
  </body>
</html>



