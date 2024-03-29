<?php
	require("inc/global.php");
	include($magrathea_path."/MagratheaAdmin.php"); //  should already be declared

	$email = @$_POST["email"];
	$pass = @$_POST["password"];

	if(!empty($email)) {
		if($email == "paulovelho" && $pass = "123") {
			$_SESSION["magrathea_user"] = $email;
		} else {
			$message = "Login or password incorrect!";
		}
	}

	if(!empty($_SESSION["magrathea_user"])) {
		$admin = new MagratheaAdmin(); // adds the admin file
		$admin->AddPlugin("colorbox");
		$admin->Load(); // load!
		die;
	}

?>

<html>
	<head>
		<title>Magrathea Admin</title>
		<style>
	body {
		font: 13px/20px 'Lucida Grande', Tahoma, Verdana, sans-serif;
		color: #404040;
		background: #AAA;
	}
	.container {
		margin: 80px auto;
		width: 640px;
	}
	.login {
		background-color: #FFF;
		padding: 20px;
	}
		.login h1 {
			text-align: center;
			width: 100%;
		}
		.login input {
			width: 100%;
			font-family: 'Lucida Grande', Tahoma, Verdana, sans-serif;
			font-size: 14px;
			margin: 5px;
			padding: 0 10px;
			height: 34px;
			color: #404040;
			background: white;
			border: 1px solid;
			border-color: #c4c4c4 #d1d1d1 #d4d4d4;
			border-radius: 2px;
			outline: 5px solid #eff4f7;
  		}
  		.login .bt {
			padding: 0 18px;
			height: 29px;
			font-size: 12px;
			font-weight: bold;
			color: #000;
			text-shadow: 0 1px #e3f1f1;
			background: #CCC;
			border: 1px solid;
			border-color: #b4ccce #b3c0c8 #9eb9c2;
			border-radius: 16px;
			outline: 0;
  		}
  	.message { 
  		color: red;
  	}
		</style>
	</head>
	<body>

	<section class="container">
		<div class="login">
			<h1>Magrathea Login</h1>
			<form method="post" action="admin.php">
				<p><input type="text" name="email" value="" placeholder="e-mail"></p>
				<p><input type="password" name="password" value="" placeholder="password"></p>
				<?php if ($message) { ?>
				<p class="message"><?php echo $message; ?></p>
				<?php } ?>
				<p class="submit"><input type="submit" class="bt" name="commit" value="Login"></p>
			</form>
		</div>
	</section>

	</body>
</html>

