// document.getElementById("list-burger").style.display = 'grid'

const btnShowAll = document.getElementById("btn-show")
const btnDescont = document.getElementById("btn-descont")
const btnCalculate = document.getElementById("btn-sum")
const btnFilter = document.getElementById("btn-filter")
const list = document.getElementById("list-burger")

function convertCurrency(value) {
    return new Intl.NumberFormat('pt-BR',
        {
            style: 'currency',
            currency: 'BRL',
        }).format(value)
}

function showAll(newArray) {
    let myLi = ""

    newArray.forEach((product) => {
        myLi += `
            <li>
                <img src=${product.src}>
                <p class="burgers">${product.name}</p>
                <p class="price">${convertCurrency(product.price)}</p>
            </li>
        `
    })

    list.innerHTML = myLi
}

function descontDez() {

    const descontProducts = menuOptions.map((products) => ({
        ...products,
        price: products.price * 0.9,

    }))

    showAll(descontProducts)
}

function sumProducts() {

    const sumTotal = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML = `  <li>
                            <p>O valor total da sua compra é: ${convertCurrency(sumTotal)}</p>
                        </li>
                    `
}

function filterVegan() {


    const onlyVegan = menuOptions.filter((product) => product.vegan === true)

    showAll(onlyVegan)

}


btnFilter.addEventListener("click", filterVegan)
btnCalculate.addEventListener("click", sumProducts)
btnShowAll.addEventListener("click", () => showAll(menuOptions))
btnDescont.addEventListener("click", descontDez)