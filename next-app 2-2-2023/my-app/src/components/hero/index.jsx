import Image from 'next/image'
import styles from '@/styles/Hero.module.scss'


const Hero = () =>{

    return (
        <div className={styles.Hero}>

        <h3>Gallery</h3>
        <div className={styles.container}>
            <Image 
              src='https://picsum.photos/200/300'
              alt = 'none'
              width ={150}
              height ={150}
            />
            <Image 
                src='https://picsum.photos/200/200'
                alt = 'none'
                width ={150}
                height ={150}
            />
            <Image 
                src='https://picsum.photos/100/100'
                alt = 'none'
                width ={150}
                height ={150}
            />
        </div>
      </div>
    )

}

export default Hero ;