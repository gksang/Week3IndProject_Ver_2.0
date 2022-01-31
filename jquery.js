
// -------JQUERY to handle Dark Coloured Backgrounds for Portfolio Sections------

$(document).ready(function() {

    $('.overlay').hover(
        
       function () {
          $(this).css({"opacity":"5"});
       }, 
        
       function () {
          $(this).css({"opacity":"0"});
       }
    );
        
 });

//  ---- JQUERY to Handle White/Light Coloured Backgrounds----
 $(document).ready(function() {

    $('.overlay-dark').hover(
        
       function () {
          $(this).css({"opacity":"5"});
       }, 
        
       function () {
          $(this).css({"opacity":"0"});
       }
    );
        
 });
 

// //  ------JQUERY TO HANDLE DESIGN SECTION DESCRIPTION----

$('#des-icon').on('click', function()  {
   $('.click-desc-des').fadeIn()
   $('#des-icon').css({"display": "none"});
   $('#des-icon-title').css({"display": "none"});
    
});

$('.click-desc-des').on('click', function()  {   
   $('.click-desc-des').css({"display": "none"});
   $('#des-icon').fadeIn()
   $('#des-icon-title').fadeIn()
    
});

// //  ------JQUERY TO HANDLE DEVELOPMENT SECTION DESCRIPTION----

$('#dev-icon').on('click', function()  {
   $('.click-desc-dev').fadeIn()
   $('#dev-icon').css({"display": "none"});
   $('#dev-icon-title').css({"display": "none"});  
});


$('.click-desc-dev').on('click', function()  {   
   $('.click-desc-dev').css({"display": "none"});
   $('#dev-icon').fadeIn()
   $('#dev-icon-title').fadeIn()
    
});

// //  ------JQUERY TO HANDLE PRODUCI MANAGEMENT SECTION DESCRIPTION----

$('#prod-icon').on('click', function()  {
   $('.click-desc-prod').fadeIn()
   $('#prod-icon').css({"display": "none"});
   $('#prod-icon-title').css({"display": "none"});  
});

$('.click-desc-prod').on('click', function()  {   
   $('.click-desc-prod').css({"display": "none"});
   $('#prod-icon').fadeIn()
   $('#prod-icon-title').fadeIn()
    
});







