import axios from "axios";


export const getComments = async () => {
  try {
    const res = await axios.get(
      "https://server-anisearch-production.up.railway.app/api/comment"
    );
    return res.data.data[0];
  } catch (error) {
    console.log(error);
  }
};

// servicio de registro.
export const registerService = async (username, password) => {
  try {
    console.log(username, password);
    const auth_id = crypto.randomUUID();
    await axios.post(
      "https://server-anisearch-production.up.railway.app/api/register",
      {
        username,
        password,
        auth_id: auth_id,
      }
    );

    return window.alert("Cuenta creada con exito!");
  } catch (error) {
    window.alert(error.response.data.message);
  }
};

// servicio de logueo.
export const loginService = async (username, password) => {
  try {
    
    const response = await axios.get(
      `https://server-anisearch-production.up.railway.app/api/login/${username}/${password}`
    );

    return response.data;
  } catch (error) {
    window.alert(error.response.data.message);
  }
};

// Creador de comentarios
export const createComment = async (comment, id ) => {
  try {
    const commentIdSubComment = crypto.randomUUID()
    const delete_id = crypto.randomUUID()
    await axios.post(
      "https://server-anisearch-production.up.railway.app/api/comment",
      {
        comment,
        likes: 0,
        comment_id: id,
        commentIdSubComment,
        delete_id
      }
    );
  } catch (error) {
    console.log(error);
  }
};

// Eliminar comment
export const deleteComment = async (delete_id) => {
  try {
    await axios.delete(`https://server-anisearch-production.up.railway.app/api/comment/${delete_id}`)

  } catch (error) {
    console.log(error.message)
  }
}

export const updateComments = async (comment, delete_id) => {
  try {
    console.log(comment, delete_id)
    await axios.patch(`https://server-anisearch-production.up.railway.app/api/comment/${delete_id}`, {
      comment,
      likes: 0,
    })
  } catch (error) {
    console.log(error.response.data.message)
  }
}

// Creador de sub comentarios.
export const createSubComment = async (subComment, authId, commentId, commentIdSubComment) => {
  try {
    const sub_delete_id = crypto.randomUUID()
    await axios.post(
      "https://server-anisearch-production.up.railway.app/api/subcomment",
      {
        comments: subComment,
        likes: 0,
        sub_comment_id: commentId,
        auth_comment_id: authId,
        commentIdSubComment2: commentIdSubComment,
        sub_delete_id
      }
    );
  } catch (error) {
    console.log(error);
  }
};

// obteniendo informacion del usuario logeado
export const getUserInfo = async (auth_id) => {
  try {
    const res = await axios.get(
      `https://server-anisearch-production.up.railway.app/api/users/${auth_id}`
    );
    return res.data;
  } catch (error) {
    console.log(error)
  }
}

// Este codigo crea la informacion del perfil que todas las personas podran ver.
export const createUserInfo = async (auth_id, username, img, bio, fechaNacimiento) => {
  try {
    await axios.post(
      'https://server-anisearch-production.up.railway.app/api/users', {
        username,
        img,
        bio,
        fechaNacimiento,
        user_id: auth_id
      }
    );
  } catch (error) {
    console.log(error)
  }
}

// Este codigo actualiza la informacion del perfil del usuario.
export const UpdateInfoUsers = async (auth_id, username, img, bio, fechaNacimiento) => {
  try {
    await axios.patch(`https://server-anisearch-production.up.railway.app/api/users/${auth_id}`, {
        username,
        img,
        bio,
        fechaNacimiento,
        user_id: auth_id
      }
    );
  } catch (error) {
    console.log(error)
  }
}

// Obtener un usuario por medio de un id 
export const obtainUserId = async (userid) => {
  try {
    const data = await axios.get(`https://server-anisearch-production.up.railway.app/api/users/${userid}`)

    return data.data
  } catch (error) {
    console.log(error.message)
  }
}

// Obtener un usuario por medio de un id 
export const obtainUserName = async (username) => {
  try {
    const data = await axios.get(`https://server-anisearch-production.up.railway.app/api/search_username/${username}`)

    return data.data[0]
  } catch (error) {
    console.log(error.message)
  }
}