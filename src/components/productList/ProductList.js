import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./ProductList.scss";
const ProductList = ({ product }) => {
    const navigate = useNavigate()
    if (!product?.length) {
        return null
    }
    const onClickProduct = (data) => {
        navigate("/details", { state: data })
    }
    return (
        <div className='product-list-container flex-row-center'>
            {
                product?.map((ele, index) => {
                    return <div key={index} className='border product flex-column gap-20'
                        onClick={() => { onClickProduct(ele) }}>
                        <img src={ele?.thumbnail} />
                        <div><b>Title:</b>{" "}{ele?.title}</div>
                        <div><b>Rs. {ele.price}</b>{" "}</div>
                        <div><b>Description:</b>{" "}{ele?.description}</div>
                        <div><b>Category:</b>{" "}{ele?.category}</div>
                    </div>
                })
            }
        </div>
    )
}

export default ProductList