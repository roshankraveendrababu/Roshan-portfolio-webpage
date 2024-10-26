// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Skill bar animations
window.addEventListener("scroll", function () {
    const skills = document.querySelectorAll(".progress-line span");
    skills.forEach(skill => {
        const skillPos = skill.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.3;
        if (skillPos < screenPos) {
            skill.style.width = skill.getAttribute("data-progress");
        }
    });
});
