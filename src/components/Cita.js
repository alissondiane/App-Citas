import React from 'react'
import PropTypes from 'prop-types';
import foto from '../imagenes/foto.jfif';

const Cita= ({cita,eliminarCita})=>(
    <div className="cita row">
          <div className="col-sm-12 col-md-6">
        <p>Mascota:<span>{cita.mascota}</span></p>
        <p>Dueño:<span>{cita.propietario}</span></p>
        <p>Fecha:<span>{cita.fecha}</span></p>
        <p>Hora:<span>{cita.hora}</span></p>
        <p>Sintomas:<span>{cita.sintomas}</span></p>
        <button 
            className="btn button eliminar" 
            type="submit"
            onClick={() => eliminarCita(cita.id)}
        >Eliminar &times;</button>
        </div>
        <div className="col-sm-12 col-md-6">
        <img className="foto" src={foto}></img>
        </div>
    </div>
);
Cita.propTypes = {
    cita : PropTypes.object.isRequired,
    eliminarCita : PropTypes.func.isRequired

}
export default Cita;