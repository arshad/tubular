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
  
  $form['tubular_wrapper'] = array(
    '#type' => 'textfield',
    '#title' => t('Wrapper ID'),
    '#description' => t('The ID of the wrapper div'),
  );
  
  return system_settings_form($form);
}