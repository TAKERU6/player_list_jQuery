jQuery(function () {
    $("#f").on("submit", function (e) {
        e.preventDefault();
        if ($("#inputContinent").val() === "root") {
            return $('<h2 class="warningC">Please Select your Continent!!</h2>')
                .insertAfter("form")
                .css("color", "red");
        }
        if ($("#inputPosition").val() === "root") {
            return $('<h2 class="warningP">Please Select your Position!!</h2>')
                .insertAfter("form")
                .css("color", "red");
        }

        $tasks = $(this).serializeArray();

        if ($tasks.length > 0) {
            $(".warningC").remove() && $(".warningP").remove();
        }

        $gender = $tasks[1].value === 'Man' ? '<label class="men">' + $tasks[1].value + '</label>' : '<label class="women">' + $tasks[1].value + '</label>';

        $("#players").append(
            '<ul class="player">' +
            '<li class="gender" style="list-style: none;">' +
            $gender +
            "</li>" +
            '<img src="image/' +
            $("#image").val().slice(12) +
            '" width="200" height="130">' +
            '<li class="name">' +
            "Name: " +
            $tasks[0].value +
            "</li>" +
            '<li class="team">' +
            "Team: " +
            $tasks[2].value +
            "</li>" +
            '<li class="continent">' +
            "Continent: " +
            $tasks[3].value +
            "</li>" +
            '<li class="position">' +
            "Position: " +
            $tasks[4].value +
            "</li>" +
            '<button class="btnDel">Delete</button><button class="btnEdit">Edit</button>' +
            "</ul>"
        );

        $(".men").css({
            'border-bottom': 'solid',
            'border-color': 'blue',
            'border-width': '5px',
            'font-weight': 'bold'
        })
        $(".women").css({
            'border-bottom': 'solid',
            'border-color': 'red',
            'border-width': '5px',
            'font-weight': 'bold'
        })

        $(".men").parent().parent().css("background-color", "skyblue");
        $(".women").parent().parent().css("background-color", "pink");
        $(".name").css("font-weight", "bold");
        $(".team").css("font-weight", "bold");
        $(".continent").css("font-weight", "bold");
        $(".position").css("font-weight", "bold");

        $(".player").on("click", ".btnDel", function (e) {
            $(e.target).closest(".player").remove();
        });

        $(".player").on("click", ".btnEdit", function (e) {
            if ($("#formEdit").is("form")) {
                return false;
            }
            $(e.target)
                .closest(".player")
                .append(
                    '<form action="" id="formEdit">' +
                    "<h3>EDIT FORM</h3>" +
                    '<label for="editTeam">Your Team</label>' +
                    '<input type="text" class="editTeam" name="editTeam" value="' + $(e.target).siblings('.team').text().slice(6) + '">' +
                    '<label for="editPosition">Your Position</label>' +
                    '<select class="editPosition" name="editPosition" required>' +
                    '<option value="GK">GK</option>' +
                    '<option value="DF">DF</option>' +
                    '<option value="MF">MF</option>' +
                    '<option value="FW">FW</option>' +
                    "</select><br></br>" +
                    '<button class="change" type="button">Change</button>' +
                    "</form>"
                );

            $("#formEdit").css("background-color", "yellow");
        });

        $(".player").on('click', '.change', function () {
            $editTeam = $(".editTeam").val()
            $editPosition = $(".editPosition").val()
            $(this).parent().siblings('.team').text('Team: ' + $editTeam)
            $(this).parent().siblings('.position').text('Position: ' + $editPosition)

            $("#formEdit").remove()
        })

        $(".allPlayer").on('click', function () {
            $(".player").show();
        })

        $(".onlyMen").on('click', function () {
            if ($(".gender").children('label').hasClass("men")) {
                $(".men").parent().parent().show() && $(".women").parent().parent().hide();
            }
            return false;
        })

        $(".onlyWomen").on('click', function () {
            if ($(".gender").children('label').hasClass("women")) {
                $(".women").parent().parent().show() && $(".men").parent().parent().hide();
            }
            return false;
        })

        $("#inputName").val("");
        $("#inputTeam").val("");
        $("#inputContinent").val("root");
        $("#inputPosition").val("root");
        $("#image").val("");
        return false;
    });
});