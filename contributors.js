const REQUEST_URL = 'https://api.github.com/repos/imaginedevMC/imaginedevMC.github.io/contributors'

$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: REQUEST_URL,

        success: function (data) {
            var contributors = []

            for (var obj of data) {
                contributors.push(obj.login)
            }
            
            document.getElementById('contributors').innerHTML = contributors.join()
        }
    })
});