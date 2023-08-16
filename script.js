const screen = document.querySelector('.screen');

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function createGridLayout(tiles) {
    for (let i = 0; i < tiles; i++) {
        const column = document.createElement("div");
        column.classList.add("column-tile");

        for (let j = 0; j < tiles; j++) {
            const tile = document.createElement("div");
            tile.classList.add("row-tile");
            column.appendChild(tile);

            tile.addEventListener('mousedown', function(event) {
                let currentOpacity = parseFloat(event.target.style.opacity) || 0;
                event.target.style.opacity = Math.min(currentOpacity + 0.1, 1);

            });

            tile.addEventListener('mouseover', function(event) {
                if (mouseDown) {
                    let currentOpacity = parseFloat(event.target.style.opacity) || 0;
                    event.target.style.opacity = Math.min(currentOpacity + 0.1, 1);
                }
            });
        };

        screen.appendChild(column);
    };
};

const rangeInput = document.getElementById("rangeInput");
const labelOutput = document.getElementById("labelOutput");

function updateLabel(value) {
    labelOutput.textContent = `${value} x ${value}`;
};

updateLabel(rangeInput.value);

rangeInput.addEventListener('input', function() {
    updateLabel(rangeInput.value);
    screen.innerHTML = '';
    createGridLayout(rangeInput.value);
});


const clearButton = document.getElementById("grid-clear");

clearButton.addEventListener('click', function() {
    screen.innerHTML = '';
    createGridLayout(rangeInput.value);
});


window.onload = () => {
    createGridLayout(rangeInput.value);

    const matchaMode = document.getElementById("matchaMode");
const rowTile = document.querySelectorAll(".row-tile");

matchaMode.addEventListener('click', function() {
    const rowTile = document.querySelectorAll(".row-tile");
    rowTile.forEach(tile => {
        const currentBackgroundColor = getComputedStyle(tile).backgroundColor;

            if (currentBackgroundColor === "rgb(116, 161, 46)") {
                tile.style.backgroundColor = "black";
            } else {
                tile.style.backgroundColor = "#74A12E";
            }
    });
});
};