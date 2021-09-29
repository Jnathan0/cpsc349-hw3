(function (window) {
    'use strict';
    var FORM_SELECTOR = '[payment-form-order="form"]';
    var App = window.App;
    var FormHandler = App.FormHandler;
    var formHandler = new FormHandler(FORM_SELECTOR);
    var modal = $('.modal');
    formHandler.addSubmitHandler(function (data) {
        console.log("In addSubmitHandler");
        var $body = $('<p></p>');
        var description = "Thankyou for your payment " + data.title + " " + data.username + " !";

        $body.append(description);
        modal.append($body);
        modal.show();

        

       
        });



    console.log(formHandler);
    })(window);