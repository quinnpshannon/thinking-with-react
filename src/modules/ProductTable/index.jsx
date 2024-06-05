import style from './ProductTable.module.css'
import ProductCategoryRow from '../ProductCategoryRow';
import ProductRow from '../ProductRow';

function ProductTable({products, checked, search}){
    const categories = [];
    const builtList = [];
    products.forEach(product => {
        if(checked && !product.stocked) return;
        if (
            product.name.toLowerCase().includes(search.toLowerCase())
            &&
            (!categories.includes(product.category))) {
                categories.push(product.category)
            }
        });
    categories.forEach(category => {
        builtList.push(<ProductCategoryRow category={category}/>)
        products.forEach(prod =>{
            if(checked && !prod.stocked) return;
            if(
                (prod.category === category)
                &&
                prod.name.toLowerCase().includes(search.toLowerCase())) {
                    builtList.push(<ProductRow name={prod.name} price={prod.price} stocked={prod.stocked}/>) 
                }
        })
    });

    return(
        <ul>
            <li className={style.listItem}><p>Name</p><p>Price</p></li>
            {builtList}
        </ul>
    );
}
export default ProductTable;