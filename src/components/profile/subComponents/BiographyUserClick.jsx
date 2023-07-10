import ArrowBack from "../../svg/ArrowBack";

// eslint-disable-next-line react/prop-types
const BiographyUserSearch = ({ dataUsers, setIsActive, isActive  }) => {
  return (
    <div className="content-biografia">
      <div className="box-img-link">
        <div className="box-img-link">
          <img
            className="img-perfil"
            src={dataUsers !== null 
              // eslint-disable-next-line react/prop-types
              ? dataUsers.img 
              : null}
          />
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
          // eslint-disable-next-line react/prop-types
          ? dataUsers.user 
          : null}</p>

        <div className="content-bio">
          <h3>Biografia</h3>
          <p>{dataUsers !== null 
            // eslint-disable-next-line react/prop-types
            ? dataUsers.bio 
            : null}</p>
          <h3 className="fechaNacimiento">
            Fecha de Nacimiento:{" "}
            {dataUsers !== null 
              // eslint-disable-next-line react/prop-types
              ? dataUsers.fechaNacimiento 
              : null}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default BiographyUserSearch;
