/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const menuToggle = document.querySelector(".menu-toggle");
const mainNavigation = document.querySelector(".main-navigation");


menuToggle.addEventListener("click", function () {

    mainNavigation.classList.toggle("active");

});


/* Close menu when a navigation link is clicked */

const navigationLinks = document.querySelectorAll(".main-navigation a");


navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        mainNavigation.classList.remove("active");

    });

});


/* END MOBILE NAVIGATION */



/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm = document.querySelector("#contactForm");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const project = document.querySelector("#project").value;
    const message = document.querySelector("#message").value;


    const subject = encodeURIComponent(
        "New Website Project Inquiry from " + name
    );


    const body = encodeURIComponent(

        "Hello Christianah,\n\n" +

        "Name: " + name + "\n" +

        "Email: " + email + "\n" +

        "Project Type: " + project + "\n\n" +

        "Project Details:\n" +

        message

    );


    window.location.href =
        "mailto:YOUR-EMAIL@example.com?subject=" +
        subject +
        "&body=" +
        body;

});


/* END CONTACT FORM */