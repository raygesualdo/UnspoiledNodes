/*
Modified for Use by UnspoiledNodes
V-1.0
*/

/*Show or Hide Mining*/
$(document).ready(function () {
    $('#Mining').change(function () {
        if (!this.checked) $('.M').fadeOut('slow');
        else $('.M').fadeIn('slow');
    });
});

/*Show or Hide Botany*/
$(document).ready(function () {
    $('#Botany').change(function () {
        if (!this.checked) $('.B').fadeOut('slow');
        else $('.B').fadeIn('slow');
    });
});

/*Show or Hide Mooching*/
$(document).ready(function () {
    $('#Mooch').change(function () {
        if (!this.checked) $('.MCH').fadeOut('slow');
        else $('.MCH').fadeIn('slow');
    });
});

/*UnspoiledNodes Page  The following shows or hides T1-T5 Nodes (Mining and Botany Only)*/
$(document).ready(function () {
    $('#Tier1').change(function () {
        if (!this.checked) $('.T1').fadeOut('slow');
        else $('.T1').fadeIn('slow');
    });
});

$(document).ready(function () {
    $('#Tier2').change(function () {
        if (!this.checked) $('.T2').fadeOut('slow');
        else $('.T2').fadeIn('slow');
    });
});

$(document).ready(function () {
    $('#Tier3').change(function () {
        if (!this.checked) $('.T3').fadeOut('slow');
        else $('.T3').fadeIn('slow');
    });
});

$(document).ready(function () {
    $('#Tier4').change(function () {
        if (!this.checked) $('.T4').fadeOut('slow');
        else $('.T4').fadeIn('slow');
    });
});

$(document).ready(function () {
    $('#Tier5').change(function () {
        if (!this.checked) $('.T5').fadeOut('slow');
        else $('.T5').fadeIn('slow');
    });
});


/*Fishing*/

/*The Following Handles the Scrollbar for Fishing Level*/

// $('#fshlvl').on('change', function(event) {
// //  alert(this.value);
//
//
//   /*Add code here to handle filtering*/
// });

function outputUpdate(fshlvl) {
  document.querySelector('#gather').value = fshlvl;
}


/* The Following Hides or Shows the Nodes based on Weather*/

$('#Any').change(function () {
  if (!this.checked) $('.Any').fadeOut('slow');
    else $('.Any').fadeIn('slow');
  });

$('#Blizzard').change(function () {
  if (!this.checked) $('.BLizzard').fadeOut('slow');
    else $('.Blizzard').fadeIn('slow');
  });

$('#Clear').change(function () {
  if (!this.checked) $('.Clear').fadeOut('slow');
    else $('.Clear').fadeIn('slow');
  });

$('#Cloudy').change(function () {
  if (!this.checked) $('.Cloudy').fadeOut('slow');
    else $('.Cloudy').fadeIn('slow');
  });

$('#Duststorm').change(function () {
  if (!this.checked) $('.Duststorm').fadeOut('slow');
    else $('.Duststorm').fadeIn('slow');
  });

$('#Fair').change(function () {
  if (!this.checked) $('.Fair').fadeOut('slow');
    else $('.Fair').fadeIn('slow');
  });

$('#Fog').change(function () {
  if (!this.checked) $('.Fog').fadeOut('slow');
    else $('.Fog').fadeIn('slow');
  });

$('#Gale').change(function () {
  if (!this.checked) $('.Gale').fadeOut('slow');
    else $('.Gale').fadeIn('slow');
  });

$('#Gloom').change(function () {
  if (!this.checked) $('.Gloom').fadeOut('slow');
    else $('.Gloom').fadeIn('slow');
  });

$('#Heatwave').change(function () {
  if (!this.checked) $('.Heatwave').fadeOut('slow');
    else $('.Heatwave').fadeIn('slow');
  });

$('#Lightning').change(function () {
  if (!this.checked) $('.Lightning').fadeOut('slow');
    else $('.Lightning').fadeIn('slow');
  });

$('#Overcast').change(function () {
  if (!this.checked) $('.Overcast').fadeOut('slow');
    else $('.Overcast').fadeIn('slow');
  });

$('#Rain').change(function () {
  if (!this.checked) $('.Rain').fadeOut('slow');
    else $('.Rain').fadeIn('slow');
  });

$('#Thunderstorm').change(function () {
  if (!this.checked) $('.Thunderstorm').fadeOut('slow');
    else $('.Thunderstorm').fadeIn('slow');
  });

$('#Windy').change(function () {
  if (!this.checked) $('.Windy').fadeOut('slow');
    else $('.Windy').fadeIn('slow');
});
