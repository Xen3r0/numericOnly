/*
 *
 * Copyright (c) 2006-2010 Manuel SANTISTEBAN (http://www.xenero-developpement.com/)
 * 
 * Version 1.0
 * Demo: http://www.xenero-developpement.com/demo/jquery/numericOnly/demo/
 *
 */
$.fn.numericOnly = function(options) {
	var defaults = {
		"decimal": true,
		"separator": "."
	};
	
	var params = $.extend(defaults, options);
	
	return this.each(function() {
		$(this).keypress(function(e) {
			var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
			
			// Enter
			if (key == 13)
				return true;
			
			// CTRL+A
			if((e.ctrlKey && key == 97 /* Firefox */) || (e.ctrlKey && key == 65) /* Opera */)
				return true;
			
			// CTRL+X (couper)
			if((e.ctrlKey && key == 120 /* Firefox */) || (e.ctrlKey && key == 88) /* Opera */)
				return true;
			
			// CTRL+C (copier)
			if((e.ctrlKey && key == 99 /* Firefox */) || (e.ctrlKey && key == 67) /* Opera */)
				return true;
			
			// CTRL+V (coller), Shift+Ins
			if((e.ctrlKey && key == 118 /* Firefox */) || (e.ctrlKey && key == 86) /* Opera */ || (e.shiftKey && key == 45))
				return true;
			
			// CTRL+Z (annuler)
			if((e.ctrlKey && key == 122 /* Firefox */) || (e.ctrlKey && key == 90) /* Opera */)
				return true;
			
			// Dans le cas d'un chiffre (0 à 9)
			if ((key >= 48 && key <= 57))
				return true
			
			// Dans le cas d'un chiffre à virgule
			if (params.decimal) {
				if(this.value.indexOf(params.separator) >= 0)
					return false;
				
				if(params.separator == "," && key == 44)
					return true;
				
				if(params.separator == "." && key == 46)
					return true;
			}
			
			return false;
		});
	});
};