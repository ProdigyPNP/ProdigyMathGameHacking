import Hack from "./Hack";




export default class Toggler extends Hack {
	enabled?: () => unknown;
	disabled?: () => unknown;
	constructor(
		public parent: HTMLDivElement,
		name?: string,
		description?: string
	) {
		super(parent, name, description);
		this.element.setAttribute("status", "false");
		this.setClick(async () => {
			this.status = !this.status;
			if (this.status) {
				localStorage.setItem(this.name, "true");
				await this.enabled?.();
			} else {
				localStorage.setItem(this.name, "false");
				await this.disabled?.();
			}
		});
	}

	get status() {
		return JSON.parse(this.element.getAttribute("status")!) as boolean;
	}

	set status(val) {
		this.element.setAttribute("status", val.toString());
	}

	setEnabled(event: () => unknown) {
		this.enabled = event;
		if (localStorage.getItem(this.name) === "true") {
			this.element.click();
		}
		return this;
	}

	setDisabled(event: () => unknown) {
		this.disabled = event;
		return this;
	}
}
