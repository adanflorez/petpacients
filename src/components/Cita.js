import React from "react";

const Cita = ({ cita, eliminarCita }) => (
    <div className="media mt-3">
        <div className="media-body">
            <div className="mt-0">{cita.mascota}</div>
            <p className="card-text"><span>Nombre dueño:</span> {cita.propietario} </p>
            <p className="card-text"><span>Fecha:</span> {cita.fecha} </p>
            <p className="card-text"><span>Hora:</span> {cita.hora} </p>
            <p className="card-text"><span>Sintomas:</span> {cita.sintomas} </p>
            <button className="btn btn-danger" onClick={() => eliminarCita(cita.id)}>Borrar &times;</button>
        </div>
    </div>
);

export default Cita;
