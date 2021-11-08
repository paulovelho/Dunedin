<?php

include_once(__DIR__."/Base/GagBase.php");

class GagImporterControl extends GagControlBase {

	public function __construct() {
	}

	private function cleanContent($content) {
		return preg_replace('/[\x00-\x1F\x80-\xFF]/', '', $content);
	}

	private function parseGag($content) {
		$data = preg_split('/\r\n|\r|\n/', $content);

		if (empty($data[0])) {
			$data = array_splice($data, 1);
		}

		$gag = new Gag();
		$gag->author = $this->cleanContent($data[0]);
		$gag->origin = "kindle";
		$gag->content = $data[3];

		$loc = explode(' | Added on ', $data[1]);
		$location = substr($loc[0], 2);
		$date = new DateTime($loc[1]);
		$gag->location = $location;
		$gag->date = $date->format('Y-m-d H:i:s');
		$gag->CreateHash();

		$gag = $gag->Insert();

		return $gag;
	}

	private function parseKindleFile($file) {
		$txtContent = file_get_contents($file);
		$highlights = explode('==========', $txtContent);

		$parsed = [];

		foreach ($highlights as $gagContent) {
//			array_push($parsed, $gagContent);
			array_push($parsed, $this->parseGag($gagContent));
		}
		return $parsed;
	}

	public function ImportKindle($file) {
		if(!$file)
			throw new Exception("File empty", 500);
			
		$filePath = realpath($GLOBALS['site_path']."/data/".$file);
		if($filePath == false) throw new Exception("File not found", 500);
		
		$parse = $this->parseKindleFile($filePath);

		return $parse;
	}

}

?>
