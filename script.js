/* global FB */
(function() {
    "use strict";

    function init() {
        document.getElementById("loader").classList.remove("on");
    }

    function photoSelected() {
        document.getElementById("photo").classList.remove("on");
    }

    function generateImage(url) {
        var canvas = document.getElementById("generated-image");
        var ctx = canvas.getContext("2d");
        var img = new Image();
        img.src = url;
        img.addEventListener("load", function() {
            ctx.drawImage(img, 0, 0);
            var flag = new Image();
            flag.style.opacity = "0.5";
            flag.src = "data:image/png;base64,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";
            flag.addEventListener("load", function() {
                ctx.drawImage(flag, 0, 0);
            }, false);
        }, false);
    }

    function statusChangeCallback(response) {
        // The response object is returned with a status field that lets the
        // app know the current login status of the person.
        // Full docs on the response object can be found in the documentation
        // for FB.getLoginStatus().
        if (response.status === "connected") {
            // Logged into your app and Facebook.
            testAPI();
        } else if (response.status === "not_authorized") {
            // The person is logged into Facebook, but not your app.
            document.getElementById("login-status").innerHTML = "Please log " +
                "into this app.";
        } else {
            // The person is not logged into Facebook, so we"re not sure if
            // they are logged into this app or not.
            document.getElementById("login-status").innerHTML = "Please log " +
                "into Facebook.";
        }
        init();
    }

    // This function is called when someone finishes with the Login
    // Button.  See the onlogin handler attached to it in the sample
    // code below.
    function checkLoginState() {
        FB.getLoginStatus(statusChangeCallback);
    }

    window.fbAsyncInit = function() {
        FB.init({
            appId: "1013961131958960",
            cookie: true, // enable cookies to allow the server to access 
            // the session
            xfbml: true, // parse social plugins on this page
            version: "v2.5" // use version 2.5
        });

        // Now that we"ve initialized the JavaScript SDK, we call 
        // FB.getLoginStatus().  This function gets the state of the
        // person visiting this page and can return one of three states to
        // the callback you provide.  They can be:
        //
        // 1. Logged into your app ("connected")
        // 2. Logged into Facebook, but not your app ("not_authorized")
        // 3. Not logged into Facebook and can"t tell if they are logged into
        //    your app or not.
        //
        // These three cases are handled in the callback function.

        FB.getLoginStatus(function(response) {
            statusChangeCallback(response);
        });

    };

    // Load the SDK asynchronously
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, "script", "facebook-jssdk"));

    // Here we run a very simple test of the Graph API after login is
    // successful.  See statusChangeCallback() for when this call is made.
    function testAPI() {
        FB.api("/me/picture?height=200&width=200", function(response) {
            photoSelected();
            generateImage(response.data.url);
        });
    }
}());
