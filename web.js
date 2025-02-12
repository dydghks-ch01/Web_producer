document.getElementById('song1').addEventListener('click', () => {
  window.open('https://www.youtube.com/watch?v=b7I2JhoUEYA', '_blank');
});
document.getElementById('song2').addEventListener('click', () => {
  window.open('https://www.youtube.com/watch?v=JYMYbnPgiX4', '_blank');
});
document.getElementById('song3').addEventListener('click', () => {
  window.open('https://www.youtube.com/watch?v=0vV8qugPaYw', '_blank');
});




document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const closeModalBtn = document.getElementById("closeModalBtn");
  const contactForm = document.getElementById("contactForm");
  const openModalBtn = document.getElementById("openModalBtn");

  closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  openModalBtn.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    console.log("이메일:", email);
    console.log("문의 내용:", message);


    modal.style.display = "none";

    contactForm.reset();
  });
});
