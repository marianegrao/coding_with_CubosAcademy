function encontrarItem(array) {
    const indiceItem = array.indexOf("Item")
    const temItem = array.includes("Item")
    if (indiceItem > 0 && temItem) {
        console.log(indiceItem)
        console.log(temItem)
    } else {
        console.log("nao existe Item")
    }
}

encontrarItem(["casa", "carro", "Item"])