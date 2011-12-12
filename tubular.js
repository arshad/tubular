(function($) {
  Drupal.behaviors.tubular = {
    attach: function(context) {
      $('body').tubular(Drupal.settings.tubular.videoID, Drupal.settings.tubular.wrapperID);
      
      // Play/Pause
      $('#videoPause').click(function() {
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
      $('#videoMute').click(function() {
        if ($(this).hasClass('videoMute')) {
          ytplayer.mute();
          $(this).removeClass('videoMute');
        } else {
          ytplayer.unMute();
          $(this).addClass('videoMute');
        }
        return false;
      });
      
      // Nuke video (for slow connections -- stops loading entirely)
      $('#videoStop').click(function() {
        ytplayer.stopVideo();
        ytplayer.clearVideo();
        $('#yt-container').hide();
        return false;
      });
    }
  }
})(jQuery);