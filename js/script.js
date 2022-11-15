//menubar////
$("i").click(function(){
    $("ul").slideToggle();
});

//=========active scroll navigation=================//
var section = document.querySelectorAll('section');
var navbar = document.querySelectorAll('header nav a');


window.onscroll = () =>{
    section.forEach(sec =>{
        var top = window.scrollY;
        var offset = sec.offsetTop;
        var height = sec.offsetHeight;
        var id = sec.getAttribute('id');



        if (top >= offset && top <offset + height){
            navbar.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a [href*='+ id + ']').classList.add
                ('active');

            });
        };
    });
};
//=======scroll revel================//
ScrollReveal().reveal('.buddha',{ delay: 700, easing: 'ease',distance: '60px',origin: 'bottom'});

//======popoup========//
var popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
}

function closePopup(){
    popup.classList.remove("open-popup");
}





//===================owl arousel start===========================//
//==========explore carousel=================//

$('.explore-slide').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});
//==========adventure carousel=================//
$('.adv').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
});
//==========journal carousel=================//
$('.jour').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
});

//===============owl arousel end=================================//



//================================contact form validation============================//





function validation(){
    var use =document.getElementById("user").value;
    var em =document.getElementById("email").value;
    var tele =document.getElementById("phone").value;
    var mas =document.getElementById("massage").value;




    if (use==""){
        document.getElementById("uname").innerHTML="User name required";
        return false;

    }
    if (em==""){
        document.getElementById("mail").innerHTML="email-id required";
        return false;
        
    }
    if (tele==""){
        document.getElementById("ph").innerHTML="phone number required";
        return false;
        
    }
    if (mas==""){
        document.getElementById("mass").innerHTML="fill required";
        return false;
        
    }
    else{
        document.write("<h3>Thankyou</h3>");
    }
}

    






