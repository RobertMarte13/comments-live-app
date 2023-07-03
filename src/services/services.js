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
    await axios.post(
      "https://server-anisearch-production.up.railway.app/api/comment",
      {
        comment,
        likes: 0,
        comment_id: id,
        commentIdSubComment
      }
    );
  } catch (error) {
    console.log(error);
  }
};

// Creador de sub comentarios.
export const createSubComment = async (subComment, authId, commentId, commentIdSubComment) => {
  try {
    await axios.post(
      "https://server-anisearch-production.up.railway.app/api/subcomment",
      {
        comments: subComment,
        likes: 0,
        sub_comment_id: commentId,
        auth_comment_id: authId,
        commentIdSubComment2: commentIdSubComment
      }
    );
  } catch (error) {
    console.log(error);
  }
};
