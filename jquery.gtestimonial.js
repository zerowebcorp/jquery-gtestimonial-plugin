(function($){

	$.fn.gtestimonial = function(options){
	var defaults = {
		csv : 'https://docs.google.com/spreadsheet/pub?key=0AlsQ1nfxAXPfdGJIeWtWbWdOVGtxR3pXZmdKOVRhY0E&output=csv';
	}

	var options = $.extend(defaults,options);

	return this.each(function(){
		
			var obj = $(this);
			obj.html('');
	
			var yqlURL =	"http://query.yahooapis.com/v1/public/yql?q="+
								"select%20*%20from%20csv%20where%20url%3D'"+encodeURIComponent(options.csv)+
								"'%20and%20columns%3D'question%2Canswer'&format=json&callback=?";
			$.getJSON(yqlURL,function(msg){
				$.each(msg.query.results.row,function(){
						var txt = this.answer.replace(/""/g,'"').replace(/^"|"$/g,'');
						var author = this.question.replace(/""/g,'"').replace(/^"|"$/g,'');
				obj.append("						
						

				});

			});
	});
}
})(jQuery);
