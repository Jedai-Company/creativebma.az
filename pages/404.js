import React, { useEffect, useState } from 'react'
import styles from '../styles/Error.module.scss'
import AOS from "aos";
import "aos/dist/aos.css";
import Head from 'next/head'

function NotFound() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, [])
    var lang = ["AZ" , "EN" , "RU"]
    const [langM, setlangM] = useState(typeof window !== "undefined" && (sessionStorage.getItem('lang') === null ? lang[0] : sessionStorage.getItem('lang')))
    
    return (
        <>
            <Head>
                <title>{langM === "AZ" && `Partnyorlar` || langM === "EN" && `Partners` || langM === "RU" && `Партнеры`}</title>
            </Head>
            <div  data-aos="zoom-in" className={styles.errorPage +  " page mt100"}>
                <img src="/404.png" alt="error-404"/>
            </div>
        </>
    )
}

export default NotFound
