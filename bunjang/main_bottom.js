import React from "react";
import styles from './main.module.css'
import Zzim from './zzim';

function Main_bottom(){
    return(
        <>
        <div className={styles.main_bottom}>
        <p><h2>오늘의 상품 추천</h2></p>
        <div className={styles.itemlist}>
            <div className={styles.products}>
                <div className={styles.item}>
                    <img src="https://media.bunjang.co.kr/product/222685037_1_1682855578_w292.jpg"/>
                    귀여운 곰인형<br/><br/>
                </div>
                <div className={styles.price}>
                    <p>10000원</p>
                </div>
                <div className={styles.heart}>
                    <Zzim />
                </div>
            </div>
            <div className={styles.products}>
                <div className={styles.item}>
                    <img src="https://media.bunjang.co.kr/product/223535135_1_1683622527_w292.jpg"/>
                </div>
                <div className="price">
                    10000원 
                </div>
                <div className={styles.heart}>
                    <Zzim />
                </div>
            </div>
            <div className={styles.products}>
                <div className={styles.item}>
                    <img src="https://media.bunjang.co.kr/product/223356159_1_1683437712_w292.jpg"/>
                </div>
                <div className="price">
                    10000원
                </div>
            </div>
            <div className={styles.products}>
                <div className={styles.item}>
                    <img src="https://media.bunjang.co.kr/product/223474358_1_1683636574_w292.jpg"/>
                </div>
                <div className="price">
                    10000원
                </div>
            </div>
            <div className={styles.products}>
                <div className={styles.item}>
                    <img src="https://media.bunjang.co.kr/product/222673330_1_1682833660_w292.jpg"/>
                </div>
                <div className="price">
                    10000원
                </div>
            </div>
            <div className={styles.products}>
                <div className={styles.item}>
                    <img src="https://media.bunjang.co.kr/product/223450306_1_1683606218_w292.jpg"/>
                </div>
                <div className="price">
                    10000원
                </div>
            </div>
            <div className={styles.products}>
                <div className={styles.item}>
                    <img src="https://media.bunjang.co.kr/product/222730206_1_1683614206_w292.jpg"/>
                </div>
                <div className="price">
                    10000원
                </div>
            </div>
            <div className={styles.products}>
                <div className={styles.item}>
                    <img src="https://media.bunjang.co.kr/product/220984722_1_1681739102_w292.jpg"/>
                </div>
                <div className="price">
                    10000원
                </div>
            </div>
            <div className={styles.products}>
                <div className={styles.item}>
                    <img src="https://media.bunjang.co.kr/product/223064176_1_1683648005_w292.jpg.png"/>
                </div>
                <div className="price">
                    10000원
                </div>
            </div>
            <div className={styles.products}>
                <div className={styles.item}>
                    <img src="https://media.bunjang.co.kr/product/223465706_1_1683619531_w292.jpg"/>
                </div>
                <div className="price">
                    10000원
                </div>
            </div>
        </div>
    </div>
    </>
    );
}

export default Main_bottom;