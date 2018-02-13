function init() {
	if (jQuery.isEmptyObject(json)) {
		$("#badan").load('./html/login.html');
		$("#logout").prop("style", "display: none");
	}
}

$(document).ready(
    function() {
        init();
    }
);

function logout() {
	json = {};	
	init();
}