	$(function() {
		var webFundamentals = document.getElementById("html"),
				pyt = document.getElementById("pyt"),
				ruby = document.getElementById("r"),
				mean = document.getElementById("m"),
				walker = document.getElementById("walker"),
				scroll = document.getElementById('animation'),
				snd = new Audio("/static/img/blop.mp3"),
				flip = new Audio("/static/img/flip.mp3"),
				x = 0,
				y = 600,
				position = ($('#walker').offsetParent().prevObject[0]),
				left = position.offsetLeft,
				sleft =0,
				scale = walker.getBoundingClientRect().width / walker.offsetWidth;
				console.log(scale);
		
		function playflip() {
			if (position.offsetLeft>=2799 && position.offsetLeft<=3600){
				flip.play();
			}
		}
		document.onkeydown = function (e){
			if(e.keyCode == 39) {
				if (position.offsetLeft>=1200){
					if (webFundamentals.className == 'cvinactive') {
						webFundamentals.className = 'cvactive';
						$(".wf").toggleClass('show');	
						$(".o").toggleClass('show');	
						$('#html').appendTo('#webfund');
						$('#hello').hide(500);
						$('#htmlmessage').show(500)
						snd.play();
					}
				}
				if (position.offsetLeft>=1600){
					if (pyt.className == 'cvinactive') {
						pyt.className = 'cvactive';
						$('#pyt').appendTo('#pythonpic')
						$(".py").toggleClass('show');	
						$('#htmlmessage').hide(500)
						$('#pythonmessage').show(500);
						snd.play();
					}
				}
				if (position.offsetLeft>=2000){
					if (ruby.className == 'cvinactive') {
						ruby.className = 'cvactive';
						$('#r').appendTo('#rorpic');
						$(".rr").toggleClass('show');	
						$('#pythonmessage').hide(500);
						$('#rubymessage').show(500);
						snd.play();
					}					
				}
				if (position.offsetLeft>=2400){
					if (mean.className == 'cvinactive') {
						mean.className = 'cvactive';
						$('#m').appendTo('#meanpic');
						$(".ms").toggleClass('show');
						$('#rubymessage').hide(500);
						$('#meanmessage').show(500);
						snd.play();
					}					
				}
				if (position.offsetLeft>=2800 && position.offsetLeft<=2900){
						$('#meanmessage').hide(500)
						$("#edu").show(500,playflip);
						// $("#hello").hide();
				}

				if (position.offsetLeft>=3200 && position.offsetLeft<=3300){
						$("#edu").hide(500);
						$("#loc").show(500,playflip);
				}

				if (position.offsetLeft>=3600){
						$("#loc").hide(500);
						$('#exit').show(500,playflip);
				}


				x += 250;
				if (scroll.scrollLeft <3700){
					left +=50;;
					sleft +=50;
				}
				walker.style.transform = "scale("+ scale +")";
				walker.style.backgroundPosition = x + 'px ' +'0px';
				walker.style.left = left+'px'; 
				scroll.scrollLeft = sleft;
			}

			if(e.keyCode == 37) {
				if (position.offsetLeft<=3200){
						$("#loc").hide();
						$("#edu").show(0,playflip);
				}
				if (position.offsetLeft<=2800){
						$("#edu").hide(0);
						// $("#hello").hide(0,playflip);

				}

				if (position.offsetLeft<=3600 && position.offsetLeft>3200){ 
						$('#exit').hide(0);
						$("#loc").show(0,playflip);
				}

				x += 250;
				if (scroll.scrollLeft >50){
					left -= 50;
					sleft -=50;
				}
				walker.style.transform = "scale(" + -scale + "," + scale +")";
				walker.style.backgroundPosition = x + 'px ' +'0px';
				walker.style.left = left+'px'; 
				scroll.scrollLeft = sleft;
			}

		}
		$(window).on('mousewheel DOMMouseScroll', function (e) {
		
		var direction = (function () {

		var delta = (e.type === 'DOMMouseScroll' ?
			e.originalEvent.detail * -40 :
			e.originalEvent.wheelDelta);
			return delta > 0 ? 0 : 1;
		}());
		
		if(direction === 1) {
					if (position.offsetLeft>=1200){
					if (webFundamentals.className == 'cvinactive') {
						webFundamentals.className = 'cvactive';
						$(".wf").toggleClass('show');	
						$(".o").toggleClass('show');	
						$('#html').appendTo('#webfund');
						$('#hello').hide(500);
						$('#htmlmessage').show(500)
						snd.play();
					}
				}
				if (position.offsetLeft>=1600){
					if (pyt.className == 'cvinactive') {
						pyt.className = 'cvactive';
						$('#pyt').appendTo('#pythonpic')
						$(".py").toggleClass('show');	
						$('#htmlmessage').hide(500)
						$('#pythonmessage').show(500);
						snd.play();
					}
				}
				if (position.offsetLeft>=2000){
					if (ruby.className == 'cvinactive') {
						ruby.className = 'cvactive';
						$('#r').appendTo('#rorpic');
						$(".rr").toggleClass('show');	
						$('#pythonmessage').hide(500);
						$('#rubymessage').show(500);
						snd.play();
					}					
				}
				if (position.offsetLeft>=2400){
					if (mean.className == 'cvinactive') {
						mean.className = 'cvactive';
						$('#m').appendTo('#meanpic');
						$(".ms").toggleClass('show');
						$('#rubymessage').hide(500);
						$('#meanmessage').show(500);
						snd.play();
					}					
				}
				if (position.offsetLeft>=2800 && position.offsetLeft<=2900){
						$('#meanmessage').hide(500)
						$("#edu").show(500,playflip);
						// $("#hello").hide();
				}

				if (position.offsetLeft>=3200 && position.offsetLeft<=3300){
						$("#edu").hide(500);
						$("#loc").show(500,playflip);
				}

				if (position.offsetLeft>=3600){
						$("#loc").hide(500);
						$('#exit').show(500,playflip);
				}

				x += 250;
				if (scroll.scrollLeft <3350){
					left +=50;
					sleft +=50;
				}
				walker.style.transform = "scale(" + scale + ")";
				walker.style.backgroundPosition = x + 'px ' +'0px';
				walker.style.left = left+'px'; 
				scroll.scrollLeft = sleft;
    }
    if(direction === 0) {
				if (position.offsetLeft<=3200){
						$("#loc").hide();
						$("#edu").show(0,playflip);
				}
				if (position.offsetLeft<=2800){
						$("#edu").hide(0);
						// $("#hello").hide(0,playflip);

				}

				if (position.offsetLeft<=3600 && position.offsetLeft>3200){ 
						$('#exit').hide(0);
						$("#loc").show(0,playflip);
				}
			x += 250;
				if (scroll.scrollLeft >50){
					left -= 50;
					sleft -=50;
				}
				walker.style.transform = "scale("+ -scale + "," + scale + ")";				walker.style.backgroundPosition = x + 'px ' +'0px';
				walker.style.left = left+'px'; 
				scroll.scrollLeft = sleft;
		}

		$('#animation').on("scrollstop",function(){
			console.log('stopped');
  		var x=0;
			
			walker.style.backgroundPosition = x + 'px ' +'0px';
		});
	});

	});