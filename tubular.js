(function($) {
  Drupal.behaviors.tubular = {
    attach: function(context) {
      $('body').tubular(Drupal.settings.tubular.videoId, Drupal.settings.tubular.wrapperId);
    }
  }
})(jQuery);