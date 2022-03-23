let colorClassList = document.querySelectorAll(".color-randomizer");

colorClassList.forEach(element => {
    element.style.color = getColor();
})

function changeColor () {
    colorClassList.forEach(element => {
        element.style.color = getColor();
    })
}

function promiser (time) {
    return new Promise((res, rej) => {
        let inf = setInterval(() => {
            changeColor();
        }, time)
    })
}

promiser(200);


function getColor() {
    return '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
}
