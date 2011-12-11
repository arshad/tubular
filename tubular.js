(function($) {
  Drupal.behaviors.tubular = {
    attach: function(context) {
      $('body').tubular(Drupal.settings.tubular.videoID, Drupal.settings.tubular.wrapperID);
    }
  }
})(jQuery);