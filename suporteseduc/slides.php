<!--******************************************04 Hárea para noticias******************************************-->
		<header class="slides">						
			<img class="mySlides" src="slideimagens/img1.jpg">
			<img class="mySlides" src="slideimagens/img2.jpg">
			<img class="mySlides" src="slideimagens/img3.jpg">
			<img class="mySlides" src="slideimagens/img4.jpg">
		</header>
		<script type="text/javascript">
			var slideIndex = 0;
			carousel();

			function carousel() {
			    var i;
			    var x = document.getElementsByClassName("mySlides");
			    for (i = 0; i < x.length; i++) {
			      x[i].style.display = "none"; 
			    }
			    slideIndex++;
			    if (slideIndex > x.length) {slideIndex = 1} 
			    x[slideIndex-1].style.display = "block"; 
			    setTimeout(carousel, 2000); // Change image every 2 seconds
			}
			</script>
	<!--******************************************Fim Hárea para noticias***************************************-->