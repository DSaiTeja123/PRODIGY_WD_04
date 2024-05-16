const navMenu = document.getElementById("nav-menu"), navToggle = document.getElementById("nav-toggle"), navClose = document.getElementById("nav-close");

if(navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if(navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

const tabs = document.querySelectorAll('[data-target]'),
tabContent = document.querySelectorAll('[data-content]');
tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);
    tabContent.forEach((tabContent) => {
      tabContent.classList.remove('tab__active');
    });
    target.classList.add('tab__active');
    tabs.forEach((tab) => {
      tab.classList.remove('tab__active');
    });
    tab.classList.add('tab__active');
  });
});

const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("change-theme");
    document.querySelector(".container").classList.toggle("change-theme");
  });
}


function scrollHeader() {
  const header = document.getElementById("header");
  if(this.scrollY >= 80) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if(this.scrollY >= 350) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

const [contactForm, contactName, contactEmail, contactSubject, contactMessage, errorMessage] = [document.getElementById("contact-form"), document.getElementById("contact-name"), document.getElementById("contact-email"), document.getElementById("contact-subject"), document.getElementById("contact-message"), document.getElementById("error-message")];
const sendEmail = (e) => {
  e.preventDefault();
  if(contactName.value === '' || contactEmail.value === '' || contactSubject.value === '' || contactMessage.value === '') {
    errorMessage.textContent = "Write all the input fields";
  } else {
    // serverID - templateID - #form - publickey
    emailjs.sendForm("service_rebf77t", "template_5ehcf76", "#contact-form", "wqszZO97p-xNdU5Mm")
    .then(() => {
      errorMessage.classList.add("color-first");
      errorMessage.textContent = "Message sent Successfully ☑️ ";
      setTimeout(() => {
        errorMessage.textContent = "";
      }, 5000);
    }, (error) => {
      alert("OOPs !!! Something Went Wrong.....", error);
    });
    contactName.value = "";
    contactEmail.value = "";
    contactMessage.value = "";
    contactSubject.value = "";
  }
};
contactForm.addEventListener("submit", sendEmail);