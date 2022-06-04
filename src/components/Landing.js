import React , { useState , useEffect } from 'react';
import styles from "./landing.module.css"
//api
import getCoin from '../services/api';
import Coin from './Coin';

  const  Landing = () => {
      const [search , setSearch] = useState("")
      const [ coins , setCoins ] = useState([])
      useEffect(() => {
          const fetchdata = async () => {
              setCoins( await getCoin())
          }
          fetchdata();
      }, [])
      const searchHandler = event => {
          setSearch(event.target.value)
      }
      const searched = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))
  return (
      <>
      <input className={styles.search} type="text" placeholder='Search' value={search} onChange={searchHandler}/>
      {
          coins.length ?
          <div className={styles.container}>
              {searched.map(coin => <Coin
                        key={coin.id}
                        name={coin.name}
                        image = {coin.image}
                        symbol = {coin.symbol}
                        price ={coin.current_price}
                        marketcap = {coin.market_cap}
                        pricechange = {coin.price_change_percentage_24h}

          />)}</div>:
          <h2>Loading</h2>
      }
    </>
  )
}
export {Landing}
