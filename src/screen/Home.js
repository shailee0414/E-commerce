import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { getProduct } from '../redux/product/action'
import { getCategory } from '../redux/category/action'
import Header from '../components/header/Header'
import ProductList from '../components/productList/ProductList'
import Pagination from '../components/pagination/Pagination'

const Home = () => {
    const productList = useSelector(state => state?.product)
    const categoryList = useSelector(state => state.category)
    const dispatch = useDispatch()
    const [searchQuery, setSearchQuery] = useState({
      type: "",
      value: "",
      skip: 0
    })
  
    useEffect(() => {
      dispatch(getProduct(searchQuery))
    }, [searchQuery])
  
    useEffect(() => {
      dispatch(getCategory({}))
    }, [])
  
    const onChangeSearchQuery = (e) => {
      setSearchQuery({ type: e.target.name, value: e.target.value })
    }
    const onNext = () => {
      setSearchQuery({
        skip: searchQuery?.skip + 10, type: "",
        value: "",
      })
    }
    const onPrevious=()=>{
      setSearchQuery({
        skip: searchQuery?.skip - 10, type: "",
        value: "",
      })
    }
  
    return (
      <div>
        <Header category={categoryList} searchQuery={searchQuery} onChangeSearchQuery={onChangeSearchQuery} />
        <ProductList product={productList?.products} />
        <Pagination onNext={ onNext} onPrevious={ onPrevious} skip={ searchQuery?.skip} total={productList?.total} />
      </div>
    )
}

export default Home