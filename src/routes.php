<?php

use Slim\App;
use Slim\Http\Uri;
use Slim\Http\Request;
use Slim\Http\Response;
use Slim\Views\Twig;
use Slim\Http\Environment;
use Slim\Views\TwigExtension;
use Medoo\Medoo;

return function (App $app) {

	$app->get('/', function ($request, $response) {
		$db = new \Modelo\classUsuario($this);
		$dbp = new \Modelo\classAlumno($this);
		return $this->view->render($response, 'index.html', 
			['usuarios'=>$db->datos(),'alumnos'=>$dbp->datos()]);
	});

	$app->post('/actusuario', function ($request, $response) {
		$op=$_POST["operacion"];
		$db = new \Modelo\classAlumno($this);
		if ($op=="grabar") {
			$db->agregar($_POST["rut"],$_POST["carrera"],$_POST["codigo"],$_POST["nombre"],$_POST["apellido"],$_POST["usuario"],$_POST["pass"]);
		}
		if ($op=="modificar") {
			$db->modificar($_POST["rut"],$_POST["carrera"],$_POST["codigo"],$_POST["nombre"],$_POST["apellido"],$_POST["usuario"],$_POST["pass"]);
		}
		if ($op=="eliminar") {
			$db->eliminar($_POST["rut"],$_POST["codigo"]);
		}
		return $this->view->render($response, 'alumnos_detalle.html',['alumnos'=>$db->datos()]);
	});
};
