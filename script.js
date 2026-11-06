// Welcome message when website loads

console.log("Welcome to Ravi Cricket Stadium! 🏏");

// Simple button confirmation

document.addEventListener("DOMContentLoaded", function () {

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(function (button) {

        button.addEventListener("mouseenter", function () {
            button.style.cursor = "pointer";
        });

    });

});
// ========================================
// RAVI CRICKET STADIUM - JAVASCRIPT
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Welcome to Ravi Cricket Stadium 🏏");


    // ========================================
    // SMOOTH PAGE LOADING MESSAGE
    // ========================================

    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {
            console.log("Opening: " + link.innerText);
        });

    });


    // ========================================
    // BOOKING FORM
    // ========================================

    const bookingForm = document.querySelector("#bookingForm");

    if (bookingForm) {

        bookingForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.querySelector("#name").value;

            alert(
                "Thank you, " + name +
                "! Your booking request has been received. 🏏"
            );

            bookingForm.reset();

        });

    }


    // ========================================
    // CONTACT FORM
    // ========================================

    const contactForm = document.querySelector("#contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            alert("Thank you! Your message has been sent successfully.");

            contactForm.reset();

        });

    }


    // ========================================
    // GALLERY IMAGE POPUP
    // ========================================

    const galleryImages = document.querySelectorAll(".gallery-item img");

    galleryImages.forEach(function (image) {

        image.addEventListener("click", function () {

            const popup = document.createElement("div");

            popup.classList.add("image-popup");

            popup.innerHTML = `
                <span class="close-popup">&times;</span>
                <img src="${image.src}" alt="Cricket Stadium">
            `;

            document.body.appendChild(popup);


            // Close button
            const closeButton =
                popup.querySelector(".close-popup");

            closeButton.addEventListener("click", function () {
                popup.remove();
            });


            // Close when clicking outside the image
            popup.addEventListener("click", function (event) {

                if (event.target === popup) {
                    popup.remove();
                }

            });

        });

    });

});
const contactForm = document.querySelector("#contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        alert("Thank you! Your message has been sent successfully. 🏏");

        contactForm.reset();
    });
}