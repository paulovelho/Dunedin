<?php

include_once(__DIR__."/Base/GagBase.php");

class GagImporterControl extends GagControlBase {

	public function __construct() {
	}

	private function cleanContent($content) {
		return preg_replace('/[\x00-\x1F\x80-\xFF]/', '', $content);
	}

	private function parseKindleGag($content) {
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
			array_push($parsed, $this->parseKindleGag($gagContent));
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



	private function parseTwitterGag($tweet) {
		$gag = new Gag();
		$gag->location = $tweet->id;
		$gag->origin = "twitter";
		$date = new DateTime($tweet->created_at);
		$gag->date = $date->format('Y-m-d H:i:s');

		$text = $tweet->full_text;
		if ( substr( $text, 0, 4 ) === "RT @" ) {
			$textData = explode(':', $text, 2);
			$authorData = explode('@', $textData[0]);
			$gag->author = $authorData[1];
			$gag->content = $textData[1];
		} else {
			$gag->author = "@paulovelho";
			$gag->content = $text;
		}

		$gag->CreateHash()->ClearEmojis();
		$gag = $gag->Insert();

		return $gag;
	}


	public function ImportTwitter() {
		$twitterFile = realpath($GLOBALS['site_path']."/data/twitter.js");
		$twitterContent = file_get_contents($twitterFile);
		$twitterData = json_decode($twitterContent);

		$parsed = [];
		foreach ($twitterData as $tweet) {
			array_push($parsed, $this->parseTwitterGag($tweet));
		}
		return $parsed;
	}


}

?>
