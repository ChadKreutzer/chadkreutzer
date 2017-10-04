const sections = document.querySelectorAll(".section");

function checkSections() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 10;
        console.log(`${section.id}: ${sectionTop}, position: ${scrollPosition}`);
        const link = document.querySelector(`a[href*=${section.id}`);

        if ((sectionTop) <= scrollPosition) {
            document.querySelector('.active').setAttribute('class', ' ');
            link.classList.add("active");
        }
    });
}

window.addEventListener("scroll", checkSections);