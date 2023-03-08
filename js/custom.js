$(document).ready(function(){

 
    function showWindow(){
        $("#fondo").show();
        $("html body").css("overflow","hidden");
        
      //auto hide after 13s
    setTimeout(hideWindow, 8000);
       
    }
 //showWindow()
    
 
    
   function hideWindow(){
        $("#fondo").hide();
          $("html body").css("overflow","scroll");
 }
    //hideWindow()
    
    //now call function automatically after some time
    
    //auto open after 2s
    setTimeout(showWindow, 0);
    
  
    
   }) 