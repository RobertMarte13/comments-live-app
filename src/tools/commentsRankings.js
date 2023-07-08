const commentsRankingsTools = (comments, likes) => {
  // Este guardara los comentarios con mayor cantidad de likes
  const commentRankings = [];

  // Esta condicion se encarga de verificar que el comments no venga null
  if (comments !== null) {
    // Este forEach lo que hace es sacar cada comentario para poder crear un objeto nuevo con las caracteristicas que esperamos.
    comments.forEach((comment) => {
      // Esta condicion lo que hace es comprobar que el objeto con los likes no venga null. 
      if (likes !== null) {
        // Este sort sirve para ordenar los objetos de likes de tal manera que queden los comentarios con mas likes mas arriba.
        const rank = likes.sort((a, b) => {
          if (a.like_count < b.like_count) {
            return 1;
          }

          if (a.like_count > b.like_count) {
            return -1;
          }

          return 0;
        });

        // Este forEach lo que hace es sacar cada propiedad de likes para crear un objeto nuevo donde si se tengan todas las caracteristicas necesarias para hacerle saber al codigo cual comentario va antes por su cantidad de likes.
        rank.forEach((like) => {
          // Esta condicion verifica que el comments_id de cada commentario hecho sea igual a cada comments_id de cada like dado en los comentarios.
          if (comment.comments_id === like.comments_id) {
            // Por ultimo empujamos el nuevo objeto dentro del nuevo arreglo que se encargara de mostrar el ranking de comentarios.  
            commentRankings.push({
              comment: comment.comment,
              commentIdSubComment: comment.commentIdSubComment,
              comments_id: comment.comments_id,
              created_at: comment.created_at,
              delete_id: comment.delete_id,
              img: comment.img,
              user_id: comment.user_id,
              username: comment.username,
              comments_ids: like.comments_id,
              like_count: like.like_count,
            });
          }
        });
      }
    });
  }

  // Por ultimo lo que hacemos es ordenar el arreglo nuevo por los like_count.
  commentRankings.sort((a, b) => {
    if (a.like_count < b.like_count) {
      return 1;
    }

    if (a.like_count > b.like_count) {
      return -1;
    }

    return 0;
  });

  // Y ya retornamos el arreglo nuevo con el ranking.
  return commentRankings;
};

export default commentsRankingsTools;
