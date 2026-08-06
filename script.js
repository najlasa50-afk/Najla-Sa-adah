window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {
        nav.style.background = "rgba(8,17,36,.95)";
    } else {
        nav.style.background = "rgba(8,17,36,.85)";
    }
});

document.querySelectorAll(".card").forEach(card=>{
    card.addEventListener("mouseenter",()=>{
        card.style.transform="translateY(-12px) scale(1.03)";
    });

    card.addEventListener("mouseleave",()=>{
        card.style.transform="translateY(0) scale(1)";
    });
});
