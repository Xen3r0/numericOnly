/*
 *
 * Copyright (c) 2006-2010 Manuel SANTISTEBAN (http://www.xenero-developpement.com/)
 * 
 * Version 1.0
 * Demo: http://www.xenero-developpement.com/demo/jquery/numericOnly/
 *
 */
$.fn.numericOnly = function(options) {
	// Paramètres par défaut
	var defauts = {
		"decimal": true,
		"separateur": "."
	};
	
	// Mise à jour des paramètres
	var params = $.extend(defauts, options);
	
	return this.each(function() {
		$(this).keydown(function(e) {
			var key = e.charCode || e.keyCode || 0;
			
			if (key == 8 || key == 9 || key == 46 || (key >= 37 && key <= 40) || (key >= 48 && key <= 57) || (key >= 96 && key <= 105))
				return true
			
			if (params.decimal) {
				if(this.value.indexOf(params.separateur) >= 0) return false;
				if(params.separateur == "," && key == 188) return true;
				if(params.separateur == "." && (key == 110 || key == 190)) return true;
			}
			
			return false;
		});
	});
};