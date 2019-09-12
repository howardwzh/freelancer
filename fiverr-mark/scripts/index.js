var TextContainer, Text1, Text2, Text3, SwitchBanner;
var TextContainerTop, TextContainerBottom, Text1Top, Text2Top, Text3Top;

function loaded () {
  var windowHeigth = window.innerHeight;
  // Text Container
  TextContainer = document.getElementById('TextContainer');
  TextContainerTop = TextContainer.offsetTop;
  TextContainerBottom = TextContainerTop + TextContainer.offsetHeight - windowHeigth;
  // Text items
  Text1 = document.getElementById('Text1');
  Text2 = document.getElementById('Text2');
  Text3 = document.getElementById('Text3');
  Text1Top = TextContainerTop + Text1.offsetTop + (windowHeigth - Text1.offsetHeight) / 2;
  Text2Top = TextContainerTop + Text2.offsetTop + (windowHeigth - Text2.offsetHeight) / 2;
  Text3Top = TextContainerTop + Text3.offsetTop + (windowHeigth - Text3.offsetHeight) / 2;
  // 
  SwitchBanner = document.getElementById('SwitchBanner');
  // handle scroll event
  window.onscroll = handleScroll;
  handleScroll()
}

function handleScroll () {
  // fixed or not
  if (this.pageYOffset > TextContainerTop && this.pageYOffset <= TextContainerBottom) {
    SwitchBanner.className = 'switch-banner fixed-banner'
  } else if (this.pageYOffset > TextContainerBottom) {
    SwitchBanner.className = 'switch-banner fixed-bottom'
  } else {
    SwitchBanner.className = 'switch-banner'
  }
  // what image to show
  if (this.pageYOffset <= Text1Top) {
    SwitchBanner.className += ' fixed-banner-A'
  } else if (this.pageYOffset > Text1Top && this.pageYOffset <= Text2Top) {
    SwitchBanner.className += ' fixed-banner-B'
  } else {
    SwitchBanner.className += ' fixed-banner-C'
  }
}
