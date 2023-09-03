import Image from 'next/image'

import styles from '../../styles/components/layout/Dev.module.sass'
import x from '../../assets/x.jpg'

const Dev = ({ title }) => {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <Image
        src={x}
        alt='Em desenvolvimento'
        placeholder='empty'
      />
    </div>
  )
}

export default Dev