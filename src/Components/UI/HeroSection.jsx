import Link from 'next/link';
import styles from '@/styles/HeroSection.module.css';

export default function HeroSection() {
    return (
        <section className={`${styles.BannerImage} d-flex justify-content-center align-items-start flex-column`}>
            <div className={styles['has-background-dim']}></div>
            <div className={`container ${styles.container} `}>
                <h1 className='m-0 p-0'>D-Group of Companies</h1>
                <h1>Real Estate Excellence.</h1>

                <p>Specialized in Real Estate, Sales, Marketing,<br />
                    Builders and Developers, since 2005.</p>
                <Link href='/projects'><button className='btn--primary'>Explore Our Projects</button></Link>
            </div>

        </section>
    )
}