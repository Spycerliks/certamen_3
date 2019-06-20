<?php
namespace Modelo;

class classAlumno {

	protected $database;

	public function __construct($container)
	{	
		$this->database = $container->database;
	}

	public function datos(){
		$arr = $this->database->select('alumno', ['rut','carrera','id_usuario']);
		return $arr;
	}
	
}