/**
 * This file adds some LIVE to the Theme Customizer live preview. To leverage
 * this, set your custom settings to 'postMessage' and then add your handling
 * here. Your javascript should grab settings from customizer controls, and
 * then make any necessary changes to the page using jQuery.
 */
( function( $ ) {

	//Update site background color...
	wp.customize( 'color_primary', function( value ) {
		value.bind( function( newval ) {
			$('#menu-primary, #menu-primary .search-form > div, #footer, .audio-shortcode-wrap, .media-shortcode-extend .media-info, .media-info-toggle, .entry-content .media-info-toggle, .media-info-toggle:hover, .media-info-toggle:focus, .wp-audio-shortcode.mejs-container, .mejs-controls, .mejs-volume-button .mejs-volume-slider, .mejs-overlay-play .mejs-overlay-button:after, .mejs-time-rail .mejs-time-float, .wp-playlist-dark, #menu-primary li li a, #menu-secondary li li a, #menu-primary li li a:hover, #menu-secondary li li a:hover, #menu-primary ul ul li a:hover, #menu-secondary ul ul li a:hover, #menu-primary ul ul li a:focus, #menu-secondary ul ul li a:focus, #menu-primary li li a, #menu-secondary li li a, #menu-primary .search-form > div')
        .css('background-color', newval );

      $('.entry a, .widget a, #menu-secondary-items > li > a').css('color', newval );

      $('#menu-primary li li a,	#menu-secondary li li a').css('border-top-color', newval);

      $('.menu li > ul:before').css('border-bottom-color', newval);

      $('.ltr .menu li li > ul:before').css('border-right-color', newval);

      $('.rtl .menu li li > ul:before').css('border-left-color', newval);
		} );
	} );


} )( jQuery );
