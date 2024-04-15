window.addEventListener("load", () => {
    const startSectionBackground = document.querySelector(".startSection .startSectionBackground");
    document.addEventListener("mousemove", (event) =>
        updateParallax(event, startSectionBackground)
    );
});

const updateParallax = (event, element) => {
    const x = event.pageX / window.innerWidth;
    const y = event.pageY / window.innerHeight;

    const shiftX = 1.25 - Math.round(x * 250) / 100;
    const shiftY = 1.25 - Math.round(y * 250) / 100;

    element.style.transform = `translate(${shiftX}%, ${shiftY}%)`;
};
