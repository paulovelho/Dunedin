<?php

include(__DIR__."/Base/GagBase.php");

class Gag extends GagBase {

	public function CreateHash() {
		$this->hash = md5($this->author."-".$this->location);
		return $this;
	}

	public function Insert() {
		$hashedGag = GagControl::GetByHash($this->hash);
		if($hashedGag->id) return $hashedGag;

		if(is_null($this->content)) return $this;

		parent::Insert();
		return $this;
	}

}

class GagControl extends GagControlBase {

	public static function GetByHash($hash) {
		$query = MagratheaQuery::Select()
			->Obj(new Gag())
			->Where(array('hash' => $hash));
		return self::Run($query)[0];
	}

	public function Search($content = null, $origin = null, $author = null) {
		$query = MagratheaQuery::Select()
			->Obj(new Gag());

		if( !is_null($content) ) {
			$query->Where('content LIKE "%'.MagratheaQuery::Clean($content).'%"');
		}
		if( !is_null($origin) ) {
			$query->Where(array('origin' => $origin));
		}
		if( !is_null($author) ) {
			$query->Where('author LIKE "%'.MagratheaQuery::Clean($author).'%"');
		}

		return $this->Run($query);
	}

}

?>
