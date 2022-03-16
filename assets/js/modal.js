document.getElementById("modal").addEventListener("show.bs.modal", function(event) {
	const button = event.relatedTarget;

	this.querySelector(".modal-title").innerText = button.getAttribute("data-name");
	if(button.getAttribute("data-content")) {
		this.querySelector(".modal-body").innerHTML = button.getAttribute("data-content");
		this.querySelector(".modal-dialog").classList.add("modal-lg");
	}
});
