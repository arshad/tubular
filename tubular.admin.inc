<?php

/**
 * @file
 * Administration pages for Tubular module
 */

/**
 * General configuration form.
 */
function tubular_admin_settings() {
  $form = array();
  
  $form['tubular_video_id'] = array(
    '#type' => 'textfield',
    '#title' => t('Video ID'),
    '#description' => t('Video ID of the Youtube video'),
  );
  
  return system_settings_form($form);
}