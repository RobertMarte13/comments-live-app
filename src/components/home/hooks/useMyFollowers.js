import { useEffect, useState } from "react";
import { getFollowers } from "../../../services/services";

const useMyFollowers = (copyComments, authId) => {
  // Guardando la referencia de los follows que he dado
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    // Obteniendo todos los follows que dio mi cuenta
    getFollowers().then((res) => {
      setFollowers(res.data_2);
    });
  }, []);

  // Almacen donde ira el resultado final
  const result = []

  // saque con el id del usuario que esta navegando o esta online lo follow que a dado.
  const filterFollower =
    followers !== null ? followers.filter((el) => el.user_id === authId) : [];

  // Valido que copyComments que son todos los comentarios no venga null.
  if (copyComments !== null) {
    // El primer map es para sacar todas las caracteristicasde copyComments y el segundo map es para sacar todas las caracteristicas de filterFollower que son los que sigue esa cuenta, por ultimo comaparmos los ids user y users que hacen referecia a quien sigo y todos los que pasen la prueva pues me hara un push y lo guardare en un arreglo nuevo.
    copyComments.map((el) => {
      filterFollower.map((el_2) => {
        el.user_id === el_2.users_id ? result.push(el) : null;
      });
    });
  }

  const copyComments2 = result;

  return {
    copyComments2,
  };
};

export default useMyFollowers;
