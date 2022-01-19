(function(){
    'use strict';

    function count60seconds() {
        
        var count = 59, timer = setInterval(function() {
            $("#counter").html(count--);
            
            if(count == -1) {
                clearInterval(timer);
                getStats();                
               }

        }, 1000);
    }

    function getStats() {

        var source = "http://li-stats.citroenices.com/api";

        $.ajax({
            url: source,
            async: true,
            dataType: 'json',
            success: function(data) {                
                var value = data.total_enrolled_mothers;

                if (Number(value) > 99999) $("#confettis").show();

                var options = {
                    easing: "linear",
                    duration: 2000,
                    toValue: value
                };

                $('.info > h1').numerator(options);
                count60seconds();                 
            }
        });
    }

    $('.info > h1').change(function(){
        
    });

    getStats();

}())