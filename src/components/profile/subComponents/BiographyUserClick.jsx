import ArrowBack from "../../svg/ArrowBack";

import imgUserOptional from "../../../assets/users_img_opcional.png"

const img_3 = {
  backgroundImage: 'url(https://pm1.aminoapps.com/7660/f12308c69e0fac27a86e4757518931929b0dbc73r1-1920-1920v2_hq.jpg)',  
  backgroundPosition: 'center',
}

const BiographyUserSearch = ({ dataUsers, setIsActive, isActive}) => {
  return (
    <>
    <div className="content-img-header-profile" style={img_3}>

      </div>
    <div className="content-biografia">
      <div className="box-img-link">
        <div className="box-img-link">
          {dataUsers.img   !== "" ? (
          <img className="img-perfil" src={dataUsers !== null 
              ? dataUsers.img 
              : null} alt="Avatar" />
        ) : (
          <img
            className="img-perfil"
            src={imgUserOptional}
            alt="Imagen perfil"
          />
        )}
        </div>
      </div>
      <div>
        <div className="content-btn-back-profile">
          <button
            className="btn-back-perfil"
            onClick={() => {
              setIsActive(!isActive);
            }}
          >
            <ArrowBack />
          </button>
        </div>
        <p>@{dataUsers !== null 
          ? dataUsers.user 
          : null}</p>

        <div className="content-bio">
          <h3>Biografia</h3>
          <p>{dataUsers !== null 
            ? dataUsers.bio 
            : null}</p>
          <h3 className="fechaNacimiento">
            Fecha de Nacimiento:{" "}
            {dataUsers !== null 
              ? dataUsers.fechaNacimiento 
              : null}
          </h3>
        </div>
      </div>
    </div>
    </>
  );
};

export default BiographyUserSearch;
