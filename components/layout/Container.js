import styles from '../../styles/components/layout/Container.module.sass'

const Container = ({ children }) => {

  return (
    <>
      <main className={styles.container}>
        {children}
      </main>
    </>
  )
}

export default Container