import React from 'react'
import styles from "./coin.module.css"

const  Coin = ({name,symbol,image,marketcap,pricechange,price}) =>  {
  return (
    <div className={styles.containera}>
      <div className={styles.imgname}>
        <img className={styles.image} src={image} alt="product"/>
        <span className={styles.name}>{name}</span>
        </div>
        <span style={{fontWeight : "bold"}}>{symbol.toUpperCase()}</span>
        <span>{`$ ${price.toLocaleString()}`}</span>
        <span 
        className={ pricechange < 0 ? styles.priceinvalid : styles.price}
        >{pricechange.toFixed(2)}</span>
        <span>{`$ ${marketcap.toLocaleString()}`}</span>
        
    </div>
  )
}
export default Coin;
