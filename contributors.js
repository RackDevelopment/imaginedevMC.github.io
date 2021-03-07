const REQUEST_URL = 'https://api.github.com/repos/imaginedevMC/imaginedevMC.github.io/contributors'

$(document).ready(() => {
    $.ajax({
        type: "GET",
        url: REQUEST_URL,

        success: data => {
            var contributors = []

            for (var obj of data) {
                contributors.push(obj.login)
            }
            
            $('#contributors').html(contributors.join(', '));
        }
    })
});
