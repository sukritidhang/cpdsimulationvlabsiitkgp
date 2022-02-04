$(document).ready(function() {
 /*main valve*/
	$('.valve').on('click', function() {
		$(this).addClass('valve-rotate');
		//$('.valve-part').addClass('valve-part-rotate');
		
		/*setTimeout(function() {
		 $('.valve').addClass('valve-rotate-reverce'); }, // automatic rotate reverse
		11000);*/
		
		$('.valve').on('click', function() {
		$(this).addClass('valve-rotate-reverce');// onclick valve to  rotate reverse
		})
	})	
	
	
 /*tap knob*/
	$('.valve-part').on('click', function() {
		$(this).addClass('valve-part-rotate');
		
		 /*setTimeout(function() {
		 $('.pipe-first').addClass('pipe-anim'); },
		 1000);*/
		
		 setTimeout(function() {
		 $('.glass-first .water').addClass('water-anim'); },
		 5400);
	
		 setTimeout(function() {
		 $('.glass-second .water').addClass('water-anim'); },
		 7400);			
	
			
            /*pipe starts filling from  top*/
		 setTimeout(function() {
			$('.pipe-firstup').addClass('pipe-animup'); },
			800);
		 setTimeout(function() {
			$('.pipe-secondup').addClass('pipe-animup'); },
		   2800);
		 setTimeout(function() {
			$('.pipe-vertical-firstup').addClass('pipe-animup'); },
		   4800);

		 setTimeout(function() {
			$('.pipe-vertical-secondup').addClass('pipe-animup'); },
		   7300);
		   setTimeout(function() {
			$('.glass-third .water').addClass('water-anim'); },
		   8900);


		   $('.valve-part-vertical-first').on('click', function() {			
			$(this).addClass('valve-part-vertical-first-rotate');// onclick valve-part to  rotate reverse to stop water flow
			//alert("forward");
		    setTimeout(function() {
				$('.pipe-vertical-first').addClass('pipe-anim'); },
			   1000);
			   setTimeout(function() {
				$('.pipe-second').addClass('pipe-anim'); },
			   1450);
			   $('.valve-part-vertical-first').on('click', function() {
				//alert("reverse");
				$(this).addClass('valve-part-vertical-first-rotate-reverse'); // onclick valve-part to  rotate reverse to stop water flow
				setTimeout(function() {
					$('.pipe-vertical-first').addClass('pipe-animstop'); },
				   1000);
			})
		  })

		 
		  $('.valve-part-vertical-second').on('click', function() {
			 
			$(this).addClass('valve-part-vertical-second-rotate'); // onclick valve-part to  rotate reverse to stop water flow
			setTimeout(function() {
					$('.pipe-vertical-second').addClass('pipe-anim'); },
				   1000);	
			 $('.valve-part-vertical-second').on('click', function() {
					$(this).addClass('valve-part-vertical-second-rotate-reverse'); // onclick valve-part to  rotate reverse to stop water flow
					setTimeout(function() {
						$('.pipe-vertical-second').addClass('pipe-animstop'); },
					   1000);
				})  
		  })		   
		  $('.valve-part-vertical-third').on('click', function() {
			$(this).addClass('valve-part-vertical-third-rotate'); // onclick valve-part to  rotate reverse to stop water flow
					setTimeout(function() {
						$('.pipe-vertical-third').addClass('pipe-anim'); },
					   1000);	
			$('.valve-part-vertical-third').on('click', function() {
			$(this).addClass('valve-part-vertical-third-rotate-reverse'); // onclick valve-part to  rotate reverse to stop water flow
			setTimeout(function() {
				$('.pipe-vertical-third').addClass('pipe-animstop'); },
			   1000);
			})  
		  })
		
		  
		 
		 
		

         $('.valve-part').on('click', function() {
	     $(this).addClass('valve-part-rotate-reverce'); // onclick valve-part to  rotate reverse to stop water flow
		 setTimeout(function() {
			$('.pipe-firstup').addClass('pipe-animstop'); },
			800);
		 setTimeout(function() {
			$('.pipe-secondup').addClass('pipe-animstop'); },
		   2800);
		 setTimeout(function() {
			$('.pipe-vertical-firstup').addClass('pipe-animstop'); },
		   3000);

		 setTimeout(function() {
			$('.pipe-vertical-secondup').addClass('pipe-animstop'); },
		   3200);
		// document.getElementsByClassName('water-fill').style.animationPlayState  = "paused"; 
          })
		
		  
    })
	
	  
	
});

/* Toggle Animations */
 /* const jstoggle = document.getElementById('valve-part');
  jstoggle.addEventListener('click', () => {
  //  const animations = document.querySelectorAll('[data-animation');
  //  animations.forEach(animation => {
  //    const running = animation.style.animationPlayState || 'running';
 const animations = document.getElementById('pipe-first');
      animation.style.animationPlayState = running === 'running' ? 'paused' : 'running';
  //  })
  });*/