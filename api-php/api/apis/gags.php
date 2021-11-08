<?php

class GagsApi extends MagratheaApiControl {

	public function __construct() {
		$this->model = "Gag";
		$this->service = new GagControl();
	}

	public function Search() {
		$data = $_GET;
		return $this->service->Search($data['q'], $data['origin'], $data['author']);
	}

	public function Import() {
		$type = $_GET['type'];
		if($type != "kindle" && $type != "twitter")
			throw new Exception("invalid type: [".$type."]", 500);
		
		$file = $_GET['file'];
		if(is_null($file)) throw new Exception("empty file", 500);

		$importer = new GagImporterControl();

		$rs = $importer->ImportKindle($file);
		return $rs;
	}

}

?>
