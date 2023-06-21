const container = document.getElementById("container")

const createGrid = () => {
    for(let i = 0; i < 16; i++) {
        const content = document.createElement("div")
        content.setAttribute("id", "row" + i)
        for(let j = 0; j < 16; j++) {
            var contentGrid = document.createElement("div")
            contentGrid.setAttribute("id", i + "" + j)
            contentGrid.setAttribute("style", "width: 40px; height: 20px; border: 1px solid black")
            content.appendChild(contentGrid)
            printGrid(contentGrid)
        }
        container.appendChild(content)
        content.setAttribute("style", "display: flex")
    }
}

const printGrid = (box) => {
    box.addEventListener("dragover", () => {
        box.style.backgroundColor = "red"
    })
}

createGrid()