// eslint-disable-next-line react/prop-types
const HeaderSubComments = ({ setActive, active, img, username, fecha, comment }) => {
  return (
    <div className="b-comment">
      <p className="btn-back" onClick={() => setActive(!active)}>
        back
      </p>
      <img className="img-perfil" src={img} alt="Imagen perfil" />
      <p className="sub-username">
        @{username} <span className="fecha">{fecha}</span>
      </p>
      <div className="subcomentario">
        <p>{comment}</p>
      </div>
    </div>
  );
};

export default HeaderSubComments;
