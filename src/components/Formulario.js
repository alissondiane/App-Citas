import React ,{Fragment,useState} from 'react';
import uuid from 'uuid/v4';
import PropTypes from 'prop-types';

const Formulario = ({crearCita})=>{
    //Crear state de citas

    const [cita,actualizarCita] = useState({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
    })

    const [error,actualizarError] = useState (false);

    //Funcion que se ejecuta cada que el usuario escribe en un input
    const actualizarState = e =>{
        actualizarCita({
            ...cita,
            [e.target.name]:e.target.value
        })
    }

    //Extraer los valores
    //uso de destructure
    const {mascota,propietario,fecha,hora,sintomas} = cita;

    //Cuando el usuario presiona agregar cita

    const submitCita = e=>{
        e.preventDefault();
        //validar
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === ''|| 
        hora.trim() === '' || sintomas.trim() === ''){
            actualizarError(true);
            return;
        }
        //Eliminar el mensaje previo
        actualizarError(false);
        //Asignar un ID
        cita.id=uuid();
        //Crear la cita
        crearCita(cita)
        //Reiniciar el form
        actualizarCita({mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''})
    

    }

    return (
        <Fragment>
            <h2>Crear Cita</h2>
            {error?<p className="alerta-error">Todos los campos son obligatorios</p> :null}

            <form onSubmit={submitCita}>
                
                <div className="form-group">
                    <label for="nombreMascota">Nombre mascota</label>
                    <input 
                        type="text"
                        name="mascota"
                        className="form-control" 
                        id="nombreMascota" 
                        placeholder="Nombre Mascota"
                        onChange={actualizarState}
                        value={mascota}/>
                </div>
                <div className="form-group">
                    <label for="nombreDueño">Nombre Dueño</label>
                    <input 
                        type="text"
                        name="propietario"
                        className="form-control" 
                        id="nombreDueño" 
                        placeholder="Nombre Dueño de la mascota"
                        onChange={actualizarState}
                        value={propietario}/>
                </div>
                <div className="form-group">
                    <label for="campoFecha">Fecha</label>
                    
                    <input 
                        type="date"
                        name="fecha"
                        className="form-control" 
                        id="campoFecha" 
                        onChange={actualizarState}
                        value={fecha}/>
                </div>
                <div className="form-group">
                    <label for="campoHora">Hora</label>
                    <input 
                        type="time"
                        name="hora"
                        className="form-control" 
                        id="campoHora" 
                        onChange={actualizarState}
                        value={hora}/>
                </div>
                <div class="form-group">
                    <label for="campoSintomas">Sintomas</label>
                    <textarea 
                        class="form-control" 
                        id="campoSintomas" 
                        rows="3"
                        name="sintomas"                    
                        onChange={actualizarState}
                        value={sintomas}
                        ></textarea>
                </div>
                <div class="form-group">
                <button type="submit" class="button agregar btn">AGREGAR CITA</button>

                </div>
            </form>
        </Fragment>
    );

}

//Similar a un tipeChecking  o documentar un componente
Formulario.propTypes = {
    crearCita : PropTypes.func.isRequired
}

export default Formulario;