(function ($) {

  // Display the star gazers from the Github.
  $(document).ready(function () {
    var userName = 'maliknaik16';
    var repositories = [
      'webthing-php',
      'wolframalpha-go',
      'crimson',
      'icon_api',
      'recaptcha-lite',
      'wp-media-metadata-fix'
    ];

    for (var i = 0; i < repositories.length; i++) {
      $.getJSON("https://api.github.com/repos/" + userName + "/" + repositories[i], function (data) {
        $('.star-' + data.name).text(data.stargazers_count);
      });
    }
  });
})(jQuery);

function closeAlert(me, event) {
  event.stopPropagation();
  $(me).parent().animate({ opacity: 0 }, 500).hide('slow');
}
