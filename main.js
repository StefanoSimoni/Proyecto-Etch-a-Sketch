const container = document.getElementById("container")
const gridSize = document.getElementById("gridSize")
const rainbow = document.getElementById("rainbow")

const createGrid = (size) => {
    for(let i = 0; i < size; i++) {
        const content = document.createElement("div")
        content.setAttribute("id", "row" + i)
        content.setAttribute("style", "display: flex; flex: 1; width: 400px")
        for(let j = 0; j < size; j++) {
            const contentGrid = document.createElement("div")
            contentGrid.setAttribute("id", i + "" + j)
            contentGrid.setAttribute("style", "flex: 1")
            content.appendChild(contentGrid)
            printGrid(contentGrid)
        }
        container.appendChild(content)
    }
}

const printGrid = (box) => {
    rainbow.addEventListener(("click"), () => {
        box.addEventListener("dragover", () => {
            box.style.backgroundColor = "rgb(random(255), random(255), randdom(255))"
        })
    })
    box.addEventListener("dragover", () => {
        box.style.backgroundColor = "rgb(255, 98, 71)"
    })
}

gridSize.addEventListener(("click"), () => {
    const size = prompt("Ingrese la cantidad de cuadrados por lado para la nueva cuadricula", "32")
    container.innerHTML = ""
    createGrid(size)
})

createGrid(16)