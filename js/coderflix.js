let HTMLCard = "";
let contenidoJSON = []


function cargoContenidoStreaming() {
   $.ajax({
      url: "js/api.json",
      dataType: "json",
      success: function(response) {
         contenidoJSON = response
         $.each(contenidoJSON, function(i) {
            HTMLCard += `<div class="col s12 m6 l3">
                           <div class="card z-depth-2">
                           <div class="card-image">
                              <img src="${contenidoJSON[i].poster}">
                              <a class="btn-floating halfway-fab waves-effect waves-light green"><i class="material-icons" onclick="verDetalle(${contenidoJSON[i].id})">search</i></a>
                           </div>
                           <div class="card-content black">
                              <p class="yellow-text">TITULO: <span class="white-text">${contenidoJSON[i].titulo}</span></p>
                              <p class="yellow-text">DESARROLADOR: <span class="white-text">${contenidoJSON[i].desarrolladores}</span></p>
                           </div>
                           </div>
                        </div>`
         })
         $("#contenido").html(HTMLCard)
      },
      error: function() {
         console.error("Ocurrió un error... :(")
         HTMLCard = `<div class="center white-text"> 
                        <br><br> 
                        <br><br> 
                        <h4>El contenido parece no estar disponible. Intente nuevamente en unos minutos.</h4> 
                        <br><br> 
                        <i class="large material-icons">sentiment_very_dissatisfied</i> 
                        <br><br> 
                     </div>`
         $("#contenido").html(HTMLCard)
      } 
   })
}

setTimeout(() => {
   cargoContenidoStreaming()
      $('#contenido').fadeIn("fast", function() {
         $('#cargando').fadeOut(200)
      })
}, 2000)

function verDetalle(i) {
   let detalleJSON = contenidoJSON.find(item => item.id == i)
      if (detalleJSON != null) {
         localStorage.setItem("contenido", JSON.stringify(detalleJSON))
         location.href = "detail.html"
         console.log(detalleJSON)
      } else {
         console.error("No se encontró el elemento: " + i)
      }
}