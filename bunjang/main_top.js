import React from "react";
import styles from './main.module.css'
import SimpleSlider from './simpleSlider';

function Main_top(){
        return(
        <>
        <section className={styles.main_top}>
            <div className={styles.banner}>
                <SimpleSlider/>
            </div>
            <img style={{width: '1250px', height: '350px', marginTop: '20px'}} src="https://m.bunjang.co.kr/pc-static/resource/237e17f5cbe07edc8fff.png"/>
        </section>
    </>
        );
    
}

export default Main_top;