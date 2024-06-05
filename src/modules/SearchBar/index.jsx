import style from './SearchBar.module.css'
function SearchBar({search, checked, value}){
    function changeText(e){
        search(e.target.value);
    }
    return(
        <form className={style.forms}>
            <input type="search" name="searchBox" id="searchBox" placeholder="Search..." onChange={changeText} value={value}/>
            <div>
                <input type="checkbox" name="outOfStock" id="outOfStock" onChange={checked}/>
                <label htmlFor="outOfStock"> Only show products in stock</label>
            </div>
        </form>
    );
}
export default SearchBar;