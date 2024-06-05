//This is where I use state
import { useState } from "react";
import ProductTable from "../ProductTable";
import SearchBar from "../SearchBar";

function FilterableProductTable({products}){
    const [searchValue, setSearchValue] = useState('');
    const [checked, setChecked] = useState(false);
    function filterText(text) {
        setSearchValue(text);
    }
    function isChecked(e) {
        setChecked(e.target.checked);
    }
    return(
        <>
            <p>Filterable Product Table</p>
            <SearchBar search={filterText} checked={isChecked} value={searchValue}/>
            <ProductTable products={products} checked={checked} search={searchValue}/>
        </>
    );
}
export default FilterableProductTable;