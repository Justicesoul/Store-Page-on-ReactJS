import { useState } from "react";
import ShopItems from "./components/ShopItems/ShopItems";
import Button from "./components/Button/Button";
import SearchField from "./components/SearchField/SearchField";
import ShopBasket from "./components/ShopBasket/ShopBasket";

const basket = [0, 0];
const buttons = ["All", "Cakes", "Cupcakes", "Sweets", "Doughnuts"];
const shopItemObject = [
  {
    title: "Sweet item",
    price: 5,
    imgSrc: "https://picsum.photos/250",
    type: "sweets",
  },
  {
    title: "Cupcake",
    price: 7,
    imgSrc: "https://picsum.photos/250?random=1",
    type: "cupcakes",
  },
  {
    title: "Doughnut",
    price: 10,
    imgSrc: "https://picsum.photos/250?random=2",
    type: "doughnuts",
  },
  {
    title: "Cake",
    price: 3,
    imgSrc: "https://picsum.photos/250?random=3",
    type: "cakes",
  },
  {
    title: "Very sweet item",
    price: 6,
    imgSrc: "https://picsum.photos/250?random=4",
    type: "sweets",
  },
  {
    title: "Chocolate",
    price: 4,
    imgSrc: "https://picsum.photos/250?random=5",
    type: "cakes",
  },
  {
    title: "Muffin",
    price: 2,
    imgSrc: "https://picsum.photos/250?random=6",
    type: "cupcakes",
  },
  {
    title: "Halva",
    price: 8,
    imgSrc: "https://picsum.photos/250?random=7",
    type: "sweets",
  },
  {
    title: "Pudding",
    price: 1,
    imgSrc: "https://picsum.photos/250?random=8",
    type: "doughnuts",
  },
];

const App = () => {
  const [shopItems, setShopItems] = useState(shopItemObject);
  const [search, setSearch] = useState("");
  const [shopBasket, setShopBasket] = useState(basket);

  const shopFilter = (value) => {
    if (value.toLowerCase() === "all") {
      setShopItems(shopItemObject);
    } else {
      const filtredShopItems = [...shopItemObject].filter((item) => {
        return value.toLowerCase() === item.type;
      });
      setShopItems(filtredShopItems);
    }
  };

  return (
    <>
      <ShopBasket totalItems={shopBasket[0]} totalPrice={shopBasket[1]} />
      <h1 className="heading">
        Our <span className="heading--pink">Store</span>
      </h1>
      <div className="nav">
        {buttons.map((button) => (
          <Button
            key={button}
            buttonName={button}
            shopFilter={() => shopFilter(button)}
          />
        ))}
      </div>
      <SearchField input={search} setInput={setSearch} />
      <div className="containier">
        {shopItems
          .filter(
            (product) =>
              product.title.indexOf(search) > -1 ||
              product.title.toLowerCase().indexOf(search) > -1
          )
          .map(({ imgSrc, title, price, type }) => (
            <ShopItems
              imgSrc={imgSrc}
              title={title}
              price={price}
              key={title}
              type={type}
              onClick={() => {
                basket[0] = basket[0] + 1;
                basket[1] = basket[1] + price;
                setShopBasket([...basket]);
              }}
            />
          ))}
      </div>
    </>
  );
};

export default App;
