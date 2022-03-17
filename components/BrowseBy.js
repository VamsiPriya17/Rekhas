import React from 'react';
import styles from '../styles/BrowseBy.module.css'
import Image from 'next/image'
export const BrowseBy = () => {
    const Sample = [
        {
            id: 1,
            url: "/img/1.jpg"
        },
        {
            id: 2,
            url: '/img/2.jpg'
        },
        {
            id: 3,
            url: '/img/3.jpg'
        },
        {
            id: 4,
            url: '/img/1.jpg'
        },
        {
            id: 5,
            url: '/img/1.jpg'
        },
        {
            id: 6,
            url: '/img/1.jpg'
        },
        {
            id: 7,
            url: '/img/1.jpg'
        },
        {
            id: 8,
            url: '/img/1.jpg'
        },
    ]
  return <div className={styles.container}>
        <h2 className={styles.title}>Trending Now</h2>
        <div className={styles.wrapper}>
            <div className={styles.slider}>
                {Sample.map((item)=>(
                    <div className = {styles.imgcontainer} key={item.id}>
                        <Image src = {`${item.url}`} layout = 'fill' objectFit = 'cover'/>
                        {/* <p>{item.id}</p> */}
                    </div>
                ))}
            </div>
        </div>
      {/* Wrapper */}
        {/* images flex flex-shrink: 0  */}
  </div>;
};
