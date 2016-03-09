$(function() {

  $("#random-champion").on("click", function() {
    $.ajax(
      {url: "https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion/11?champData=image&api_key=522d5503-1a3e-4b2e-bf82-80bccbc4056f", success: function(data) {
        $('#image-lander').empty();
        var img_tag = $("<img>");
        var img_modifier = (data['image']['full']);
        var img_link = 'http://ddragon.leagueoflegends.com/cdn/5.2.1/img/champion/';
        img_tag.attr('src', (img_link + img_modifier));
        img_tag.appendTo('#image-lander');
      }
    });
  });

});
