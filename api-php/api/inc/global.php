<?php

	session_start();
	ini_set("display_errors", 1);
	ini_set("track_errors", 1);
	ini_set("html_errors", 1);
	error_reporting(1);

	$path = realpath(__DIR__.'/../../lib');
//	set_include_path(get_include_path().PATH_SEPARATOR.$path);

	include("config.php");
 
	// looooooaaaadddiiiiiinnnnnnggggg.....
	include($magrathea_path."/LOAD.php");

	// debugging settings:
	// options: dev; debug; log; none;
	MagratheaDebugger::Instance()->SetType(MagratheaDebugger::LOG)->LogQueries(true);

	// for printing the paths of your css and javascript (that will be included in the index.php)
	MagratheaView::Instance()->IsRelativePath(false);

?>
