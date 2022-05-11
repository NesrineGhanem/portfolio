
// home section 

//animation name 
var typed = new Typed(".input", {
    strings:[" Nesrine Ghanem"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})

//btn sing up
$(function(){
    $('.sing-up').click(function(){
        alert('You clicked sing-up !')
    })
})

//about section
//btn more about me
$(function(){
    $('#btn-about').click(function(){
       $('.social').prepend('<p>I’ve always been someone who has both a creative and a logical side. When I discovered web design , I realized it would behe perfect fit. I could use my creative side to design and my logical side to code. As a bonus, being both designer and developer allows me to make sure no detail is lost in translation.</p>');
       $('#btn-about').toggle();

    })
})


//img move /
var balls = document. querySelector(".feature-img");
document.onmousemove = function(){
    var x = event.clientx * 100/window.innerWidth+"%";
    var y = event.clienty * 100/window.innerHeight+"%";
    for(var i=0;i<2;i++){
        balls[i].style.left=x;
    }
}

//about section

// contact
$(function(){
    $('#contact-form').validate({
        rules: {
            name: {
              required : true
            },

            email: {
              required: true ,
              email : true ,
            },

            description : {
             required : true
            }
        }
    })
    
}); 







// copyrithg
$(function(){
    var currentDate = new Date();
    $('#currentYear').text(currentDate.getFullYear());
})








