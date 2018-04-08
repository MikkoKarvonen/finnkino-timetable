<?php include 'header.php';?>

<?php
$cityCodes = array(
    1014 => array('Pääkaupunkiseutu', 'Helsinki - Espoo - Vantaa'),
    1012 => array('Espoo', 'Omena - Sello'),
    1039 => array('Omena', 'Espoo'),
    1038 => array('Sello', 'Espoo'),
    1002 => array('Helsinki', 'Tennispalatsi - Kinopalatsi'),
    1031 => array('Kinopalatsi', 'Helsinki'),
    1032 => array('Maxim', 'Helsinki'),
    1033 => array('Tennispalatsi', 'Helsinki'),
    1013 => array('Vantaa', 'Flamingo'),
    1015 => array('Jyväskylä', 'Fantasia'),
    1016 => array('Kuopio', 'Scala'),
    1017 => array('Lahti', 'Kuvapalatsi'),
    1041 => array('Lappeenranta', 'Strand'),
    1018 => array('Oulu', 'Plaza'),
    1019 => array('Pori', 'Promenadi'),
    1021 => array('Tampere', 'Cine Atlas - Plevna'),
    1034 => array('Cine Atlas', 'Tampere'),
    1035 => array('Plevna', 'Tampere'),
    1022 => array('Turku', 'Kinopalatsi')
);;?>

<div class="container is-fluid">

<?php
while (list($key, $value) = each($cityCodes)){ ;?>
    <div id=<?php echo $key;?> class="city">
        <nav class="level">
          <div class="level-item has-text-centered">
            <div class="city-theatre">
              <p class="title"><?php echo $value[0];?></p><br />
              <p class="heading"><?php echo $value[1];?></p>
            </div>
          </div>
        </nav>
    </div>
<?php  }
;?>

</div>

<?php include 'footer.php';?>
