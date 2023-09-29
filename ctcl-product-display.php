<?php
/**
 * Plugin Name:       CTCL Product Display
 * Description:       Product display block for CT Commerce Lite ecommerce plugin.
 * Requires at least: 6.3.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       ctcl-product-display
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */

 if(class_exists('ctcLite')){ 
function create_block_ctcl_product_display_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_ctcl_product_display_block_init' );
 }else{

	add_thickbox();
	/**
	 * If main plugin CTC lite is not installed
	 */
	 add_action( 'admin_notices', function(){
		 echo '<div class="notice notice-error is-dismissible"><p>';
		  _e( 'CTCL product display plugin requires CTC Lite plugin installed and activated to work, please do so first.', ' ctcl-product-display' );
		  echo '<a href="'.admin_url('plugin-install.php').'?tab=plugin-information&plugin=ctc-lite&TB_iframe=true&width=640&height=500" class="thickbox">'.__('Click Here to install it',' ctcl-product-display').' </a>'; 
		 echo '</p></div>';
	 } );
 }
