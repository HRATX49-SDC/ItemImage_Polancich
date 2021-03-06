import React from 'react';

import Carousel from './Carousel.jsx';
import MiniCarousel from './MiniCarousel.jsx';
import PriceColumn from './PriceColumn.jsx';
import PurchaseColumn from './PurchaseColumn.jsx';
import styles from '../styles/contentBox.css';

export default function ContentBox({cat, mainImage, changeImage, likes,
  toggleLike, currentQuantity, handlePurchase, handleQuantityChange,
  displayImprove, toggleImprove, renderCarousel, questionCount, reviewCount}) {
    //if the render carousel variable is true (screen is smaller than 992px, render the miniCarousel)
  if(renderCarousel) {
    return (
      <div className={styles.flexRow}>
        <MiniCarousel
        images={cat.url}
        mainImage={mainImage}
        changeImage={changeImage}
        likes={likes}
        toggleLike={toggleLike}
        />

        <PriceColumn
        price={cat.price}
        currentQuantity={currentQuantity}
        handleQuantityChange={handleQuantityChange}
        questionCount={questionCount}
        reviewCount={reviewCount}
        />

        <PurchaseColumn
        handlePurchase={handlePurchase}
        displayImprove={displayImprove}
        toggleImprove={toggleImprove}
        />
      </div>
    );
  } else {
    //else render the normal image component (Carousel that isn't really a carousel)
    return (
      <div className={styles.flexRow}>
        <Carousel
        images={cat.url}
        mainImage={mainImage}
        changeImage={changeImage}
        likes={likes}
        toggleLike={toggleLike}
        />

        <PriceColumn
        price={cat.price}
        currentQuantity={currentQuantity}
        handleQuantityChange={handleQuantityChange}
        questionCount={questionCount}
        reviewCount={reviewCount}
        />

        <PurchaseColumn
        handlePurchase={handlePurchase}
        displayImprove={displayImprove}
        toggleImprove={toggleImprove}
        />
      </div>
    )
  }

}