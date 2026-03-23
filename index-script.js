

function makeHeroContainer() {
    let screenWidthLessThan750px = mediaMaxWidth750px.matches;
    let hero = document.querySelector(".hero-container")

    if (screenWidthLessThan750px) {
        hero.classList.add("container");
    } else {
        hero.classList.remove("container");
    }
}

mediaMaxWidth750px.addListener(makeHeroContainer);
