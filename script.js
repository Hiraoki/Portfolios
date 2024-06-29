$(document).ready(function(){ 
      $(window).scroll(function(){ 
       if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
       }else{
          $('.navbar').removeClass("sticky");
       }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
      });
        
      // slide-up script
      $('.scroll-up-btn').click(function(){
            $('html').animate({scrollTop: 0});
      });
       
       //toggle menu/navbar script
        $('.menu-btn').click(function(){
             $('.navbar .menu').toggleClass("active");
             $('.menu-btn i').toggleClass("active");
        });
         
         // typing animation script
        var typed = new Typed(".typing",{
              strings: [ "Web Developer"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });
        var typed = new Typed(".typing-2",{
            strings: [ "Web Developer"],
          typeSpeed: 100,
          backSpeed: 60,
          loop: true
      });
  
       document.querySelectorAll('.circular-bar').forEach(bar => {
            let percent = bar.getAttribute('data-percent');
            bar.style.setProperty('--percent', percent);
        });
        document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault();
        
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
        
            // Perform validation or send the form data using AJAX or any other method here
            alert(`Thank you, ${name}! Your message has been successfully sent.`);
        
            // Clear the form
            document.getElementById('contactForm').reset();
        });
  });