$(document).ready(
    function() {
        if (jQuery.isEmptyObject(json)) {
			$("#badan").load('./html/login.html');
		}
    }
);

function logout() {
	$(location).attr('href', '');
}