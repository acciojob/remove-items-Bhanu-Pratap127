//your JS code here. If required.
const btn = document.getElementById("btn")
	btn.addEventListener("click", removeColor);

function removeColor() {
	const colorSelect = document.getElementById("colorSelect");
	colorSelect.options[colorSelect.selectedIndex].remove();
}