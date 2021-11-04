import Button from "./components/Button/Button";
import Shop from "./components/ShopItems/ShopItems";

const cakes = ["All", "Cakes", "Cupcakes", "Sweets", "Doughnuts"];

const App = () => {
  return (
    <>
      <h1 className="heading">
        Our <span className="heading--pink">Store</span>
      </h1>
      <div className="nav">
        {cakes.map((item, index) => (
          <Button key={item[index]} buttonName={`${item}`} />
        ))}
      </div>
      <div className="containier">
        <Shop />
      </div>
    </>
  );
};

export default App;
