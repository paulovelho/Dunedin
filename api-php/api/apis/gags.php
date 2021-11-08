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
		

		$importer = new GagImporterControl();

		if ($type == "kindle") {
			$file = $_GET['file'];
			if(is_null($file)) throw new Exception("empty file", 500);
			$rs = $importer->ImportKindle($file);
		}
		if ($type == "twitter") $rs = $importer->ImportTwitter();
		return $rs;
	}

}

?>
