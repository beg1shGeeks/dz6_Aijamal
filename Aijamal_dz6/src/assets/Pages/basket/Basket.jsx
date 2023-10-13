import style from './basket.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  basketIncrenent,
  basketDincrenent,
  basketDeletPorduct,
} from '../../../store/productSlice';

const Basket = () => {
  const basketPorducts = useSelector((state) => state.productSlice.basket);
  console.log(basketPorducts);
  const dispatch = useDispatch();

  return (
    <div className={style.container}>
      {basketPorducts &&
        basketPorducts.map((basketPorduct) => (
          <div className={style.bsketContainer} key={basketPorduct._id}>
            <div className={style.basketTitleWrrap}>
              <img src={basketPorduct.picture} alt="" />
              <div className={style.basketTitle}>
                <p> {basketPorduct.name}</p>
                <p> катигорий:{basketPorduct.category} </p>
                <p>Цветь :{basketPorduct.color} </p>
                <span> {basketPorduct.price} </span>
              </div>
            </div>
            <div className={style.bsketBtnContainer}>
              <div>
                <button
                  type="button"
                  onClick={() => dispatch(basketDincrenent(basketPorduct._id))}
                >
                  -
                </button>
                <span>{basketPorduct.countPorduct}</span>
                <button
                  type="button"
                  onClick={() => dispatch(basketIncrenent(basketPorduct._id))}
                >
                  +
                </button>
              </div>
              <button
                type="button"
                onClick={() => dispatch(basketDeletPorduct(basketPorduct._id))}
              >
                удалить
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Basket;
