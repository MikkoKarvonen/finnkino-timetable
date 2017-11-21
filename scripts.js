var theatreIds = ['1014', '1015', '1016', '1017', '1041', '1018', '1019', '1021', '1022'];

$(document).ready(function(){
  $(theatreIds).each(function(){
  $.ajax({
      type: 'GET',
      url: 'http://www.finnkino.fi/xml/Schedule/?area=' + this,
      crossDomain: true,
      dataType: 'html',
      success: parseXml
    });
  });
});

var indexNum = 0;

function parseXml(xml){
  $(xml).find('Show').each(function(){
    var img = $(this).find('EventLargeImageLandscape').text();
    var link = $(this).find('ShowURL').text();
    var divIndex = $(this).index();
    var addColumns = '';
    var columnNum = "columns" + Math.floor(divIndex/4);

    if (((divIndex) % 4) == 0){
      addColumns += "<div class='columns' id='" + columnNum + "'>";
      console.log(addColumns);
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
            + $(this).find('dttmShowStart').text()
            + "<br />"
            + $(this).find('Theatre').text()
            + "<br />"
            + $(this).find('TheatreAuditorium').text()
          + "</div>"
        +"</div>"
        + "<footer class='card-footer'>"
          + "<p class='card-footer-item'>"
            + "<a href=" + link + " target='blank'>Liput</a>"
          + "</p>"
        + "</div>"
      + "</div>"
    + "</div>";

    if ($(this).find('Theatre').text().includes('Helsinki')
    || $(this).find('Theatre').text().includes('Espoo')
    || $(this).find('Theatre').text().includes('Vantaa')){
      $("#paakaupunki").append(addColumns);
      $("#paakaupunki #" + columnNum).append(details);
    }

    if ($(this).find('Theatre').text().includes('Helsinki')){
      $("#helsinki").append(addColumns);
      $("#helsinki #" + columnNum).append(details);
    } else if ($(this).find('Theatre').text().includes('Espoo')){
      $("#espoo").append(addColumns);
      $("#espoo #" + columnNum).append(details);
    } else if ($(this).find('Theatre').text().includes('Tampere')){
      $("#tampere").append(addColumns);
      $("#tampere #" + columnNum).append(details);
    }

    if ($(this).find('Theatre').text().includes('Omena')){
      $("#isoomena").append(addColumns);
      $("#isoomena #" + columnNum).append(details);
    } else if ($(this).find('Theatre').text().includes('Sello')){
      $("#sello").append(addColumns);
      $("#sello #" + columnNum).append(details);
    } else if ($(this).find('Theatre').text().includes('Kinopalatsi, H')){
      $("#kinopalatsi").append(addColumns);
      $("#kinopalatsi #" + columnNum).append(details);
    } else if ($(this).find('Theatre').text().includes('Tennispalatsi')){
      $("#tennispalatsi").append(addColumns);
      $("#tennispalatsi #" + columnNum).append(details);
    } else if ($(this).find('Theatre').text().includes('Jyväskylä')){
      $("#jyvaskyla").append(addColumns);
      $("#jyvaskyla #" + columnNum).append(details);
    } else if ($(this).find('Theatre').text().includes('Kuopio')){
      $("#kuopio").append(addColumns);
      $("#kuopio #" + columnNum).append(details);
    } else if ($(this).find('Theatre').text().includes('Lahti')){
      $("#lahti").append(addColumns);
      $("#lahti #" + columnNum).append(details);
    } else if ($(this).find('Theatre').text().includes('Lappeenranta')){
      $("#lappeenranta").append(addColumns);
      $("#lappeenranta #" + columnNum).append(details);
    } else if ($(this).find('Theatre').text().includes('Oulu')){
      $("#oulu").append(addColumns);
      $("#oulu #" + columnNum).append(details);
    } else if ($(this).find('Theatre').text().includes('Pori')){
      $("#pori").append(addColumns);
      $("#pori #" + columnNum).append(details);
    } else if ($(this).find('Theatre').text().includes('Cine Atlas')){
      $("#cineatlas").append(addColumns);
      $("#cineatlas #" + columnNum).append(details);
    } else if ($(this).find('Theatre').text().includes('Plevna')){
      $("#plevna").append(addColumns);
      $("#plevna #" + columnNum).append(details);
    } else if ($(this).find('Theatre').text().includes('Turku')){
      $("#turku").append(addColumns);
      $("#turku #" + columnNum).append(details);
    } else if ($(this).find('Theatre').text().includes('Vantaa')){
      $("#vantaa").append(addColumns);
      $("#vantaa #" + columnNum).append(details);
    }
  });
}

$(".show-city").click(function(e) {
      e.preventDefault();
      $('.container .city').fadeOut(500);
      $('#' + $(this).data('rel')).fadeIn(1500);
});

function showTime() {
  var today = new Date();
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
