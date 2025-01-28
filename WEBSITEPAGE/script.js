function scrollToSection(event) {
  event.preventDefault(); 

  const targetId = event.target.getAttribute('href').substring(1);
  const targetSection = document.getElementById(targetId);

  window.scrollTo({
    top: targetSection.offsetTop,
    behavior: 'smooth'
  });
}
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', scrollToSection);
});
