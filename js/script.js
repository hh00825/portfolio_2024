// AOS & gsap setting
AOS.init({
	once: true,
});
gsap.registerPlugin(ScrollTrigger);

//smooth scroll
const lenis = new Lenis()
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

//intro timeline
const introTl = gsap.timeline();
introTl.to(".intro_title .tit_holder",{
	onStart: function(){
		document.querySelector(".intro_title").classList.add("active");
	}
})
.to("#intro .circle_01",{
	width: "200vw",
	height: "200vw",
	duration: 1.5,
},"=+1.5")
.to("#intro .circle_02",{
	width: "200vw",
	height: "200vw",
	duration: 1.8,
	onComplete: function(){
		document.querySelector("#intro").classList.add("out");
		document.body.classList.remove("no_scroll");
	}
},"<0.35")

//main haejin timeline
const mvTl = gsap.timeline({
	scrollTrigger: {
		trigger: "#main_haejin",
		start: "top top",
		pin: true,
		scrub: 0.5,
	}
})
mvTl.to("#main_haejin .text_01",{
	xPercent: -30,
},"text_moving")
.to("#main_haejin .text_02",{
	xPercent: 30,
},"text_moving")
.fromTo("#main_haejin .text_box_copy",{
	clipPath: "circle(0% at 0% 0%)"
},{
	clipPath: "circle(100% at 50% 50%)",
	backgroundColor: "#2367ff7a"
})
.to("#main_haejin .text_box_copy",{
	clipPath: "circle(3% at 50% 50%)"
})

// works catecory tab
$(".works_cate").each(function(i) {
	$(".works_cate > button").on( "click", function() {
		$(".works_cate > button").find(".current").removeClass("current");
		$(this).addClass("current");
	});
});

$(".works_cate > button").on("click",function(){
	var thisFilter = $(this).data("filter");
	
	$(".works_list > div").addClass("aos-animate");

	if(thisFilter == "all"){
		$(".works_cate > button").removeClass("current");
		$(this).addClass("current");
		$(".works_list").children("div").removeClass("hide");
	}else{
		$(".works_cate > button").removeClass("current");
		$(this).addClass("current");

		$(".works_list").children("div").addClass("hide");
		$(".works_list").children("div."+thisFilter).removeClass("hide");
	}
});