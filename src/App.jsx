import { Header } from "./components/Header"
import { Post } from "./components/Post";
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css';
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @ Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👌'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfolio. É um projeto que fiz no NLW return, evento...'},
      { type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2023-05-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Caique Brito',
      role: 'CTO @ Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👌'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfolio. É um projeto que fiz no NLW return, evento...'},
      { type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2023-05-03 20:00:00')
  },
]

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(e => {
            return (
              <Post 
                key={e.id}
                author={e.author}
                content={e.content}
                publishedAt={e.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
