import { getProducts } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target 
        if (itemClicked.id.startsWith("product")) {
            const [,productPrice] = itemClicked.id.split("--") 

            for (const product of products) {
                if (product.price === parseInt(productPrice)) {
                    window.alert(`${product.name} ${product.price}`)
                }
            }
        }
    }
)

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target 
        if (itemClicked.id.startsWith("product")) {
            const [,productId] = itemClicked.id.split("--")

            for (const product of products) {
                if (product.id === parseInt(productId)) {
                    window.alert(`${product.name} services ${product.city}`)
                }
            }
        }
    }
)
const products = getProducts()

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li id="product--${product.id}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}

