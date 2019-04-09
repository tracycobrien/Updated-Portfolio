$(document).ready(function () {

    

    /*sticky navigation jQuery*/
    $('.js--section-about').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px'
    });

    /*scroll on buttons*/
    $('.js--scroll-down').click(function () {
        $('html, body').animate({
            scrollTop: $('.about').offset().top
        }, 1000);
    })

    /*Navigation Scrolling*/
    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

        /*Animations on Scroll*/
        $('.js--wp-1').waypoint(function(){
            $('.js--wp-1').addClass('animated fadeIn');
        }, {
            offset: '50%'
        });

        $('.js--wp-2').waypoint(function(){
            $('.js--wp-2').addClass('animated fadeInUp');
        }, {
            offset: '50%'
        });

        $('.js--wp-3').waypoint(function(){
            $('.js--wp-3').addClass('animated fadeIn');
        }, {
            offset: '50%'
        });

        $('.js--wp-4').waypoint(function(){
            $('.js--wp-4').addClass('animated pulse');
        }, {
            offset: '50%'
        });

        /*Mobile Navigation*/
        $('.js--nav-icon').click(function(){
            var nav = $('.js--main-nav');

            nav.slideToggle(200);
        })

/*Modal*/
//get modal element
var modal=document.getElementById("portfolioModal1");
//get open modal button 
// var portPhoto = document.getElementsByClassName("portPhoto");
var portPhoto = $(".portPhoto");
//figure out this in vanilla js
//get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

//listen for open click 
// portPhoto.addEventListener('click', openModal);
portPhoto.click(openModal)
//figure out this in vanilla js

//listen for close click 
closeBtn.addEventListener('click', closeModal);

//listen for outside click 
window.addEventListener('click', clickOutside);

//function to open Modal
function openModal(event){
    console.log("just checking.. tee he he");
    var portfolioText;
    var btnId = $(this).attr('id');
    //how do i get this event handler using vanilla JS  homework :)
    /*json file import*/

// example:
// modal.getElementsByClassName('.modal-body')

    $.getJSON('assets/js/portfolio-text.json', function(portfolioText){
        var titleText = portfolioText[btnId].title;
        document.getElementById("project-header-name").innerHTML = titleText;

        var bodyText = portfolioText[btnId].body;
        document.getElementById("project-body").innerHTML = bodyText;

        // var hrefTag = portfolioText[btnId].link;
        // $('#id_of_anchor_tag').attr(href, hrefTag)

        var appLink= portfolioText[btnId].link;
        var hrefLinkId = document.getElementById("href-link");
        hrefLinkId.innerHTML =  portfolioText[btnId].cta;
        hrefLinkId.setAttribute('href', appLink);
        //it is possible to either hard code this in index.html or use JS to do this
        // hrefLinkId.setAttribute('target', '_blank');

//search terms - vanilla js change href, import JSON file with vanilla js, 
        modal.style.display = "block";
    })
    
}

//function to close modal
function closeModal(){
    modal.style.display = "none";
}

//function to close modal if outside click
function clickOutside(e){
    if(e.target == modal){
    modal.style.display = "none";
    }
}


});