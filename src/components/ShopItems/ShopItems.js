import "./ShopItems.css";

const shopItems = [
  {
    title: "Sweet item",
    price: 5,
    imgSrc: "https://picsum.photos/250",
    type: "Sweets",
  },
  {
    title: "Cupcake item",
    price: 7,
    imgSrc: "https://picsum.photos/250",
    type: "Cupcakes",
  },
  {
    title: "Doughnut item",
    price: 10,
    imgSrc: "https://picsum.photos/250",
    type: "Doughnuts",
  },
  {
    title: "Cake item",
    price: 3,
    imgSrc: "https://picsum.photos/250",
    type: "Cake",
  },
  {
    title: "Very sweet item",
    price: 6,
    imgSrc: "https://picsum.photos/250",
    type: "Sweets",
  },
  {
    title: "Chocolate item",
    price: 4,
    imgSrc: "https://picsum.photos/250",
    type: "Cake",
  },
];

const Shop = (props) => {
  // const clickHandler = () => {
  //   alert(`Your choice is ${props.title}`);
  // };
  return shopItems.map((item, index) => (
    <div
      className="shop-item"
      // key={item[index]}
      // onClick={clickHandler}
    >
      <img
        className="shop-item__image"
        src={`${item.imgSrc}`}
        alt="shop item"
      />
      <div className="shop-item__message">
        <span className="shop-item__text">{`${item.title}`}</span>
        <span className="shop-item__text">{`$ ${item.price}`}</span>
      </div>
    </div>
  ));
};
export default Shop;
