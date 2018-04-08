<?php
$cityCodes = array(
  1014 => 'Pääkaupunkiseutu',
  1015 => 'Jyväskylä',
  1016 => 'Kuopio',
  1017 => 'Lahti',
  1041 => 'Lappeenranta',
  1018 => 'Oulu',
  1019 => 'Pori',
  1021 => 'Tampere',
  1022 => 'Turku'
);

$pksCodes = array(
  1002 => 'Helsinki',
  1033 => 'Tennispalatsi',
  1031 => 'Kinopalatsi',
  1032 => 'Maxim',
  1012 => 'Espoo',
  1039 => 'Omena',
  1038 => 'Sello',
  1013 => 'Vantaa'
);

$tampCodes = array(
  1034 => 'Cine Atlas',
  1035 => 'Plevna'
);;?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    <link rel="stylesheet" type="text/css" href="bulma.css">
    <link rel="stylesheet" type="text/css" href="styles.css">
  </head>
  <body>
    <section class="hero is-black">
      <div class="hero-head">
        <nav class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <a class="navbar-item">
                <h1>Timetable</h1>
              </a>
              <span class="navbar-burger burger" data-target="navbarMenuHeroA">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenuHeroA" class="navbar-menu">

              <div class="navbar-end">

              <?php
              while (list($key, $value) = each($cityCodes)){
                if ($key == 1014 || $key == 1021){;?>
                  <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-item show-city" data-rel='<?php echo $key;?>' onclick="loadCity(<?php echo $key;?>);addDays(<?php echo $key;?>)">
                      <?php echo $value;?>
                    </a>
                    <div class="navbar-dropdown is-boxed">
                      <?php if ($key == 1014){
                        while (list($pksKey, $pksValue) = each($pksCodes)){;?>
                          <a class="navbar-item show-city dropdown-item" data-rel='<?php echo $pksKey;?>' onclick="loadCity(<?php echo $pksKey;?>);addDays(<?php echo $pksKey;?>)">
                            <?php echo $pksValue;?>
                          </a>
                          <?php if ($pksKey == 1031 || $pksKey == 1038){;?>
                            <hr class="navbar-divider">
                          <?php };?>
                      <?php }} else {;
                        while (list($tampKey, $tampValue) = each($tampCodes)){;?>
                        <a class="navbar-item show-city dropdown-item" data-rel='<?php echo $tampKey;?>' onclick="loadCity(<?php echo $tampKey;?>);addDays(<?php echo $tampKey;?>)">
                          <?php echo $tampValue;?>
                        </a>
                      <?php }};?>
                    </div>
                  </div>
                <?php } else {;?>
                <a class="navbar-item show-city" data-rel='<?php echo $key;?>' onclick="loadCity(<?php echo $key;?>);addDays(<?php echo $key;?>)">
                  <?php echo $value;?>
                </a>
              <?php  }}
              ;?>

              </div>
            </div>
          </div>
        </nav>
      </div>
      <section class="hero is-black">
        <div class="hero-body">
          <div class="container">
            <h1 class="title" id="time"></h1>
          </div>
        </div>
      </section>
    </section>
