

(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navbar').addClass('sticky-top');
        } else {
            $('.navbar').removeClass('sticky-top');
        }
    });

    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";

    $(window).on("load resize", function () {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
                function () {
                    const $this = $(this);
                    $this.addClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "true");
                    $this.find($dropdownMenu).addClass(showClass);
                },
                function () {
                    const $this = $(this);
                    $this.removeClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "false");
                    $this.find($dropdownMenu).removeClass(showClass);
                }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.whatsapp-link').fadeIn('slow')
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.whatsapp-link').fadeOut('slow')
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Image comparison
    $(".twentytwenty-container").twentytwenty({});


    // Price carousel
    $(".price-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 45,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });


/*     const form = document.getElementById("contactForm");

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        try {
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const number = document.getElementById("number").value;
            const subject = document.getElementById("subject").value;
            const message = document.getElementById("message").value;
            const emailContent = `
      Name: ${name}\n
      Email: ${email}\n
      Number: ${number}\n
      Subject: ${subject}\n
      Message: ${message}
    `;

            //const response = await sendEmailToServer(emailContent);

            if (response.success) {
                showNotification("Thanks! Our team will call you shortly.");
            } else {
                showNotification("Error sending email. Please try again later.");
            }
        } catch (error) {
            console.error("Error sending email:", error);
            showNotification("An unexpected error occurred. Please try again later.");
        }
    });

    function sendEmailToServer(emailContent) {
        const smtp = new SMTPTransport({
            host: 'techbro24.com',
            port: 465,
            secure: true,
            auth: {
                user: 'techbro24official@gmail.com',
                pass: 'poweranshupradeep@24'
            }
        });
        return smtp.sendEmailToServer(JSON.stringify({ emailContent }))
            .then(response => response.json())
            .catch(error => {
                console.error("Error sending email to server:", error);
                return { success: false };
            })
    }

    // Submit Form to Email
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        console.log("fas")
        event.preventDefault();

        console.log("He")
        // Get form values
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var number = document.getElementById("number").value;
        var subject = document.getElementById("subject").value;
        var message = document.getElementById("message").value;

        // Perform validations
        if (!validateName(name)) {
            console.log("sfSsscss")
            showNotification("Please enter a valid name.");
            return;
        }

        if (!validateEmail(email)) {
            showNotification("Please enter a valid email address.");
            return;
        }

        if (!validateMobileNumber(number)) {
            showNotification("Please enter a valid number.");
            return;
        }

        if (!validateSubject(subject)) {
            showNotification("Please enter a valid subject.");
            return;
        }

        if (!validateMessage(message)) {
            showNotification("Please enter a valid message.");
            return;
        }

        // Prepare email content
        var emailContent = `
                Name: ${name}\n
                Email: ${email}\n
                Number: ${number}\n
                Subject: ${subject}\n
                Message: ${message}
            `;

        console.log("cdz")
        // Use an email service to send the email

        window.location.href = `mailto:info@techbro24.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailContent)}`;
        showNotification("Thanks! Out team will call you shortly.");

        console.log("afvd")
    });

    function validateName(name) {
        return name.length > 0;
    }

    function validateEmail(email) {
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    function validateSubject(subject) {
        return subject.length > 0;
    }

    function validateMessage(message) {
        return message.length > 0;
    }

    function validateMobileNumber(number) {
        const pattern = /^[6789]\d{9}$/;
        return pattern.test(number);
    }

    function showNotification(message) {
        const notification = document.getElementById('notification');
        notification.style.color = "#ff9800"
        notification.textContent = message;
        notification.classList.add('show');
        function removeNotification() {
            notification.classList.remove('show');
            // You can also set notification.textContent = ''; here
        }
        setTimeout(removeNotification, 5000);
        console.log("sgdv")
    } */

})(jQuery);

