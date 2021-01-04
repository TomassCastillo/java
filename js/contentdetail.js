let HTMLTable = ""
let HTMLtrailer = ""
let informacionDeContenido = ""

$(document).ready(function() {
   if (localStorage.contenido != undefined) {
      informacionDeContenido = JSON.parse(localStorage.contenido)
      HTMLTable = `<div class="row center">
                     <div class="col s12 m5 l4 center-align">
                     <img src="${informacionDeContenido.poster}" width="100%">
                     </div>
                     <div class="col s12 m7 l8">
                     <table>
                        <tbody class="white-text">
                           <tr>
                           <td class="yellow-text">TÍTULO</td>
                           <td><h5>${informacionDeContenido.titulo}</h5></td>
                           </tr>
                           <tr>
                           <td class="yellow-text">DESARROLLADORES</td>
                           <td>${informacionDeContenido.desarrolladores}</td>
                           </tr>
                           <tr>
                           <td class="yellow-text">GÉNERO</td>
                           <td>${informacionDeContenido.genero}</td>
                           </tr>
                           <tr>
                           <td class="yellow-text">RESUMEN</td>
                           <td>${informacionDeContenido.resumen}</td>
                           </tr>
                           <tr>
                           <td class="yellow-text">JUGADORES</td>
                           <td>${informacionDeContenido.jugadores}</td>
                           </tr>
                           <tr>
                           <td class="yellow-text">IDIOMAS</td>
                           <td><h6>${informacionDeContenido.idiomas}</h6></td>
                           </tr>
                        </tbody>
                     </table>
                     </div>
                     </div>`
   }
   $('#contenido').html(HTMLTable)
})

$(window).ready(function() {
   $('h1').fadeIn(800, function() {
      $('h4').fadeIn(500)
      $('#contenido').slideDown("slow", function() {
         $('#trailer').fadeIn()
      })
   })
})