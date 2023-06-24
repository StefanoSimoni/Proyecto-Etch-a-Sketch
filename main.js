const container = document.getElementById("container")
const gridSize = document.getElementById("gridSize")
const rainbow = document.getElementById("rainbow")
const darkening = document.getElementById("darkening")

//CUADRICULA
const grid = (size) => {
    for(let i = 0; i < size; i++) {
        const row = document.createElement("div")
        row.setAttribute("id", "row" + i)
        row.setAttribute("style", "display: flex; flex: 1; width: 400px")
        for(let j = 0; j < size; j++) {
            const hole = document.createElement("div")
            hole.setAttribute("id", i + "" + j)
            hole.setAttribute("style", "flex: 1")
            row.appendChild(hole)
            printGrid(hole)
        }
        container.appendChild(row)
    }
}

//FUNCIONES DE PINTADO DEFAULT, RANDOM COLORS Y OSCURECIMIENTO
const printGrid = (box) => {
    //DEFAULT
    box.addEventListener(("dragover"), () => {
        box.style.backgroundColor = "red"
    })
    //RANDOM COLORS
    rainbow.addEventListener(("click"), () => {
        box.addEventListener(("dragover"), () => {
            let r = 0
            let g = 0
            let b = 0
            r = Math.floor(Math.random() * (255 - 0) + 0)
            g = Math.floor(Math.random() * (255 - 0) + 0)
            b = Math.floor(Math.random() * (255 - 0) + 0)
            box.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")"
        })
    })
    //OSCURECIMIENTO PROGRESIVO
    darkening.addEventListener(("click"), () => {
        let black = 10
        box.addEventListener(("click"), () => {
            box.style.backgroundColor = "rgba(0, 0, 0, " + black / 100 + ")"
            black = black + 10
        })
    })
}

//FUNCION PARA DEFINIR UN TAMAÑO ESPECIFICO DE LA CUADRICULA
gridSize.addEventListener(("click"), () => {
    const size = prompt("Ingrese la cantidad de cuadrados por lado para la nueva cuadricula", "32")
    container.innerHTML = ""
    createGrid(size)
})

//LLAMADA A LA FUNCION DE CUADRICULA PARA CREARLA DE MANERA DEFAULT CON UN TAMAÑO DE 16x16
grid(16)