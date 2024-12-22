// Smooth Scroll for Navigation
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        document.querySelector(link.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });

        // Update Active Link
        document.querySelectorAll(".nav-link").forEach(nav => nav.classList.remove("active"));
        link.classList.add("active");
    });
});

// Remaining JavaScript for Carousel, Buy Button, and Form Validation as provided earlier.


// Carousel Functionality
const images = document.querySelectorAll(".carousel-image");
let currentIndex = 0;

function showNextImage() {
    images[currentIndex].classList.remove("visible");
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add("visible");
}

setInterval(showNextImage, 2000); // Change image every 3 seconds

// Buy Now Button Interaction
document.querySelectorAll(".buy-button").forEach(button => {
    button.addEventListener("click", () => {
        const cartMessage = document.getElementById("cartMessage");
        cartMessage.textContent = "Item added to cart!";
        cartMessage.classList.add("visible");

        // Hide the message after 2 seconds
        setTimeout(() => {
            cartMessage.classList.remove("visible");
        }, 2000);
    });
});

// Search Bar for Products
// Search Filter
document.getElementById("searchBar").addEventListener("input", e => {
    const query = e.target.value.toLowerCase();
    const products = document.querySelectorAll(".product");
    products.forEach(product => {
        const name = product.querySelector("h3").textContent.toLowerCase();
        if (name.includes(query)) {
            product.Style.display = 'block';
        
        } else {
            product.Style.display = 'none';
        }
        // product.style.display = name.includes(query) ? "block" : "none";
    });
    console.log(query)
});

// Form Validation
document.getElementById("contactForm").addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (!name || !email) {
        alert("Please fill in all fields!");
        return;
    }

    const responseMessage = document.getElementById("responseMessage");
    responseMessage.textContent = `Thank you, ${name}! We'll contact you at ${email}.`;
});