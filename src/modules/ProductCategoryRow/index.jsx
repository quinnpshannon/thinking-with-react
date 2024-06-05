import style from './ProductCategoryRow.module.css'
function ProductCategoryRow({category}){

    return(
        <li className={style.category}>{category}</li>
    );
}
export default ProductCategoryRow;