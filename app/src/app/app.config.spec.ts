import { Setup } from '@app/../tests-setup'

import { Observable } from "rxjs";

import { AppConfig } from "./app.config";

describe("Testing AppConfig", () => {

	let service: AppConfig;
	var setup = new Setup();

	beforeEach(() => {
		setup.start();
		service = setup.provider(AppConfig);
	});

	it("should get config", () => {
		let api = service.get("api");
		expect(api).not.toBeNull();
	});

});
