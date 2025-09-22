const roles = ["Data Engineer", "Data Scientist", "Big Data Specialist", "Cloud ETL Architect"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const speed = 120;

function typeRole() {
  const roleSpan = document.getElementById("typed-role");
  let current = roles[roleIndex];
  
  if (isDeleting) {
    roleSpan.textContent = current.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  } else {
    roleSpan.textContent = current.substring(0, charIndex++);
    if (charIndex === current.length) {
      isDeleting = true;
      setTimeout(typeRole, 1500);
      return;
    }
  }
  setTimeout(typeRole, isDeleting ? speed / 2 : speed);
}
typeRole();

document.querySelector('.contact form').addEventListener('submit', async function(e) {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);
  const response = await fetch(form.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  });
  if (response.ok) {
    alert('Message sent successfully!');
    form.reset();
  } else {
    alert('Message failed. Try again later.');
  }
});
