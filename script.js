$(document).ready(function() {
    // Contact Us Modal
    $('#contactUsBtn').click(function() {
        $('#contactUsModal').modal('show');
    });

    // Form submission
    $('#contactForm').submit(function(e) {
        e.preventDefault();
        $.ajax({
            url: $(this).attr('action'),
            method: 'POST',
            data: $(this).serialize(),
            success: function(response) {
                alert('Form submitted successfully!');
                $('#contactUsModal').modal('hide');
                $('#contactForm')[0].reset();
            },
            error: function(error) {
                alert('An error occurred. Please try again.');
            }
        });
    });

    // What We Do Slider
    $('#whatWeDoSlider').carousel();

    // Our Projects Image Change
    $('.project-item').click(function() {
        $('.project-item').removeClass('active');
        $(this).addClass('active');
        var imageSrc = $(this).data('image');
        $('#projectImage').attr('src', imageSrc);
    });

    // Highlight on hover for cards
    $('.card').hover(
        function() {
            $(this).addClass('shadow-lg');
        },
        function() {
            $(this).removeClass('shadow-lg');
        }
    );
});

// Make sure this is within your document ready function
$('#contactUsBtn').click(function() {
    $('#contactUsModal').modal('show');
});

document.addEventListener('DOMContentLoaded', function() {
    const contactButton = document.getElementById('contactButton');
    const contactFormOverlay = document.getElementById('contactFormOverlay');
    const closeFormButton = document.getElementById('closeForm');
    const submitFormButton = document.getElementById('submitForm');

    contactButton.addEventListener('click', function() {
        contactFormOverlay.style.display = 'flex';
    });

    closeFormButton.addEventListener('click', function() {
        contactFormOverlay.style.display = 'none';
    });

    submitFormButton.addEventListener('click', function(event) {
        event.preventDefault();

        const workEmail = document.getElementById('workEmail').value;
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const agreeTerms = document.getElementById('agreeTerms').checked;

        if (workEmail && firstName && lastName && agreeTerms) {
            console.log('Form submitted:');
            console.log('Work Email:', workEmail);
            console.log('First Name:', firstName);
            console.log('Last Name:', lastName);
            
            alert('Thank you for contacting us, ' + firstName + '! We will get back to you soon.');
            
            // Clear the form
            document.getElementById('workEmail').value = '';
            document.getElementById('firstName').value = '';
            document.getElementById('lastName').value = '';
            document.getElementById('agreeTerms').checked = false;

            // Close the form
            contactFormOverlay.style.display = 'none';
        } else {
            alert('Please fill in all required fields and agree to the terms.');
        }
    });
});