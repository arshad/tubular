(function($) {
  Drupal.behaviors.tubular = {
    attach: function(context) {
      $('body').tubular(Drupal.settings.tubular.videoID, Drupal.settings.tubular.wrapperID);
      
      // Play/Pause
      $('.videoPause').click(function(e) {
        e.preventDefault();
        if ($(this).hasClass('videoPaused')) {
          ytplayer.playVideo();
          $(this).removeClass('videoPaused');
        } else {
          ytplayer.pauseVideo();
          $(this).addClass('videoPaused');
        }
        return false;
      });
      
      // Mute/Unmute
      $('.videoMute').click(function(e) {
        e.preventDefault();
        if ($(this).hasClass('videoMuted')) {
          ytplayer.mute();
          $(this).removeClass('videoMuted');
        } else {
          ytplayer.unMute();
          $(this).addClass('videoMuted');
        }
        return false;
      });
      
      // Stop
      $('.videoStop').click(function(e) {
        e.preventDefault();
        ytplayer.stopVideo();
        ytplayer.clearVideo();
        $('#yt-container').hide();
        return false;
      });
    }
  }
})(jQuery);