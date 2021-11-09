import "./ShopBasket.css";

const ShopBasket = ({ totalItems, totalPrice }) => {
  return (
    <div className="container">
      <div className="shop-basket">
        <span className="shop-basket__items">{`${totalItems} items`}</span>
        <span className="shop-basket__items">{`$ ${totalPrice}`}</span>
      </div>
    </div>
  );
};

export default ShopBasket;
