/*!
 * Plugin de modification de background persistant
 * Version : 1.0
 * Par Emmanuel "Manumanu" B. (www.emmanuelbeziat.com)
 * https://github.com/RhooManu/jQuery-changeBackground
 **/

;(function($, undefined) {
	"use strict";

	$.fn.changeBackground = function(params) {

		// Options
		params = $.extend({
			target: 'body'
		}, params);

		// Plugin
		this.each(function() {
			// Variables
			var $that = $(this),
				$target = $(params.target),
				sForumImage = 'fondForum:' + window.location.host + 'Img',
				sForumSelect = 'fondForum:' + window.location.host + 'Select',
				sSelecteurValue,
				sURLimage;

			// chargement de l'image en mémoire si elle existe
			if (localStorage[sForumImage]) {
				changeFond(localStorage[sForumImage]);
				chargeSelecteur();
			}

			// Choix d'un nouvel élément
			$that.on('change', function() {
				sURLimage = $that.find(':selected').data('image');
				sSelecteurValue = $that.val();

				changeFond(sURLimage);

				// Enregistrer le choix
				localStorage.setItem(sForumImage, sURLimage);
				localStorage.setItem(sForumSelect, sSelecteurValue);
			});

			// Modifier le fond de l'élement
			function changeFond(sURLimage) {
				$target.css({
					'background-image': 'url("' + sURLimage + '")'
				});
			}

			// Donner la valeur enregistrée au sélecteur
			function chargeSelecteur() {
				$that.val(localStorage[sForumSelect]);
			}

		});

		// Chaînage jQuery
		return this;
	};

})(jQuery);
