$(document).ready(
    function() {
        if (jQuery.isEmptyObject(json)) {
			$("#badan").load('./html/login.html');
			$("#logout").prop("style", "display: none");
		}
    }
);

function logout() {
	$(location).attr('href', '');
}