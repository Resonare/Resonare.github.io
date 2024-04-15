window.addEventListener("load", () => {
    const heroSwitchingData = {
        elements: document.querySelectorAll(
            ".startSection .heroContainer > div:nth-child(2) > div > p"
        ),
        time: 400,
        delay: 200,
        idleTime: 3000,
        current: 0,
    };

    document.querySelectorAll(".startSection").forEach((section) => {
        section.style.opacity = 1;
    });

    setTimeout(() => {
        document.querySelector("#heroTitleRect").style.width = "100%";

        setTimeout(() => {
            document.querySelector("#heroTitle").style.opacity = 1;
            document.querySelector("#heroTitleRect").style.transformOrigin =
                "top right";
            document.querySelector("#heroTitleRect").style.transform =
                "scaleX(0)";
        }, 500);
    }, 200);

    setTimeout(() => {
        document.querySelector("#heroText").style.opacity = 1;
        document.querySelector("#heroText").style.transform = "translateX(0)";
    }, 1000);

    setTimeout(() => {
        document.querySelector("#heroSwitchingFirst").style.opacity = 1;
        document.querySelector("#heroSwitchingFirst").style.transform =
            "translateX(0)";

        setTimeout(() => {
            heroSwitchingData.elements.forEach((heroSwitching) => {
                heroSwitching.style.transition = `opacity ${heroSwitchingData.time}ms, top ${heroSwitchingData.time}ms`;
            });
        }, 200);
    }, 900);

    setInterval(() => {
        let oldElement = heroSwitchingData.elements[heroSwitchingData.current];

        setTimeout(() => {
            oldElement.style.top = "-1em";
            oldElement.style.opacity = 0;

            setTimeout(() => {
                oldElement.style.transition = "none";
                oldElement.style.top = "1em";

                setTimeout(() => {
                    oldElement.style.transition = `opacity ${heroSwitchingData.time}ms, top ${heroSwitchingData.time}ms`;
                }, 10);
            }, heroSwitchingData.time);
        }, heroSwitchingData.delay);

        heroSwitchingData.current++;

        if (heroSwitchingData.current >= heroSwitchingData.elements.length)
            heroSwitchingData.current = 0;

        let newElement = heroSwitchingData.elements[heroSwitchingData.current];

        newElement.style.top = 0;
        newElement.style.opacity = 1;
    }, heroSwitchingData.idleTime);

    setTimeout(() => {
        document.querySelector(".continueContainer").style.opacity = 1;
    }, 1000);

    setTimeout(() => {
        document.querySelector(".logoContainer").style.opacity = 1;
        document.querySelector(".logoContainer").style.transform =
            "translateX(0)";
    }, 200);

    setTimeout(() => {
        document
            .querySelectorAll(".optionContainer > div")
            .forEach((optionBorder) => {
                optionBorder.style.opacity = 1;
            });
    }, 1000);
});
