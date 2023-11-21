import React from 'react'
import "./Header.scss"
const Header = ({ searchQuery, category, onChangeSearchQuery }) => {
    if (!category?.length) {
        return null
    }

    return (
        <div className='header-container g-20 flex-row'>
            <select
                className='border p-10'
                name="category"
                value={searchQuery?.category}
                onChange={(e) => { onChangeSearchQuery(e) }}
            >
                <option value={""}>Select Category</option>
                {category?.length && category?.map((ele, index) => {
                    return <option key={index} value={ele}>{ele}</option>
                })}
            </select>
            <input
                className='border p-10'
                name="name"
                placeholder='Search products by name ..'
                value={searchQuery?.name}
                onChange={(e) => { onChangeSearchQuery(e) }}
            />
        </div>
    )
}

export default Header