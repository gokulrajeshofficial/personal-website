$(document).ready(function(){

    $("#signup-form").validate({
        rules : {
            name :{ 
                required:true,
                minlength:3,
            },
            email : { 

                required:true,
                email:true,
                
            },
            subject: { 

                required:true,
                text:true
                
            },
            message : {

                required:true,
                minlength:10,
                maxlength:50

            }
            
            
        }
    })
})