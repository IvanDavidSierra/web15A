'use strict';

const btnOk = document.getElementById('ok');
const listNotes = document.getElementById('listaNotas');
const btnAvg = document.createElement('button');

//Atributos al boton
btnAvg.type = 'button';
btnAvg.textContent = 'Promedio';
btnAvg.className = 'btn btn-info';


//Generar eventos 

btnOk.addEventListener('click', () => {
    let cantNotas = parseInt(document.getElementById('cantNotas').value);
    if(!isNaN(cantNotas)){
        if(cantNotas >= 2 && cantNotas <=10 ){
            for(let i=0; i<cantNotas; i++){
                const div = document.createElement('div');
                div.className = 'col-md-6 col-sm-12';
                const input = document.createElement('input');
                input.setAttribute('type', 'number');
                input.id='nota';
                input.min=0;
                input.max=5;
                input.step=0.1;
                input.className='form-control';
                div.appendChild(input);
                listNotes.appendChild(div);
            }
            listNotes.appendChild(btnAvg);
        }
    }else{
        alert('Ingrese un numero valido');
    }
});


//Generar evento para promedio
btnAvg.onclick = function(){
    let arrayInput = document.querySelectorAll('#nota');
    let avg = 0;

    arrayInput.forEach((input) => {
        avg += parseFloat(input.value);
    });
    avg = avg/arrayInput.length.toFixed(1);


    const modal = `
    <div class="modal fade" id="avgModal" tabindex="-1" aria-labelledby="avgModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header" id="modalHeader">
                    <h5 class="modal-title" id="avgModalLabel">Promedio Calculado</h5>
                    <button id="btnClose" "type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body" id="modalBody"></div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="btnCustom">Cerrar</button>
                </div>
            </div>
        </div>
    </div>`;

    document.body.insertAdjacentHTML('beforeend', modal);

    const modalBody = document.getElementById('modalBody');
    const modalTitle = document.getElementById('avgModalLabel');
    const modalHeader = document.getElementById('modalHeader')
    const modalClose = document.getElementById('btnClose');
    const modalCloseTwo = document.getElementById('btnCustom');

    if(avg >= 1 && avg <= 2.9 ){
        modalTitle.innerHTML = `¡Has reprobado ☹!`;
        modalBody.innerHTML = `El promedio es: ${avg}`;
        modalBody.style = 'text-align: center;'
        modalHeader.style = 'background-color: rgb(82, 0, 0); color: white;';
        modalClose.style = 'color:white;';
        modalCloseTwo.style = 'background-color: rgb(82, 0, 0); color: white; border: solid 2px rgb(82, 0, 0);';
    }else if(avg > 3.0 && avg <= 5.0){
        modalTitle.innerHTML = `¡Has aprobado 🎉!`;
        modalBody.innerHTML = `El promedio es: ${avg}`;
        modalBody.style = 'text-align: center;'
        modalHeader.style = 'background-color: rgb(13, 230, 60); color: black;';
        modalCloseTwo.style = 'background-color: rgb(13, 230, 60); color: black; border: solid 2px rgb(13, 230, 60);';
    }

    const avgModal = new bootstrap.Modal(document.getElementById('avgModal'));
    avgModal.show();
}