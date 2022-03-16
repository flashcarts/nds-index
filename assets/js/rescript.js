// Make navbar not open on hover
Array.from(document.getElementsByClassName("hover-content")).forEach(r => {
	r.classList.remove("hover-content");
});

// Make back links go back instead of of to a hardcoded page
Array.from(document.getElementsByClassName("back-link")).forEach(r => {
	if(window.history.length > 1)
		r.href = "javascript:window.history.back()";
});
