$(document).ready(function() {
    // Project data with improved structure
    const projects = [
        {
            name: "Margot Database System",
            description: "A web application made using C#, HTML, Javascript, and CSS.",
            link: "https://sites.google.com/view/aodr-dev-projects/margot-database",
            image: "images/BRM.png",
            technologies: ["C#", "JavaScript", "HTML", "CSS"]
        },
        {
            name: "Fitness App",
            description: "An android application to track fitness progress developed using Kotlin and Android Studio.",
            link: "https://sites.google.com/view/aodr-dev-projects/fitness-app",
            image: "images/FA.png",
            technologies: ["Kotlin"]
        },
        {
            name: "Turn Based RPG",
            description: "A simple turn-based RPG using KOTLIN OOP and Android Studio.",
            link: "https://github.com/MoonSlay/RPGTurn",
            image: "images/RPGTurn.png",
            technologies: ["Kotlin"]
        },
        {
            name: "Dice Roll",
            description: "A simple android application to roll a dice using Kotlin and Android Studio.",
            link: "https://github.com/AODR/DiceRoll",
            image: "images/DiceRoll.png",
            technologies: ["Kotlin"]
        },
        {
            name: "5 Question Quiz Webpage",
            description: "A simple 5-question Quiz webpage made using HTML, CSS, and JavaScript.",
            link: "https://github.com/MoonSlay/VS-Code/tree/main/ExamElect3",
            image: "images/QuizWeb.png",
            technologies: ["JavaScript", "HTML", "CSS"]
        },
        {
            name: "Quote Repository",
            description: "A library containing various types of quotes made using KOTLIN OOP and Android Studio.",
            link: "https://github.com/MoonSlay/NavigationDrawerLesson",
            image: "images/QuoteRepo.png",
            technologies: ["Kotlin"]
        }
    ];

    // Improved project rendering function
    function renderProjects(filteredProjects) {
        const projectList = $('#project-list');
        projectList.empty();

        filteredProjects.forEach(project => {
            const projectElement = $(`
                <article class="project">
                    <img src="${project.image}" alt="${project.name}" class="project-image">
                    <h3>${project.name}</h3>
                    <p>${project.description}</p>
                    <div class="project-technologies">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                    <a href="${project.link}" target="_blank" class="project-link">View Project</a>
                </article>
            `);
            projectList.append(projectElement);
        });
    }

    // Initialize project display
    renderProjects(projects);

    // Event handler for technology filters
    $('.filter-button').on('click', function() {
        const technology = $(this).data('technology');
        
        // Filter projects based on selected technology
        const filteredProjects = technology 
            ? projects.filter(project => project.technologies.includes(technology))
            : projects;
        
        // Smooth transition effect
        $('.project').addClass('hidden');
        setTimeout(() => {
            renderProjects(filteredProjects);
            $('.project').removeClass('hidden');
        }, 500);

        // Update active filter button
        $('.filter-button').removeClass('active');
        $(this).addClass('active');
    });

    // Contact form submission handler
    $('#contact-form').on('submit', function(e) {
        e.preventDefault();

        const formData = {
            name: $('#name').val().trim(),
            email: $('#email').val().trim(),
            message: $('#message').val().trim()
        };

        // Basic form validation
        if (!formData.name || !formData.email || !formData.message) {
            alert('Please fill in all fields.');
            return;
        }

        // Email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // AJAX form submission
        $.ajax({
            url: 'https://script.google.com/macros/s/AKfycbxZxc5II1KdLYMQubeacUNeIEQCvan9anrooytyy6wZ_ebjPgqzk6ddrHp93xPBSAdUIw/exec',
            method: 'POST',
            contentType: 'application/x-www-form-urlencoded',
            data: formData,
            success: function(response) {
                alert('Message sent successfully!');
                $('#contact-form')[0].reset();
            },
            error: function() {
                alert('Error sending message. Please try again later.');
            }
        });
    });
});