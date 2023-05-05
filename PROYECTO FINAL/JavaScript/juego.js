/* JUEGO */
/*
const img1 = document.querySelector('#imagenJuego1');
const img2 = document.querySelector('#imagenJuego2');
const img3 = document.querySelector('#imagenJuego3');
*/

let flag=false;
let contador=0;


function iniciar(){
    var imagenes=document.querySelectorAll('#contPadreImgJuego img');
    img1=document.getElementById('contCajas1');  
    img2=document.getElementById('contCajas2'); 
    img3=document.getElementById('contCajas3'); 

    for(var i=0; i<imagenes.length; i++){
        imagenes[i].addEventListener('dragstart', arrastrado, false);
        // imagenes[i].addEventListener('dragend', finalizado, false);
    }

    img1.addEventListener('dragenter', function(e){
    e.preventDefault(); }, false);
    img1.addEventListener('dragover', function(e){
    e.preventDefault(); }, false)
      
    ;
    img1.addEventListener('drop', soltado, false);


    img2.addEventListener('dragenter', function(e){
        e.preventDefault(); }, false);
    img2.addEventListener('dragover', function(e){
    e.preventDefault(); }, false);
    img2.addEventListener('drop', soltado, false);


    img3.addEventListener('dragenter', function(e){
        e.preventDefault(); }, false);
    img3.addEventListener('dragover', function(e){
    e.preventDefault(); }, false);
    img3.addEventListener('drop', soltado, false);

}
function arrastrado(e){
    elemento=e.target;
    e.dataTransfer.setData('Text', elemento.getAttribute('id'));
}
async function soltado(e){
    e.preventDefault();
    console.log(e)
    let id=e.dataTransfer.getData('Text');
    let imagen=document.getElementById(id);
    imagen.style.display= 'none';
    e.target.innerHTML='<img src="'+imagen.src+'" height="500px" width="300px">';

    var x = window.matchMedia("(max-width: 768px)")
    responsive(x) // Call listener function at run time
    x.addListener(responsive) // Attach listener function on state changes
    function responsive(x) {
        if (x.matches) { // If media query matches
            e.target.innerHTML='<img src="'+imagen.src+'" height="250px" width="150px">';
        } else {
          document.body.style.backgroundColor = "pink";
        }
      }
      

      contador++
}

iniciar()
/*
img1.addEventListener('dragstart',(e)=>{
    
    console.log(e.dataTransfer)
})


function drag(ev) {
    let infoImg = ev.target;
    ev.dataTransfer.setData("text", ev.target.infoImg);
  }
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }*/

/*const inicioArrastre =(event)=>{
    console.log("Se inicio el Arrastre")
    let infoImg = event.target.src;
    event.dataTransfer.setData("Text",infoImg)
}

let grab = document.getElementById("imagenJuego1");

grab.addEventListener('dragstart',()=>{
    console.log('Evento dragstart');
})

grab.addEventListener('dragend',()=>{
    console.log('Evento dragend');
})*/


/*
let dragItem = null;

		function handleDragStart(e) {
			dragItem = this;
			e.dataTransfer.effectAllowed = 'move';
			e.dataTransfer.setData('text/html', this.innerHTML);
			this.classList.add('dragging');
		}

		function handleDragEnd(e) {
			this.classList.remove('dragging');
		}

		function handleDragOver(e) {
			if (e.preventDefault) {
				e.preventDefault();
			}
			e.dataTransfer.dropEffect = 'move';
			return false;
		}

		function handleDragEnter(e) {
			this.classList.add('over');
		}

		function handleDragLeave(e) {
			this.classList.remove('over');
		}

		function handleDrop(e) {
			if (e.stopPropagation) {
				e.stopPropagation();
			}
			if (dragItem != this) {
				dragItem.innerHTML = this.innerHTML;
				this.innerHTML = e.dataTransfer.getData('text/html');
			}
			return false;
		}

		let items = document.querySelectorAll('#imagenJuego img');
		items.forEach(function(item) {
			item.addEventListener('dragstart', handleDragStart, false);
			item.addEventListener('dragend', handleDragEnd, false);
			item.addEventListener('dragover', handleDragOver, false);
			item.addEventListener('dragenter', handleDragEnter, false);
			item.addEventListener('dragleave', handleDragLeave, false);
			item.addEventListener('drop', handleDrop, false);
		})

        function reiniciar() {
            window.location.reload();
        }
        */
        function reiniciar() {
            window.location.reload();
        }