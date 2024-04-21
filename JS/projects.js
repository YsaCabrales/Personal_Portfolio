const acc = document.getElementsByClassName("accordion");
const topBtn = document.getElementById("topBtn");

// Accordion
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function() {
      this.classList.toggle('active');
      let panel = this.nextElementSibling;
      const accIcon = this.getElementsByTagName('div')[0];
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        accIcon.style.transform = 'rotate(0deg)';
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
        accIcon.style.transform = 'rotate(90deg)';
      }
      
    });
  }


window.onscroll = function() {scrollFunction()};
  
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}
  
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}