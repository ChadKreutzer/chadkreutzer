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
/*
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTop
 * https://stackoverflow.com/questions/19618545/body-scrolltop-vs-documentelement-scrolltop-vs-window-pagyoffset-vs-window-scrol
 * https://codepen.io/zchee/pen/ogzvZZ?editors=0010
 */
function checkSections(e) {
    sections.forEach(section => {
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