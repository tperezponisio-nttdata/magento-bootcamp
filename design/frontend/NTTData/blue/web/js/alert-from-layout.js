define('alertFromLayout',[
    'jquery',
    'jquery/ui',
], function ($) {
    'use strict';

    var alertFromLayout = function () {
        $(document).ready(function () {
            console.log('Esto es por .js que esta en el layout');
        });
    };

    // Invoke the function
    alertFromLayout();

    return alertFromLayout;
});
