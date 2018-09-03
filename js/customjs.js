function navControl() {
	var navbar = document.getElementById("nav");
	// var winheight = window.innerHeight || document.body.clientHeight
	// var docheight = getDocMaxHeight()
	// var scrollTop = window.pageYOffset || document.body.parentNode || document.body.scrollTop
	// var trackLength = docheight - winheight
	// var percentageScrolled = Math.floor(scrollTop/trackLength * 100)
	percentageScrolled = 10
	if (percentageScrolled > 20) {
		console.log(percentageScrolled);
	  navbar.addClass('navbar-gone');
	} else {
		console.log(hi);
		console.log(percentageScrolled);
		navbar.removeClass('navbar-gone');
	}
  }
  
//   function getDocMaxHeight() {
// 	return Math.max(
// 	  document.body.scrollHeight, document.body.offsetHeight,
// 	  document.body.clientHeight
// 	)
//   }