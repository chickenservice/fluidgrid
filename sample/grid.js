let config = {"elementId": "container", "childSelector": "div", "maxHeight": 320, "gutter": 0};

let grid = new FluidGrid(config);

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function clearChildren(parent) {
    while (parent.firstChild) {
        parent.firstChild.remove()
    }
}

function generateBoxes(count)
{
    let boxes = [];
    for(i = 0; i < count; i += 1)
    {
        let div = document.createElement("div");
        div.style.width = randomInteger(100, 800) + "px";
        div.style.height = randomInteger(100, 800) + "px";
        boxes.push(div);
    }

    return boxes;
}

function setMargin(element, margin)
{
    element.style.margin = margin + "px";
}

function addRandomBoxes() {
    let container = document.getElementById("container");
    let count = document.getElementById("number-of-boxes").value;
    config.maxHeight = document.getElementById("max-height").value;
    margin = document.getElementById("margin").value;

    config.gutter = parseInt(margin) + 5;

    clearChildren(container);
    generateBoxes(count).forEach(box => {
        console.log(margin);
        setMargin(box, margin)
        container.appendChild(box)
    });

    grid.update();
}

window.addEventListener("load", () => grid.update(), false);

window.addEventListener("resize", () => grid.update(), false);