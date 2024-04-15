const promoSectionStart = 45; //in percent

let scrollInfo = 0;

window.addEventListener("load", () => {
    updateScrollInfo();
    document.body.style.setProperty('--promo-section-start', Math.floor(window.innerHeight / 100 * promoSectionStart));

    window.addEventListener("scroll", () => {
        updateScrollInfo();
    });
});

const updateScrollInfo = () => {
    scrollInfo = window.scrollY;

    document.body.style.setProperty('--scroll-y', scrollInfo);
};
