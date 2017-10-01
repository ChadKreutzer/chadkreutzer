function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

const sections = document.querySelectorAll(".section");

function checkSections(e) {
    sections.forEach(section => {
        console.log(section);
        console.log(`${section.offsetTop}: ${window.scrollY + window.innerHeight}`);
        const slideInAt = (window.scrollY + window.innerHeight) - section.offsetTop;
        const imageBottom = section.offsetTop + (section.offsetHeight - 1);
        const isAtSection = slideInAt > section.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        const link = document.querySelector(`a[href*=${section.childNodes[1].id}`);

        if (isAtSection && isNotScrolledPast) {
            link.classList.add("active");
        }
        else {
            link.classList.remove("active");
        }
    });
}

window.addEventListener("scroll", debounce(checkSections));