<?php
namespace Modelo;

class classUsuario {

	protected $database;

	public function __construct($container)
	{	
		$this->database = $container->database;
	}

	public function datos(){
		$arr = $this->database->select('usuario', ['id','nombre','apellido','username','pass']);
		return $arr;
	}

	public function unusuario($id) {
		$data = $this->database->select("usuario",["nombre","apellido","username","pass"],["id"=>$id]);
		return $data;
	}
	
	public function agregar($id, $nombre, $apellido, $username, $pass) {
		$this->database->insert("usuario",["id"=>$id,"nombre"=>$nombre,"apellido"=>$apellido,"username"=>"$username","pass"=>"$pass"]);
	}

	public function	modificar($id, $nombre, $apellido, $username, $pass) {
		$data = $this->database->update("usuario",["nombre"=>$nombre,"apellido"=>$apellido,"username"=>"$username","pass"=>"$pass"],["id"=>$id]);
		return $data;
	}

	public function eliminar($id) {
		$this->database->delete("usuario", [ "AND" => [ "id" => $id ] ]);
	}
}