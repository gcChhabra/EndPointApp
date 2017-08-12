/*
This class manages the communication features

*/

var _CommFuncts = {
    /*
    Calls the method GetRemoteData as POST
    */
    GetRemoteDataPost: function (ActionUrl, Arguments) {
        return _CommFuncts.GetRemoteData(ActionUrl, Arguments, "POST");
    },

    /*
    Calls the method GetRemoteData as GET
    */
    GetRemoteDataGet: function (ActionUrl, Arguments) {
        return _CommFuncts.GetRemoteData(ActionUrl, Arguments, "GET");
    },

    /*
    This method calls to the endpoints
    */
    GetRemoteData: function (ActionUrl, Arguments, PostGet) {
        var result;
        try {
            $.ajax({
                type: PostGet,
                url: ActionUrl,
                data: Arguments,
                dataType: "json",
                async: false,
                cache: false,
                success: function (data) {
                    if (data != "") {
                        result = data;
                    }
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    alert("Error on Remote call " + ActionUrl + " : " + xhr.status + " - " + thrownError);
                }
            });
        } catch (e) {
            alert("Error on GetRemoteData '" + ActionUrl + "': " + e.message);
        }
        return result;
    }
};
