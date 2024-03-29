/* eslint-disable @next/next/no-html-link-for-pages */
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
          {/* Note: Using NextLink here makes the CSS carryover from one app to the next */}
          <li><a href="/rainbow-pad">Rainbow Pad</a> - A game for kids to mash the keyboard.</li>
          <li><a href="/rainbow-counter">Rainbow Counter</a> - A game to learn the numbers 1-100.</li>
        </ul>
        <h2>1st grade apps</h2>
        <ul>
          {/* Note: Using NextLink here makes the CSS carryover from one app to the next */}
          <li><a href="/analog-clock-game">Clock Practice</a> - A game to learn to read analog clocks.</li>
          <li><a href="/number-bonds-lvl1">Number Bonds (Addition)</a> - A game to learn addition bonds.</li>
        </ul>
      </main>
    </PageContainer>
  )
}
