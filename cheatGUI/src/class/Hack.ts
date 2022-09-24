


export default class Hack {
	public element: HTMLButtonElement;
	public name: string;
	// @ts-expect-error
	private description: String;

	constructor(
		public parent: HTMLDivElement,
		name?: string,
		description?: string
	) {
		this.name = "";
		this.description = "";
		this.element = document.createElement("button");
		this.element.classList.add("menu-hack");
		this.parent.append(this.element);

		if (name)
			this.setName(name);
		if (description)
			this.setDesc(description);
	}

	setName(name: string) {
		this.element.innerText = name;
		this.name = name;
		return this;
	}

	setClick(event: () => unknown) {
		this.element.onclick = async () => {
			await event();
			console.log(`Triggered ${this.name}.`);
		};
		return this;
	}

	setDesc(desc: string) {
		this.element.title = desc;
		this.description = desc;
		return this;
	}
}
