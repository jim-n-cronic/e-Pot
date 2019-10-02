/*
$(document).ready(() => {

    subButton = $(".btn-submit-form");
    subButton.on('click', () => {
        $("form").submit(function () {
            $.post("/api/friends", function (data) {
                console.log(data);
                console.log(json(data));
            });

        });
    })
})
*/