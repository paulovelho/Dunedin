import { Injectable } from '@angular/core';
import { ToastrService, GlobalConfig } from 'ngx-toastr';

@Injectable()
export class Toaster {

	private options: GlobalConfig;
  private lastInserted: number[] = [];

	constructor(
		public toastrService: ToastrService
	) {
		this.options = this.toastrService.toastrConfig;
	}

	private debug(type, message): void {
//		console.trace(type + " toaster with message ["+message+"]");
	}

	public error(message: string): void {
		this.debug("error", message);
		this.openToast("error", message, null);
	}
	public success(message: string): void {
		this.openToast("success", message, null);
	}
	public exception(err): void {
		this.debug("error", err);
		this.openToast("error", err, "ERRO!");
	}
	public warning(message: string): void {
		this.openToast("warning", message, null);
	}
	public info(message: string): void {
		this.openToast("info", message, null);
	}

	public openToast(type, message, title) {
		setTimeout(() => { // set timeout: https://github.com/angular/material2/issues/5268
			const inserted = this.toastrService[type](message, title, this.options);
			if (inserted) {
				this.lastInserted.push(inserted.toastId);
			}
		});
	}

  public clearToasts() {
    this.toastrService.clear();
  }
  public clearLastToast() {
    this.toastrService.clear(this.lastInserted.pop());
  }

}
