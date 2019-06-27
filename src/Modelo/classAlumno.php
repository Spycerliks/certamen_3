<?php
namespace Modelo;

class classAlumno extends classUsuario {

	protected $database;

	public function __construct($container)
	{	
		$this->database = $container->database;
	}

	public function datos(){
		$arr = $this->database->select('alumno', ["[><]usuario" =>["id_usuario"=>"id"]],
		['alumno.rut','alumno.carrera','alumno.id_usuario',
		'usuario.id','usuario.nombre','usuario.apellido','usuario.username','usuario.pass']);

		return $arr;
	}

	public function agregar($rut, $carrera, $id, $nombre, $apellido, $username, $pass) {
		parent::agregar($id, $nombre, $apellido, $username, $pass);

		$this->database->insert("alumno",["rut"=>$rut,"carrera"=>$carrera,"id_usuario"=>"$id"]);
	}

	public function	modificar($rut, $carrera, $id, $nombre, $apellido, $username, $pass) {
		parent::modificar($id, $nombre, $apellido, $username, $pass);

		$data = $this->database->update("alumno",["carrera"=>$carrera],["rut"=>$rut]);
		return $data;
	}

	public function eliminar($rut, $id) {
		parent::eliminar($id);
		$this->database->delete("alumno", [ "AND" => [ "rut" => $rut ] ]);
	}
}