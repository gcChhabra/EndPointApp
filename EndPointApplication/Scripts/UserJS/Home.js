var _HomeModels = {
    "sources": {
        "Index": _RemoteMethods + "/",
        "left": _RemoteMethods + "left/",
        "right": _RemoteMethods + "right/"
    }
};

/*
This class provides the methods for the home page
*/

var _HomePage = {
    /*
    Sends the left value
    */
    SendLeftValue: function () {
        if (!_HomePage.Validation($("#LeftValue"))) {
            alert("Please set the value for left");
            $("#LeftValue").focus();
            return;
        }
        _HomePage.GetBase64($("#LeftValue").val(), function (arg) {
            var arguments = { "text": arg };
            var result = _CommFuncts.GetRemoteDataPost(_HomeModels.sources.left, arguments);
            $("#SendLeftValueOK").html(result.result);
        });

    },

    /*
    Sends the left right
    */

    SendRightValue: function () {
        if (!_HomePage.Validation($("#RightValue"))) {
            alert("Please set the value for right");
            $("#RightValue").focus();
            return;
        }
        _HomePage.GetBase64($("#RightValue").val(), function (arg) {
            var arguments = { "text": arg };
            var result = _CommFuncts.GetRemoteDataPost(_HomeModels.sources.right, arguments);
            $("#SendRightValueOK").html(result.result);
        });
    },

    /*
    It gets the comparison on the third end point
    */
    GetComparationValue: function () {
        if (!_HomePage.Validation($("#LeftValue"))) {
            alert("Please set the value for left");
            $("#LeftValue").focus();
            return;
        }
        if (!_HomePage.Validation($("#RightValue"))) {
            alert("Please set the value for right");
            $("#RightValue").focus();
            return;
        }

        if ($.trim($("#LeftValue").val()) != "" && $.trim($("#SendLeftValueOK").html()) == "") {
            alert('Press the Send button for left image url');
            $("#SendLeftValue").focus();
            return;
        }

        if ($.trim($("#RightValue").val()) != "" && $.trim($("#SendRightValueOK").html()) == "") {
            alert('Press the Send button for right image url');
            $("#SendRightValue").focus();
            return;
        }



        var arguments = {};
        var result = _CommFuncts.GetRemoteDataGet(_HomeModels.sources.Index, arguments);
        $("#ComparationValue").html(result.Compare);
    },

    /*
    Verify the url is not empty
    */
    Validation: function (inputControl) {
        if ($.trim(inputControl.val()) == "") {
            return false;
        }
        return true;
    },

    /*
    Gets the image from the url and convert it to base64 string and execute the function exefunction
    */
    GetBase64: function (url, exefunction) {
        var dataInBase64;
        try {
                var xhr = new XMLHttpRequest();
                xhr.responseType = 'blob';
                xhr.async = false;
                xhr.onload = function () {
                    var reader = new FileReader();
                    reader.onloadend = function () {
                        dataInBase64 = reader.result;
                        exefunction(reader.result);
                    }
                    reader.readAsDataURL(xhr.response);
                };
                xhr.open('GET', url);
                xhr.send();
        } catch (eeee) {
            alert("Error in GetBase64: " + eeee);
        }
        return dataInBase64;
    },
    /*
    This method assigns the events to the controls
    */
    InitForm: function () {
        try {

            $("#SendLeftValue").click(function () {
                _HomePage.SendLeftValue();
            });

            $("#SendRightValue").click(function () {
                _HomePage.SendRightValue();
            });

            $("#GetComparationValue").click(function () {
                _HomePage.GetComparationValue();
            });

            $("#LeftValue").focus(function () {
                $("#LeftValue").val("");
                $("#SendLeftValueOK").html("");
                $("#ComparationValue").html("");
                var arguments = { "text": $("#LeftValue").val() };
                var result = _CommFuncts.GetRemoteDataGet(_HomeModels.sources.left, arguments);
            });

            $("#RightValue").focus(function () {
                $("#RightValue").val("");
                $("#SendRightValueOK").html("");
                $("#ComparationValue").html("");
                var arguments = { "text": $("#RightValue").val() };
                var result = _CommFuncts.GetRemoteDataGet(_HomeModels.sources.right, arguments);
            });
        } catch (e) {
            alert("Error in InitForm: " + e.message);
        }
    }
};

$(document).ready(function () {
    _HomePage.InitForm();
});

