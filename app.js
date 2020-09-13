(function (liClass) {
	const children = document.querySelectorAll(liClass); // []

	// clear all
	this.addEventListener("click", () => clearDynamicClass(children, "locked"), true); // useCapture
	this.addEventListener("mouseover", () => clearDynamicClass(children, "hover"), true); // useCapture

	// hover + lock style
	for (child of children) {
		child.addEventListener("mouseover", function () {
			hoverPrev(this);
		});
		child.addEventListener("click", function () {
			locked(this);
		});
	}
})(".beers-item");

// AUX -> child events
function hoverPrev(child) {
	child.classList.add("hover");

	if (child.previousSibling) {
		hoverPrev(child.previousSibling);
	}
}

function locked(child) {
	child.classList.add("locked");

	if (child.previousSibling) {
		locked(child.previousSibling);
	}
}

// AUX -> document event
function clearDynamicClass(children, dynamicClass) {
	for (child of children) {
		child.classList.remove(dynamicClass);
	}
}
