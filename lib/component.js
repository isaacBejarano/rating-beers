// DOM Component
const childrenQty = 5;

((HTMLElement, childrenQty, fontAwesomeIcon) => {
	const parent = document.querySelector(HTMLElement);

	// children create
	for (let i = 1; i <= childrenQty; i++) {
		const li = document.createElement("li");
		const icon = document.createElement("i");
		const liId = HTMLElement.substr(1, HTMLElement.length - 2);
		const liClass = HTMLElement.substr(1, HTMLElement.length - 1);

		// setup class + id + pass down FA Icon
		li.setAttribute("id", `${liId + i}`);
		li.classList.add(liClass + "-item");
		icon.classList.add(...fontAwesomeIcon.split(" "));

		// injection
		li.append(icon);
		parent.append(li); 
	}
})("#beers", childrenQty, "fas fa-beer fa-6x");
// ("#stars", childrenQty, "fas fa-star fa-6x");
// etc...
