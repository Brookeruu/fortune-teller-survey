$(document).ready(function(){
  $("#fortune-teller-survey").submit(function(event) {
    event.preventDefault();

    $("#fortune-teller-survey").hide();


    var pointsArray = [];
    $("input:checkbox[name=adjective]:checked").each(function() {
      var point = parseInt($(this).val());

      pointsArray.push(point);
    });
    var total = 0;
    for (var i =0; i < pointsArray.length; i++) {
      total += pointsArray[i];
    }

    if (total === 0) {
      $(".fortune4").show();
    } else if (total < 2) {
      $(".fortune1").show();
    } else if (total <=4) {
      $(".fortune2").show();
    } else {
      $(".fortune3").show();
    }

    console.log(total, pointsArray);

  });
});
