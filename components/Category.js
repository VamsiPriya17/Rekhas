import React from 'react';
import Image from 'next/image'
import styles from '../styles/Category.module.css'
import Link from 'next/link';

export const Category = ({name,url}) => {
  return(
    <Link href={`/categories/${name}`}>
    <div className={styles.container}>
      <h3>{name.toUpperCase()}</h3>
      <div className={styles.imgcontainer}>
        <Image src={url} layout='fill' objectFit='contain'/>
      </div>
      </div>
    </Link>
  )

   
};
