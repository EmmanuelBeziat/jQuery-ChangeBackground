/*!
 * Description
 * Version : 1.0.0
 * Emmanuel B. (www.emmanuelbeziat.com)
 * https://github.com/EmmanuelBeziat/jQuery-changeBackground
 **/

 ;(function($, window, document, undefined) {
	'use strict';

	/**
	 * Default values
	 */
	var pluginName = 'changeBackground',
		defaults = {
			target: 'body'
		};

	/**
	 * Constructor
	 */
	var Plugin = function(element, options) {
		this.element = element;

		this.settings = $.extend({}, defaults, options);

		this._defaults = defaults;
		this._name = pluginName;

		this.init();
	};

	/**
	 * Methods
	 */
	$.extend(Plugin.prototype, {

		init: function() {
			var plugin = this;

			var $that = $(this),
				$target = $(params.target),
				sForumImage = 'fondForum:' + window.location.host + 'Img',
				sForumSelect = 'fondForum:' + window.location.host + 'Select',
				sSelecteurValue,
				sURLimage;

		},

		changeBackground: function(sURLimage) {
			$target.css({
				'background-image': 'url("' + sURLimage + '")'
			});
		},

		// Give Selected value to Selector
		loadSelector: function() {
			$that.val(localStorage[sForumSelect]);
		}
	});

	/**
	 * jQuery plugin wrapper
	 */
	$.fn[pluginName] = function(options) {

		return this.each(function() {
			if (!$.data(this, 'plugin_' + pluginName)) {
				$.data(this, 'plugin_' + pluginName, new Plugin(this, options));
			}
		});
	};
})(jQuery, window, document);