/* eslint-disable react/prop-types */
import styles from "./Post.module.css";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
import { format, formatDistanceToNow } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR'
import { useState } from "react";

export function Post(props) {
  const { author, publishedAt, content } = props;

  const [comments, setComments] = useState([]);
  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBr });
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true
  })

  function handleCreateNewComment(event) {
    event.preventDefault();
    
    setComments(state => [...state, newCommentText]);  
    setNewCommentText('');
  }

  function handleChangeTextare(event) {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }
  
  function onDeleteComment(comment) {
    const commentsWithoutDeletedOne = comments.filter(e => e !== comment);

    setComments(commentsWithoutDeletedOne);
  }

  function handleNewCommentInvalid(event) {
    event.target.setCustomValidity('Esse campo é Obrigatório!')
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl}  />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormatted}>
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content?.map(line => {
          if (line.type == 'paragraph'){
            return <p key={line.content}>{line.content}</p>
          } else if (line.type == 'link') {
            return <p key={line.content}><a href="#">{line.content}</a></p>
          }
        })}
      </div>
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          value={newCommentText}
          onChange={handleChangeTextare}
          placeholder="Deixe um comentário"
          required
          onInvalid={handleNewCommentInvalid}
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {
          comments.map(comment => <Comment key={comment} content={comment} onDeleteComment={onDeleteComment} />)
        }
      </div>
    </article>
  )
}