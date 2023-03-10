import FoodCss from "./Foods.module.css";

function Foods(product) {
  const addBacket = (event) => {
    console.log(event.target);
    console.log("Код товара " + product.food.id);
    console.log(product.food.name);
    console.log(product.food.price);
    console.log(product.food.mass);
    // console.log(product.food.url);
    ////////////////////////////////////////////////////
    // i++;

    alert(`
      Вы заказали : ${product.food.name}
      по цене : ${product.food.price}
      `);
    // count = i;
  };
  return (
    <>
      <div className={FoodCss.parent_foods}>
        <div className={FoodCss.food_imgs}>
          <img src={product.food.url} alt="food" />
        </div>
        <div className={FoodCss.food_info}>
          <span>{product.food.name}</span>
          <span className={FoodCss.massa}>Вес : {product.food.mass}</span>
          <p>{product.food.price}</p>
          <button onClick={addBacket}>Заказать</button>
        </div>
      </div>
    </>
  );
}

export default Foods;
