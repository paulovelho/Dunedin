<?php

	include($magrathea_path."/MagratheaApi.php");

	include("apis/authentication.php");
	include("apis/users.php");
	include("apis/gags.php");

	class DunedinAPI {

		const OPEN = false;
		const LOGGED = "IsLogged";
		const ADMIN = "IsAdmin";

		public static function Start() {

			$authApi = AuthenticationApi::Instance();
			$usersApi = new UsersApi();
			$gagsApi = new GagsApi();

			$api = MagratheaApi::Instance()
				->BaseAuthorization($authApi, self::LOGGED)     

				// auth
				->Add("POST", "login", $authApi, "Login", self::OPEN)
				->Add("GET", "token", $authApi, "GetTokenInfo", self::OPEN)

				// users
				->Crud("user", $usersApi, self::ADMIN)
				->Add("POST", "bootstrap", $usersApi, "Initialize", self::OPEN)
				->Add("PUT", "update-password", $usersApi, "UpdatePassword", self::LOGGED)
				->Add("PUT", "user/:id/toggle", $usersApi, "ToggleActive", self::ADMIN)

				->Crud("gag", $gagsApi, self::LOGGED)
				->Add("GET", "search", $gagsApi, "Search", self::LOGGED)

				->Add("GET", "import", $gagsApi, "Import", self::ADMIN)

			;

      return $api;
		}

	}

?>
