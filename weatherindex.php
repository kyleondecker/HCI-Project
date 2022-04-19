<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Weather Page</title>
    <link href="bootstrap-5.0.2-dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="weatherstyles.css" rel=stylesheet>
    <link href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"  rel="stylesheet" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous"/>
    <script type="module" src="js/weather.js"></script>
    <?php require_once 'db/DAO.class.php'; ?>
  </head>
  <body>
    <div id ="topbar">
      <?php require_once "header.php" ?>
    </div>
  <div id="title">
    Weather Page
  </div>
    <div id="localWeather">
        Local Weather
        <p id="localdata"></p>
    </div>
    <div id="worldWeather">
      Global Weather
        <p id="worlddata">
    </div>
    <div id="weekforecast">
      Weekly Forecast
        <p id="weeklydata"></p>
    </div>
  <script src="script.js"></script>
</body>
</html>
