import styles from "./Post.module.css";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="http://github.com/cristianwesleyfront.png"  />
          <div className={styles.authorInfo}>
            <strong>Cristian Correia</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="11 de maio às 08:13h" dataTime="2022-05-11 08:13:30">Publicado há 1h</time>
      </header>
      <div className={styles.content}>
        <p>Fala galera 👌</p>
        <p>Acabei de subir mais um projeto no meu portfolio. É um projeto que fiz no NLW return, evento...</p>
        <p><a href="#">jane.design/doctorcare</a></p>
        <p>
          <a href="#">#novoprojeto </a>{' '}
          <a href="#">#nlw</a>{' '}
          <a href="#">#rockeatseat</a>
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder="Deixe um comentário"
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}