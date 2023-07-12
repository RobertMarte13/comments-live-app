import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createComment } from "../../../services/services";

const useCreateComments = (id) => {
  const [comment, setComment] = useState(null);
  const [emojis, setEmojis] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (comment === null)
      return window.alert("No se pueden enviar comentarios vacios!");
    createComment(comment, id);
    return navigate("/");
  };

  return {
    handleSubmit,
    setComment,
    setEmojis,
    emojis
  };
};

export default useCreateComments;
