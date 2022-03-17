import styles from '../styles/CategoryList.module.css'
import {Places} from '../data.js'
import { Category } from './Category.js'

export const CategoryList = () => {
  return (
    <div className={styles.container}>
    {/* <h2 className={styles.categoryTitle}>Category</h2> */}
    <div className={styles.wrapper}>
    {Places.map((item,index) =>{
     return <Category name = {item.title} key={index} url = {item.path}/>
    })}
    </div>
    </div>
  )
}
