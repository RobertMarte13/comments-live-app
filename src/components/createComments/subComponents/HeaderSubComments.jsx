import imgUserOptional from "../../../assets/users_img_opcional.png";

const HeaderSubComments = ({
  setActive,
  active,
  img,
  username,
  fecha,
  comment,
}) => {
  const newFecha = fecha;
  const meses = newFecha.slice(0, 9);
  const horas = newFecha.slice(11, 16);
  return (
    <header className="b-comment">
      <div style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'end'
      }}>
        <p className="btn-back" onClick={() => setActive(!active)}>
          back
        </p>
      </div>
      {img !== "" ? (
        <img className="img-perfil" src={img} alt="Imagen perfil" />
      ) : (
        <img className="img-perfil" src={imgUserOptional} alt="Imagen perfil" />
      )}
      <p className="sub-username">
        @{username}{" "}
        <span className="fecha">
          Fecha: {meses} Horas: {horas}
        </span>
      </p>
      <div className="subcomentario">
        <p>{comment}</p>
      </div>
    </header>
  );
};

export default HeaderSubComments;
