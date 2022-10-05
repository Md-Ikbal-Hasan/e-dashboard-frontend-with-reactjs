import React, { useState } from 'react';

const AddProduct = () => {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("");


    const addProduct = async () => {
        console.log(name, price, category, company);
        const userId = JSON.parse(localStorage.getItem("user"))._id;

        console.log(userId);

        let result = await fetch("http://localhost:5000/add-product", {
            method: "post",
            body: JSON.stringify({ name, price, category, company, userId }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        result = await result.json();
        console.log(result);
    }




    return (
        <div className="product">
            <h1>Add product</h1>
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

            <button onClick={addProduct} className='appButton'>Add Product</button>

        </div>
    );
};

export default AddProduct;