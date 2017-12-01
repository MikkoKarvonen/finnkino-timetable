var theatreId = '';
var today = new Date();
var nextSevenDays = [];

function days(){
  for (i = 0; i < 7; i++){
    var currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + i);
    var y = currentDate.getFullYear();
    var mo = currentDate.getMonth() + 1;
    var d = currentDate.getDate();
    if (mo < 10){
      mo = "0" + mo;
    }
    if (d < 10){
      d = "0" + d;
    }
    stringDate = d + "." + mo + "." + y;
    nextSevenDays.push(stringDate);
  }
}
days();

function loadCity(obj, date = 0){
  theatreId = $(obj)[0];
  day = nextSevenDays[date];
  $.ajax({
    type: 'GET',
    url: 'http://www.finnkino.fi/xml/Schedule/?area=' + theatreId + '&dt=' + day,
    crossDomain: true,
    dataType: 'html',
    success: parseXml
  });
};

var indexNum = 0;

function parseXml(xml){
  var numOfShows = $(xml).find('Show').length;

  if (numOfShows > 0){
    $(xml).find('Show').each(function(){
      var img = $(this).find('EventLargeImageLandscape').text();
      var link = $(this).find('ShowURL').text();
      var divIndex = $(this).index();
      var addColumns = '';
      var columnNum = "columns" + Math.floor(divIndex/4);
      var startTime = $(this).find('dttmShowStart').text().split('T').pop().substring(0,5);
      var theatreAuditorium = $(this).find('Theatre').text().split(',')[0] + ', ' + $(this).find('TheatreAuditorium').text();

      if (divIndex == 0){
        addMovies();
      }

      if ((day == nextSevenDays[0]
      && (today.getHours() < parseInt(startTime.substring(0,2))
      ||(today.getHours() == parseInt(startTime.substring(0,2))
      && today.getMinutes() < parseInt(startTime.substring(3,5)))))
      || (day != nextSevenDays[0])) {

        if (((divIndex) % 4) == 0){
          addColumns += "<div class='columns' id='" + columnNum + "'>";
        }

        var details =
        "<div class='column'>"
          + "<div class='card'>"
            + "<div class='card-image'>"
              + "<figure class='image'>"
                + "<img src=" + img + " class='juliste'></img>"
              + "</figure>"
            + "</div>"
            + "<div class='card-content'>"
              + "<div class='media'>"
                + "<div class='media-content'>"
                  + "<p class='title is-4'>"+ $(this).find('Title').text() + "</p>"
                + "</div>"
              + "</div>"
              + "<div class='content'>"
                + startTime
                + "<br />"
                + theatreAuditorium
              + "</div>"
            +"</div>"
            + "<footer class='card-footer'>"
              + "<p class='card-footer-item'>"
                + "<a href=" + link + " target='blank'>Liput</a>"
              + "</p>"
            + "</div>"
          + "</div>"
        + "</div>";

        if ($(this).index() + 1 == numOfShows){
          while (((divIndex) % 4) != 3){
            details += "<div class='column empty-column'>"
              + "<div class='card'>"
              + "</div>"
            + "</div>";
            divIndex++;
          }
        }
        appedDetails(theatreId, addColumns, columnNum, details);
      }
    });
  } else {
    addMovies();
    var noMovies =
    '<section class="hero">'
      + '<div class="hero-body">'
        + '<div class="container">'
          + '<h1 class="title">'
            + 'Ei näytettäviä elokuvia'
          + '</h1>'
        + '</div>'
      + '</div>'
    + '</section>';
    $("#" + theatreId + " #movies").append(noMovies);
  }
}

function appedDetails(id, addCol, colNum, det){
  $("#" + id + " #movies").append(addCol);
  $("#" + id + " #movies #" + colNum).append(det);
}

function addMovies(){
  if (document.getElementById("movies")){
    document.getElementById("movies").remove();
  }
  $("#" + theatreId).append("<div id='movies'></div>");
}

$(".show-city").click(function(e) {
      e.preventDefault();
      $('.container .city').fadeOut(500);
      $('#' + $(this).data('rel')).fadeIn(1500);
});

function showTime() {
  var y = today.getFullYear();
  var mo = today.getMonth() + 1;
  var d = today.getDate();
  var h = today.getHours();
  var m = today.getMinutes();
  if (m < 10){
    m = "0" + m;
  }
  document.getElementById('time').innerHTML = d + "." + mo + "." + y + " <br> " + h + ":" + m;
  t = setTimeout(function() {
    showTime()
  }, 60000);
}
showTime();

function addDays(id){
  if (document.getElementById("sevenDays")){
    document.getElementById("sevenDays").remove();
  }
  var listDays =
  "<nav class='pagination is-centered' id='sevenDays'>"
    + "<ul class='pagination-list'>";
  var liDays = "";
  for (var i in nextSevenDays){
    liDays +=
    "<li>"
      + "<a class='pagination-link";
      if (i == 0){
        liDays += " is-current "
      }
    liDays +=
      "' onclick='loadCity(" + theatreId + "," + i + ")'>" + nextSevenDays[i].substring(0,6) + "</a>"
    + "</li>";
  };
  listDays += liDays;
  $("#" + id).append(listDays);
  currentDay();
}

var navClick = '.navbar-end a';
$(navClick).on('click', function(){
  $(navClick).removeClass('is-active');
  $(this).addClass('is-active');
});

//TÄHÄN JÄIT
function currentDay(){
  var dateClick = '.pagination-list a';
  $(dateClick).on('click', function(){
    $(dateClick).removeClass('is-current');
    $(this).addClass('is-current');
  });
}

document.addEventListener('DOMContentLoaded', function () {
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});
