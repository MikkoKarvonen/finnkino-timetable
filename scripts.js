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

function parseXml(xml){
  $(xml).find('Show').each(function(){
    var img = $(this).find('EventMediumImagePortrait').text();
    var link = $(this).find('ShowURL').text();
    var details =
      "<div class='laatikko'>"
      + "<img src=" + img + " class='juliste'></img>"
      + "<br />"
      + $(this).find('Title').text()
      + "<br />"
      + $(this).find('dttmShowStart').text()
      + "<br />"
      + $(this).find('Theatre').text()
      + "<br />"
      + $(this).find('TheatreAuditorium').text()
      + "<br />"
      + "<a href=" + link + " target='blank'>"
      + "<button>Liput</button></a>"
      + "</div>";

    if ($(this).find('Theatre').text().includes('Helsinki')
    || $(this).find('Theatre').text().includes('Espoo')
    || $(this).find('Theatre').text().includes('Vantaa')){
      $("#paakaupunki").append(details);
    }

    if ($(this).find('Theatre').text().includes('Helsinki')){
      $("#helsinki").append(details);
    } else if ($(this).find('Theatre').text().includes('Espoo')){
      $("#espoo").append(details);
    } else if ($(this).find('Theatre').text().includes('Tampere')){
      $("#tampere").append(details);
    }

    if ($(this).find('Theatre').text().includes('Omena')){
      $("#isoomena").append(details);
    } else if ($(this).find('Theatre').text().includes('Sello')){
      $("#sello").append(details);
    } else if ($(this).find('Theatre').text().includes('Kinopalatsi, H')){
      $("#kinopalatsi").append(details);
    } else if ($(this).find('Theatre').text().includes('Tennispalatsi')){
      $("#tennispalatsi").append(details);
    } else if ($(this).find('Theatre').text().includes('Jyväskylä')){
      $("#jyvaskyla").append(details);
    } else if ($(this).find('Theatre').text().includes('Kuopio')){
      $("#kuopio").append(details);
    } else if ($(this).find('Theatre').text().includes('Lahti')){
      $("#lahti").append(details);
    } else if ($(this).find('Theatre').text().includes('Lappeenranta')){
      $("#lappeenranta").append(details);
    } else if ($(this).find('Theatre').text().includes('Oulu')){
      $("#oulu").append(details);
    } else if ($(this).find('Theatre').text().includes('Pori')){
      $("#pori").append(details);
    } else if ($(this).find('Theatre').text().includes('Cine Atlas')){
      $("#cineatlas").append(details);
    } else if ($(this).find('Theatre').text().includes('Plevna')){
      $("#plevna").append(details);
    } else if ($(this).find('Theatre').text().includes('Turku')){
      $("#turku").append(details);
    } else if ($(this).find('Theatre').text().includes('Vantaa')){
      $("#vantaa").append(details);
    }
  });
}

$(".show-city").click(function(e) {
      e.preventDefault();
      $('.container .city').fadeOut(500);
      $('#' + $(this).data('rel')).fadeIn(1500);
});
