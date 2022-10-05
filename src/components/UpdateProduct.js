import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
const Updateproduct = () => {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("");
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getProductDetails();

    }, [])

    const getProductDetails = async () => {
        // console.log(params);
        let result = await fetch(`http://localhost:5000/product/${params.id}`);
        result = await result.json();
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company);
    }


    const updateProduct = async () => {
        // console.log(name, price, category, company);
        let result = await fetch(`http://localhost:5000/product/${params.id}`, {
            method: 'put',
            body: JSON.stringify({ name, price, category, company }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        result = await result.json();
        navigate("/")

    }



    return (
        <div className="product">
            <h1>Update product</h1>
            <input type="text" className='inputBox' name=""
                placeholder='Enter Product Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input type="text" className='inputBox' name=""
                placeholder='Enter Product Price'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />

            <input type="text" className='inputBox' name=""
                placeholder='Enter Product Category'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />

            <input type="text" className='inputBox' name=""
                placeholder='Enter Product Company'
                value={company}
                onChange={(e) => setCompany(e.target.value)}
            />

            <button onClick={updateProduct} className='appButton'>Update Product</button>

        </div>
    );
};

export default Updateproduct;