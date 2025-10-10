function toggleMenu() {
    const nav = document.getElementById("hamburgur-nav");
    const menu = document.querySelector(".menu-link");
    const icon = document.querySelector(".hamburgur-icon");
    nav.classList.toggle("open");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Select the contact form using its class name
const form = document.querySelector('.contact-form');

// Create a <p> element to show messages (like success or error)
const status = document.createElement('p');
status.style.marginTop = '10px';      // adds spacing above the message
form.appendChild(status);             // place it inside the form (below button)

// Add an event listener for form submission
form.addEventListener('submit', async (e) => {
  e.preventDefault(); // stop the page from reloading

  // Collect all the input values from the form
  const data = new FormData(form);

  try {
    // Send the form data to Formspree
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      // If form is sent successfully
      status.textContent = "✅ Message sent successfully!";
      status.style.color = "green";
      form.reset(); // clears all input fields

      // Optional: remove message after 3 seconds
      setTimeout(() => {
        status.textContent = "";
      }, 3000);
    } else {
      // If something went wrong
      status.textContent = "❌ Oops! Something went wrong. Try again.";
      status.style.color = "red";
    }
  } catch (error) {
    // If there’s a network or server error
    status.textContent = "⚠️ Network error. Please try again later.";
    status.style.color = "red";
  }
});


// Animation thing

// 1️⃣ Select all elements with the class "animate-on-scroll"
const elements = document.querySelectorAll('.animate-on-scroll');

// 2️⃣ Function to check if elements are in the viewport
function checkScroll() {
    // Trigger point: 90% down from the top of the viewport
    const triggerBottom = window.innerHeight * 0.9;

    elements.forEach(el => {
        // Distance of element from top of viewport
        const elTop = el.getBoundingClientRect().top;

        // If element is above trigger point, add "active" class
        if (elTop < triggerBottom) {
            el.classList.add('active');
        }
    });
}

// 3️⃣ Run the function when scrolling or loading the page
window.addEventListener('scroll', checkScroll); // on scroll
window.addEventListener('load', checkScroll);   // on page load


  // Get all section elements and nav links
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });
