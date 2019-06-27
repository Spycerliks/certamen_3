$(document).ready(function() {
	//AGREGAR
	$("#agregar").click(function() {
		$.post( "/actusuario",
				{ 	codigo: $("#id").val(),
					nombre: $("#nombre").val(),
					apellido: $("#apellido").val(),
					usuario: $("#username").val(),
					pass: $("#password").val(),
					rut: $("#rut").val(),
					carrera: $("#carrera").val(),
					operacion: "grabar"
				},
			function(data,status) {
			if (status=="success") { 
				$("#dvdetalle").html(data);
			} else {
				mensaje("Problema al añadir el registro!");
			}
		});
	});
	//MODIFICAR
	$("#modificar").click(function() {
		$.post(	"/actusuario", 
			{	codigo: $("#id").val(),
				nombre: $("#nombre").val(),
				apellido: $("#apellido").val(),
				usuario: $("#username").val(),
				pass: $("#password").val(),
				rut: $("#rut").val(),
				carrera: $("#carrera").val(),
				operacion: "modificar"
			},
			function(data,status) {
			if (status=="success") {
				$("#dvdetalle").html(data);
			} else {
				mensaje("Problema al actualizar el registro!");
			}
		});
	});
	//ELIMINAR
	$("#eliminar").click(function() {
		$.post(	"/actusuario",
			{	codigo: $("#id").val(),
				rut: $("#rut").val(),
				operacion: "eliminar"
			},
			function(data,status) {
			if (status=="success") { 
				$("#dvdetalle").html(data);
			} else {
				mensaje("Problema al eliminar el registro!");
			}
		});
	});
	//LIMPIAR
	$("#limpiar").click(function(){
		document.getElementById('id').value = '';
		document.getElementById('nombre').value = '';
		document.getElementById('apellido').value = '';
		document.getElementById('username').value = '';
		document.getElementById('password').value = '';
		document.getElementById('rut').value = '';
		document.getElementById('carrera').value = '';
	});
});