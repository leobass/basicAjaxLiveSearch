$('#search').keyup(function(){

	$.getJSON('dta.json', function(data) {
		var searchField = $('#search').val();

		var myExp = new RegExp(searchField, "i");
		var output = '<ul class="resultados">';
		
		$.each(data, function(key, val) {
			if ((val.name.search(myExp) != -1) ||(val.fecha.search(myExp) != -1) || (val.bio.search(myExp) != -1)) {
			output += '<li>';
			output += '<h2>'+ val.name +'</h2>';
			output += '<b>Empresa:</b> '+ val.empresa +'</hr>';
			output += '<img src="images/'+ val.shortname +'_tn.jpg" alt="'+ val.name +'" />';
			output += '<p><b>Fecha ultima estadia:</b>' + val.fecha +'<br><br><b>Descripcion:</b>'+ val.bio + '<br><br> </p>';
			output += '</li>';
			}
		});
		output += '</ul>';
		$('#update').html(output);
	}); //get JSON


})