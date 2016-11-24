  
  window.fbAsyncInit = function()  {
        FB.init({
            appId:' YOUR_APP_ID',
            cookie: true, // enable cookies to allow the server to access 
            xfbml: true, // parse social plugins on this page
            version: 'v2.8' // use graph api version 2.8
        });

        //============== check login status ================
        FB.getLoginStatus(function(response) {
            if (response.status === 'connected') {
            concole.log('connected');
                testAPI();
            } else if (response.status === 'not_authorized') {
                 concole.log('not_authorized');
            } else {
                   concole.log('other status');
            }
        });
    };


    //===================== java scripy SDK ===============
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));


    //======================== login user's detail get ===================
    function testAPI() {
        FB.api('/me', { fields: 'email, name, gender, picture' }, function(response) {
            console.log(JSON.stringify(response));
        });
    }
