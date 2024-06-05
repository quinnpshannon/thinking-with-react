import './App.css'
import FilterableProductTable from './modules/FilterableProductTable'
import ProductCategoryRow from './modules/ProductCategoryRow'
import ProductRow from './modules/ProductRow'
import ProductTable from './modules/ProductTable'
import SearchBar from './modules/SearchBar'

function App() {
  return (
    <>
      <FilterableProductTable />
      <ProductCategoryRow />
      <ProductRow />
      <ProductTable />
      <SearchBar />
    </>

  )
}

export default App
