var sectionScenes = [], timer, windowHeigth, windowWidth;

function loaded () {
  windowHeigth = window.innerHeight;
  windowWidth = window.innerWidth;
  // cache scenes
  sectionScenes.push(document.getElementById('scene1'));
  sectionScenes.push(document.getElementById('scene2'));
  if (windowWidth > 768) {
    sectionScenes[0].style.height = windowHeigth + 'px';
    sectionScenes[1].style.height = windowHeigth + 'px';
  } else {
    sectionScenes[0].style.height = windowHeigth * 0.7 + 'px';
    sectionScenes[1].style.height = windowHeigth * 0.7 + 'px';
  }
  // init iscroll
  myScroll = new IScroll('#wrapper', {
    probeType: 3,
    mouseWheel: true,
    // snap: true,
    scrollbars: true,
		interactiveScrollbars: true,
		shrinkScrollbars: 'scale',
		fadeScrollbars: true
  });
  myScroll.on('scroll', handleScroll);
}

function handleScroll () {
  var scrollTop = -this.y + windowHeigth * 0.7;
  clearTimeout(timer);
  timer = setTimeout(function(){
    for (var i = 0; i < sectionScenes.length; i++) {
      if (scrollTop > sectionScenes[i].offsetTop) {
        sectionScenes[i].className = 'scene scene-in';
      } else {
        sectionScenes[i].className = 'scene';
      }
    }
  }, 10);
}
