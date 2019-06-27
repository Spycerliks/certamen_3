$(document).ready(function () {
    //VALIDACIONES
    $("#agregar").on("click", function () {
        //ID
        var id = $("#id").val();
        if (id.trim().length == 0) {
            alert("Debe ingresar el ID");
            return false;
        } else if (id <= 0) {
            alert("El ID no puede ser cero o negativo");
            return false;
        }
        //Nombre
        var nombre = $("#nombre").val();
        if (nombre.trim().length == 0) {
            alert("Debe ingresar el nombre");
            return false;
        } else if (nombre.trim().length > 50) {
            alert("El nombre no puede ser mayor a 50 caracteres");
            return false;
        }
        //Apellido
        var apellido = $("#apellido").val();
        if (apellido.trim().length == 0) {
            alert("Debe ingresar el apellido");
            return false;
        } else if (apellido.trim().length > 50) {
            alert("El apellido no puede ser mayor a 50 caracteres");
            return false;
        }
        //Username
        var username = $("#username").val();
        if (username.trim().length == 0) {
            alert("Debe ingresar el username");
            return false;
        } else if (username.trim().length > 10) {
            alert("El username no puede ser mayor a 10 caracteres");
            return false;
        }
        //Password
        var password = $("#password").val();
        if (password.trim().length == 0) {
            alert("Debe ingresar el password");
            return false;
        } else if (password.trim().length > 15) {
            alert("El password no puede ser mayor a 15 caracteres");
            return false;
        }
        //Rut
        var rut = $("#rut").val();
        if (rut.trim().length == 0) {
            alert("Debe ingresar el rut");
            return false;
        } else if (rut.trim().length > 10) {
            alert("El rut no puede ser mayor a 10 caracteres");
            return false;
        }
        //Carrera
        var carrera = $("#carrera").val();
        if (carrera.trim().length == 0) {
            alert("Debe ingresar la carrera");
            return false;
        } else if (carrera.trim().length > 50) {
            alert("La carrera no puede ser mayor a 50 caracteres");
            return false;
        }
    });
    $("#modificar").on("click", function () {
        //ID
        var id = $("#id").val();
        if (id.trim().length == 0) {
            alert("Debe ingresar el ID");
            return false;
        } else if (id <= 0) {
            alert("El ID no puede ser cero o negativo");
            return false;
        }
        //Nombre
        var nombre = $("#nombre").val();
        if (nombre.trim().length == 0) {
            alert("Debe ingresar el nombre");
            return false;
        } else if (nombre.trim().length > 50) {
            alert("El nombre no puede ser mayor a 50 caracteres");
            return false;
        }
        //Apellido
        var apellido = $("#apellido").val();
        if (apellido.trim().length == 0) {
            alert("Debe ingresar el apellido");
            return false;
        } else if (apellido.trim().length > 50) {
            alert("El apellido no puede ser mayor a 50 caracteres");
            return false;
        }
        //Username
        var username = $("#username").val();
        if (username.trim().length == 0) {
            alert("Debe ingresar el username");
            return false;
        } else if (username.trim().length > 10) {
            alert("El username no puede ser mayor a 10 caracteres");
            return false;
        }
        //Password
        var password = $("#password").val();
        if (password.trim().length == 0) {
            alert("Debe ingresar el password");
            return false;
        } else if (password.trim().length > 15) {
            alert("El password no puede ser mayor a 15 caracteres");
            return false;
        }
        //Rut
        var rut = $("#rut").val();
        if (rut.trim().length == 0) {
            alert("Debe ingresar el rut");
            return false;
        } else if (rut.trim().length > 10) {
            alert("El rut no puede ser mayor a 10 caracteres");
            return false;
        }
        //Carrera
        var carrera = $("#carrera").val();
        if (carrera.trim().length == 0) {
            alert("Debe ingresar la carrera");
            return false;
        } else if (carrera.trim().length > 50) {
            alert("La carrera no puede ser mayor a 50 caracteres");
            return false;
        }
    });
    $("#eliminar").on("click", function () {
        //ID
        var id = $("#id").val();
        if (id.trim().length == 0) {
            alert("Debe ingresar el ID que desea eliminar");
            return false;
        } else if (id <= 0) {
            alert("El ID no puede ser cero o negativo");
            return false;
        }
        //Rut
        var rut = $("#rut").val();
        if (rut.trim().length == 0) {
            alert("Debe ingresar el rut que desea eliminar");
            return false;
        } else if (rut.trim().length > 10) {
            alert("El rut no puede ser mayor a 10 caracteres");
            return false;
        }
    });
});