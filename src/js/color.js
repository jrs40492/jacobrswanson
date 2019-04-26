const sections = document.querySelectorAll('.color-bg');

sections.forEach(section => {
  section.addEventListener('mousemove', e => {
    const x = e.clientX;
    const y = e.clientY;

    const pageHeight = window.innerHeight / 255;
    const pageWidth = window.innerWidth / 255;

    const red = 255 - Math.round(x / pageWidth);
    const green = Math.round(y / pageHeight);
    const blue = 255 - (red + green) / 2;

    const direction = section.dataset.colorDirection;
    section.style.backgroundImage = `linear-gradient(to ${direction}, rgba(${red}, 0, 0, .9), rgba(0, 0, ${blue}, .7) 60%, rgba(0, ${green}, 0, .6) 80%)`;
  });
});
