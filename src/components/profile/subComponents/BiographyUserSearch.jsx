import ArrowBack from "../../svg/ArrowBack";

// eslint-disable-next-line react/prop-types
const BiographyUserSearch = ({ result, setIsActiveS, isActiveS,  }) => {
  return (
    <div className="content-biografia">
      <div className="box-img-link">
        <img
          className="img-perfil"
          src={result !== null 
            // eslint-disable-next-line react/prop-types
            ? result[0].img 
            : null}
        />
      </div>
      <div>
        <div className="content-btn-back-profile">
          <button
            className="btn-back-perfil"
            onClick={() => {
              setIsActiveS(!isActiveS);
            }}
          >
            <ArrowBack />
          </button>
        </div>
        <p>@{result !== null 
          // eslint-disable-next-line react/prop-types
          ? result[0].username 
          : null}</p>
        <div className="content-bio">
          <h3>Biografia</h3>
          <p>{result !== null 
            // eslint-disable-next-line react/prop-types
            ? result[0].bio 
            : null}</p>
          <h3 className="fechaNacimiento">
            Fecha de Nacimiento:{" "}
            {result !== null 
              // eslint-disable-next-line react/prop-types
              ? result[0].fechaNacimiento 
              : null}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default BiographyUserSearch;
