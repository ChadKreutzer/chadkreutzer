const sections = document.querySelectorAll(".section");

function checkSections() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 10;
        const link = document.querySelector(`a[href*=${section.id}`);

        if ((sectionTop) <= scrollPosition) {
            document.querySelector('.active').classList.remove("active");
            link.classList.add("active");
        }
    });
}

window.addEventListener("scroll", checkSections);