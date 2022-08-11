$("body").ready(function(){
    $(".t-others,.ta,.tb,.tc,.td,.te,.tf,.th,.ti,.tk,.tl,.tm,.tn,.to,.tp,.tq,.tr,.ts,.tt,.tu,.tv,.tw").hide();
})

function display(param){
    var temp = document.querySelector(param);
    if(temp.style.display==="none"){
        temp.style.display="";
    }
    else{
        temp.style.display="none";
    }
}

function t(){
    if($("#tbtn").text()==="Show all"){
        $(".t-others,.ta,.tb,.tc,.td,.te,.tf,.th,.ti,.tk,.tl,.tm,.tn,.to,.tp,.tq,.tr,.ts,.tt,.tu,.tv,.tw").show();
        $("#tbtn").text("Hide all")
    }
    else{
        $(".t-others,.ta,.tb,.tc,.td,.te,.tf,.th,.ti,.tk,.tl,.tm,.tn,.to,.tp,.tq,.tr,.ts,.tt,.tu,.tv,.tw").hide();
        $("#tbtn").text("Show all");
    }
}