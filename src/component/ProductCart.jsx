import React, { useEffect, useState } from 'react';
import CallApi from '../Helper/CallApi';
import Loader from '../Loader';

const ProductCart = () => {
    const [loading, setLoading] = useState()
    const [productList, setProductList] = useState([]);
    const [searchValue, setSearchValue] = useState();
    const [page, setPage] = useState(1);
    const [totalProducts, setTotalProducts] = useState(0);
    const itemsPerPage = 10;

    const [selectedValue, setSelectedValue] = useState()
    console.log("searchValue", selectedValue)

    // Function to fetch product data with dynamic pagination
    const productData = async (page = 1, limit = itemsPerPage) => {
        try {
            setLoading(true)
            const response = await CallApi('Get', `https://dummyjson.com/products?limit=${limit}&skip=${(page - 1) * limit}`);
            console.log("response of api", response.data.products);
            setProductList(response.data.products);
            setTotalProducts(response.data.total);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    // Fetch product data when page or itemsPerPage changes
    useEffect(() => {
        productData(page, itemsPerPage);
    }, [page, itemsPerPage]);

    // Function to change page
    const changePage = (selectedPage) => {
        setPage(selectedPage);
    }

    // Calculate the number of pages
    const totalPages = Math.ceil(totalProducts / itemsPerPage);

    const filterProducts = productList
    .filter((item) => (selectedValue ? item.category === selectedValue : true))
    .filter((item) => (searchValue ? item.title.toLowerCase().includes(searchValue.toLowerCase()) || item.description.toLowerCase().includes(searchValue.toLowerCase()) : true));

    return (
        <>
            <div className="container">
                <div className='d-flex justify-content-around mt-4 mb-4 '>
                    <input type="text" placeholder='search' onChange={(e) => setSearchValue(e.target.value)} />
                    <div className="dropdown">
                        {/* <label htmlFor="filter" className="form-label">Filter:</label> */}
                        <select id="filter" className="form-select" value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)}>
                            <option value="">Select a category</option>
                            <option value="beauty">beauty</option>
                            <option value="fragrances">fragrances</option>
                            <option value="furniture">furniture</option>
                            <option value="groceries">groceries</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    {loading ? <Loader /> : (
                        filterProducts.map((item) => (
                            <div className="col-4 card mt-2 ms-2" key={item.id} style={{ width: "18rem" }}>
                                <img className="card-img-top" src={item.images[0]} alt="not found" />
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{item.description}</p>
                                    <div className='d-flex justify-content-around'>
                                        <button className='btn btn-warning'>{item.price}</button>
                                        <button className='btn btn-primary'>{item.category}</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}

                </div>

                {totalPages > 1 && (
                    <div className='mt-5 mb-3 text-center'>
                        <span onClick={() => setPage(page + 1)} style={{ cursor: 'pointer' }}>👉</span>
                        {
                            [...Array(totalPages)].map((_, index) => (
                                <span key={index} onClick={() => changePage(index + 1)} style={{ cursor: 'pointer', margin: '0 5px', color: page === index + 1 ? 'blue' : 'black' }}>{index + 1}</span>
                            ))
                        }
                        <span onClick={() => setPage(page - 1)} style={{ cursor: 'pointer' }}>👈</span>
                    </div>
                )}
            </div>
        </>
    );
}

export default ProductCart;
