const acc = document.getElementsByClassName("accordion");

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