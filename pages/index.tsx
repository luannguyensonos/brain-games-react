import Link from 'next/link'
import PageContainer from '../components/PageContainer/PageContainer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <PageContainer title='Brain Games' description='A collection of educational web apps for kids K-12'>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the Brain Games!
        </h1>
        <h2>Preschool apps</h2>
        <ul>
          <li><Link href="/rainbow-pad">Rainbow Pad</Link> - A game for kids to mash the keyboard.</li>
        </ul>
      </main>
    </PageContainer>
  )
}
