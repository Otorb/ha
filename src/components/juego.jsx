import React, { useEffect, createRef } from "react";
import { connect } from "react-redux";

const Jugadores = ({ jugadores, agregarTitular, agregarSuplente }) => (
  <section>
    <h2>Members</h2>
    <div className="contenedor-jugadores">
      {jugadores.map((j) => (
        <article className="jugador">
          <img src={j.foto} alt={j.nombre} />
          <h3>{j.nombre}</h3>
          <div>
            <button onClick={() => agregarTitular(j)}>Activo</button>
            <button onClick={() => agregarSuplente(j)}>No Act</button>
          </div>
        </article>
      ))}
    </div>
  </section>
);
const mapStateToProps = (state) => ({
  jugadores: state.jugadores,
});

const mapDispatchToProps = (dispatch) => ({
  agregarTitular(jugador) {
    dispatch({
      type: "AGREGAR_TITULAR",
      jugador,
    });
  },
  agregarSuplente(jugador) {
    dispatch({
      type: "AGREGAR_SUPLENTE",
      jugador,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Jugadores);
