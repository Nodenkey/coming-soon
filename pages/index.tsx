import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useEffect, useState} from "react";
import {motion, useAnimation} from "framer-motion"


const Home: NextPage = () => {
    const [loader, setLoader] = useState<boolean>(true);

    const controls = useAnimation()

    useEffect(() => {
        window.addEventListener('load', () => {
            setLoader(false);
        })
        window.onload = () => {
            controls.start({
                y: 0,
                opacity: 1,
                transition: { duration: 1 },
            })
        }
    }, [])

    const variants = {
        hidden: {opacity: 0, x: -200, y: 0},
        enter: {opacity: 1, x: 0, y: 0},
        exit: {opacity: 0, x: 0, y: -100},
    }


    return (
        <div className={styles.container}>
            <Head>
                <title>Trestle Group</title>
                <meta name="description" content="An introduction of trestle group"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            {loader && <div className={styles.preloader}/>}

            <main className={styles.main}>
                <div className={styles.logo}>
                    <Image src='/trestle-logo.png' width='120px' height='120px'/>
                </div>
                <div className={styles.grid}>
                    <div>
                        <p>HELLO THERE.</p>
                        <motion.h1
                            initial={{y: 50, opacity: 0}}
                            animate={controls}
                        >
                            Our new website is on its way.
                        </motion.h1>
                        <a href='https://www.linkedin.com/company/trestle-group' target='_blank'
                           className={styles.socials}>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                 version="1.1" width="512" height="512" x="0" y="0"
                                 viewBox="0 0 112.196 112.196"
                                 xmlSpace="preserve">
                                <g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="56.098" cy="56.097" r="56.098" fill="#761b18"
                                                data-original="#007ab9" className=""/>
                                        <g>
                                            <path
                                                d="M89.616,60.611v23.128H76.207V62.161c0-5.418-1.936-9.118-6.791-9.118    c-3.705,0-5.906,2.491-6.878,4.903c-0.353,0.862-0.444,2.059-0.444,3.268v22.524H48.684c0,0,0.18-36.546,0-40.329h13.411v5.715    c-0.027,0.045-0.065,0.089-0.089,0.132h0.089v-0.132c1.782-2.742,4.96-6.662,12.085-6.662    C83.002,42.462,89.616,48.226,89.616,60.611L89.616,60.611z M34.656,23.969c-4.587,0-7.588,3.011-7.588,6.967    c0,3.872,2.914,6.97,7.412,6.97h0.087c4.677,0,7.585-3.098,7.585-6.97C42.063,26.98,39.244,23.969,34.656,23.969L34.656,23.969z     M27.865,83.739H41.27V43.409H27.865V83.739z"
                                                fill="#f1f2f2" data-original="#f1f2f2" className=""/>
                                        </g>
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                </g>
                            </svg>
                        </a>
                    </div>
                    <motion.div
                        initial={{y: 200, opacity: 0}}
                        animate={controls}
                    >
                        <Image src='/road3.jpg' layout='fill'/>
                    </motion.div>
                </div>
            </main>
        </div>
    )
}

export default Home
