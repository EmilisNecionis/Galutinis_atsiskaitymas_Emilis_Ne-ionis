import React from 'react';
import css from './singleShop.module.css'


function SingleShop({item}) {
  return (
    <div className={css.card}>
      <img src={item.ImageUrl} className={css.image} alt={item.shopName} />
      <div className={css.cardBody}>
        <p className={css.shopName}>{item.shopName}</p>
        <p className={css.town}>Location: {item.town}</p>
        <p className={css.startYear}>Start Year: {item.startYear}</p>
        <p className={css.description}>About: {item.description}</p>
      </div>
    </div>
  );
}

export default SingleShop;
