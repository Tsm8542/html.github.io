$("body").ready(function(){
    $(".t-others,.ta,.tb,.tc,.td,.te,.tf,.th,.ti,.tk,.tl,.tm,.tn,.to,.tp,.tq,.tr,.ts,.tt,.tu,.tv,.tw").css("display","none");
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