const msgs = document.getElementsByClassName("msg");

[...msgs].forEach(msg => {
    if (msg.innerHTML) msg.classList.remove("hidden");
});