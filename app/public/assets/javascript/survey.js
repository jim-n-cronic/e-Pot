$(document).ready(() => {

    subButton = $(".btn-submit-form");
    subButton.on('click', () => {
        $("form").submit(function() {

            console.log($(this))
            // $.post($(this).attr("action"), $(this).serialize(), (jsonData) => {
            //     console.log(jsonData);
            // }, "json");
        });
    })



})