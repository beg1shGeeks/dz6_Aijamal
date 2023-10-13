import style from './porducts.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { basketAddProduct } from '../../../store/productSlice';

const Porducts = () => {
  const dataPoroducts = useSelector((state) => state.productSlice.dataPrducts);
  const dispatch = useDispatch();
  console.log(dataPoroducts);

  return (
    <div className={style.container}>
      {dataPoroducts &&
        dataPoroducts.map((product) => (
          <div key={product._id}>
            <div className={style.basketContainer}>
              <div className={style.imgContainer}>
                <img src={product.picture} alt="" />
              </div>
              <div className={style.baskeName}>
                <h2>{product.name}</h2>
                <div className={style.basketBtnContainer}>
                  <span>{product.price} </span>
                  <button
                    type="button"
                    onClick={() => dispatch(basketAddProduct(product))}
                  >
                    В корзинку
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Porducts;
