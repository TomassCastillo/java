class shoppingCart {
    constructor(carrito, cursos) {
        var subtotal = 0
        this.carrito = carrito
        this.cursos = cursos
        this.verCompra = function(grillaCheckout) {
            let grilla = ""
            for (let i in this.carrito) { //recorro el carrito con los ítems
                for (let j in this.cursos) { //recorro los cursos
                    if (this.cursos[j].cursoid === carrito[i]) { //armo el checkout
                        grilla += "<tr>" + 
                                  "<td>" + cursos[j].nombre + "</td>" + 
                                  "<td>" + cursos[j].horas + "</td>" + 
                                  "<td class='right'>$ " + cursos[j].precio + "</td>" + 
                                  "</tr>"
                        subtotal += cursos[j].precio
                    }
                }
            }
            grillaCheckout.innerHTML = grilla
        }
        this.verTotales = function(grillaTotales) {
            let grilla = "<tr><td>SUBTOTAL</td><td class='right'>$ " + this.subtotal().toFixed(0) + "</td></tr>" +
                         "<tr><td>DESCUENTO</td><td class='right'>-$ " + this.aplicoDescuento().toFixed(0) + "</td></tr>" +
                         "<tr class='blue lighten-4'><td>TOTAL</td><td class='right'>$ " + this.total().toFixed(0) + "</td></tr>"
                grillaTotales.innerHTML = grilla
        }
        this.subtotal = function() {
            return subtotal
        }
        this.aplicoDescuento = function() {
            switch (this.carrito.length) {
                case 1: //aplico un 10%
                    return (subtotal - (subtotal * 0.90))
                    break
                case 2: //aplico un 25%
                    return (subtotal - (subtotal * 0.75))
                    break
                case 3: //aplico un 40%
                    return (subtotal - (subtotal * 0.60))
                    break
                case 4: //aplico un 60%
                    return (subtotal - (subtotal * 0.40))
                    break
                default:
                    return (subtotal)
            }
        }
        this.total = function() {
            return Number(subtotal - this.aplicoDescuento())
        }
    }
}