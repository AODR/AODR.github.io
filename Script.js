// script.js

$(document).ready(function() {
    const projects = [
        {
            name: "Turn Based RPG",
            description: "A simple turn-based RPG using KOTLIN OOP and Android Studio.",
            link: "https://github.com/MoonSlay/RPGTurn"
        },
        {
            name: "5 Question Quiz Webpage",
            description: "A simple 5-question Quiz webpage made using HTML, CSS, and JavaScript.",
            link: "https://github.com/MoonSlay/VS-Code/tree/main/ExamElect3"
        },
        {
            name: "Quote Repository",
            description: "A library containing various types of quotes made using KOTLIN OOP and Android Studio.",
            link: "https://github.com/MoonSlay/NavigationDrawerLesson"
        },
        {
            name: "Text RPG",
            description: "A simple turn-based text RPG using KOTLIN OOP and Android Studio.",
            link: "https://github.com/MoonSlay/TextRPG"
        }
    ];

    // Load projects dynamically
    function loadProjects() {
        projects.forEach(project => {
            $('#project-list').append(`
                <article class="project">
                    <h3>${project.name}</h3>
                    <p>${project.description}</p>
                    <a href="${project.link}" target="_blank">View Project</a>
                </article>
            `);
        });
    }

    loadProjects();

    // Form Submission
    $('#contact-form').on('submit', function(e) {
        e.preventDefault(); // Prevent default form submission
        const data = {
            name: $('#name').val(),
            email: $('#email').val(),
            message: $('#message').val()
        };

        $.ajax({
            url: 'https://script.google.com/macros/s/AKfycbxZxc5II1KdLYMQubeacUNeIEQCvan9anrooytyy6wZ_ebjPgqzk6ddrHp93xPBSAdUIw/exec',
            method: 'POST',
            contentType: 'application/x-www-form-urlencoded',
            data: data,
            success: function(response) {
                alert('Message sent!');
            },
            error: function() {
                alert('There was an error sending your message.');
            }
        });

        this.reset(); // Clear the form
    });
});
