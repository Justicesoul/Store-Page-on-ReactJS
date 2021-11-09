import "./ShopItems.css";

const ShopItems = ({ imgSrc, title, price, type, onClick }) => {
  return (
    <>
      <div className="shop-item" onClick={onClick}>
        <img className="shop-item__image" src={imgSrc} alt={type} />
        <div className="shop-item__message">
          <span className="shop-item__text">{title}</span>
          <span className="shop-item__text">{`$ ${price}`}</span>
        </div>
      </div>
    </>
  );
};
export default ShopItems;
