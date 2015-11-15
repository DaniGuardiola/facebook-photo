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
            ctx.drawImage(img, 0, 0, 200, 200);
        }, false);
        var flag = new Image();
        flag.style.opacity = "0.5";
        flag.src = "data:image/png;base64,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";
        flag.addEventListener("load", function() {
            ctx.drawImage(flag, 0, 0, 200, 200);
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
        FB.api("/me/picture?type=large", function(response) {
            photoSelected();
            generateImage(response.data.url);
        });
    }
}());
