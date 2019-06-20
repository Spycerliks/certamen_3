$("#agregar").click(function(){
    $.post( "/actusuario",
                { 	codigo: $("#id").val(),
                	usuario: $("#usuario").val(),
                	pass: $("#password").val(),
                	perfil: $("#perfil").val(),
                	operacion: "grabar"
                },
        function(data,status){
          if (status=="success"){ 
            $("#dvdetalle").html(data);
          } else { 
            mensaje("problema al actualizar el registro!");
          }   
        });
  });

$("#modificar").click(function(){
	$.post(	"/actusuario", 
			{	codigo: $("#id").val(),
                usuario: $("#usuario").val(),
                pass: $("#password").val(),
                perfil: $("#perfil").val(),
                operacion: "modificar"
			},
			function(data,status){
	          if (status=="success"){ 
	            $("#dvdetalle").html(data);
	          } else { 
	            mensaje("problema al actualizar el registro!");
	          }   
	        });
});

$("#eliminar").click(function(){
	$.post(	"/actusuario", 
			{	codigo: $("#id").val(),
                operacion: "eliminar"
			},
			function(data,status){
	          if (status=="success"){ 
	            $("#dvdetalle").html(data);
	          } else { 
	            mensaje("problema al eliminar el registro!");
	          }   
	        });
});