import style from './ProductRow.module.css'
function ProductRow({name, price,stocked}){
    return(
        <li className={style.listItem}>
            <p className={stocked ? '' : style.unstocked}>
                {name}
            </p>
            <p>
                {price}
            </p>
        </li>
    );
}
export default ProductRow;