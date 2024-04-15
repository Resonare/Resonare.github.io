window.addEventListener("load", () => {
    document
        .querySelector(".startSection .continueContainer")
        .addEventListener("click", () => {
            document
                .querySelector(".promoSection")
                .scrollIntoView({ behavior: "smooth" });
        });
});
