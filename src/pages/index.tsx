import Container from '@/layouts/containers/Container'
import styles from '@/styles/animations.module.css'

const Index = () => {
  return (
    <Container>
      <div className="flex flex-col space-y-2 pt-36">
        <h2 className="font-light text-red-400">
          Hi, my name is Pierre Pariente Dimitrov
        </h2>
        <h1 className="font-medium">
          I am an{' '}
          <span className={styles['hover-underline-animation']}>
            entrepreneur
          </span>
          ,{' '}
          <span className={styles['hover-underline-animation']}>
            product designer
          </span>{' '}
          and{' '}
          <span className={styles['hover-underline-animation']}>
            {' '}
            full-stack engineer.
          </span>
        </h1>
      </div>
    </Container>
  )
}

export default Index
