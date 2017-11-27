<?php include 'header.php';?>

<?php
$cityCodes = array(
    1014 => 'Pääkaupunkiseutu',
    1012 => 'Espoo',
    1039 => 'Omena',
    1038 => 'Sello',
    1002 => 'Helsinki',
    1031 => 'Kinopalatsi',
    1033 => 'Tennispalatsi',
    1013 => 'Vantaa',
    1015 => 'Jyväskylä',
    1016 => 'Kuopio',
    1017 => 'Lahti',
    1041 => 'Lappeenranta',
    1018 => 'Oulu',
    1019 => 'Pori',
    1021 => 'Tampere',
    1034 => 'Cine Atlas',
    1035 => 'Plevna',
    1022 => 'Turku'
);;?>

<div class="container is-fluid">

<?php
while (list($key, $value) = each($cityCodes)){ ;?>
    <div id=<?php echo $key;?> class="city">
        <nav class="level">
          <div class="level-item has-text-centered">
            <div class="city-theatre">
              <p class="title"><?php echo $value;?></p><br />
              <p class="heading">Muuta minut</p>
            </div>
          </div>
        </nav>
    </div>
<?php  }
;?>

</div>

<?php include 'footer.php';?>
