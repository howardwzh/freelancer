var sectionScenes = [];
var timer;

function loaded () {
  var windowHeigth = window.innerHeight;
  // cache scenes
  sectionScenes.push(document.getElementById('scene1'));
  sectionScenes.push(document.getElementById('scene2'));
  sectionScenes[0].style.height = windowHeigth + 'px';
  sectionScenes[1].style.height = windowHeigth + 'px';
  // init iscroll
  myScroll = new IScroll('#wrapper', {
    probeType: 3,
    mouseWheel: true,
    snap: true,
    scrollbars: true,
		interactiveScrollbars: true,
		shrinkScrollbars: 'scale',
		fadeScrollbars: true
  });
  myScroll.on('scroll', handleScroll);
  sectionScenes[0].className = 'scene scene-in';
}

function handleScroll () {
  const index = this.currentPage.pageY;
  clearTimeout(timer);
  timer = setTimeout(function(){
    sectionScenes[index].className = 'scene scene-in';
    for (var i = 0; i < sectionScenes.length; i++) {
      if (i !== index) {
        sectionScenes[i].className = 'scene';
      }
    }
  }, 10);
}
