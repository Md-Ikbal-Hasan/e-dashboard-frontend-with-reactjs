import React, { useState } from 'react';

const AddProduct = () => {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("");
    const [error, setError] = useState(false);


    const addProduct = async () => {

        if (!name || !price || !category || !company) {
            setError(true);
            return false;
        }

        const userId = JSON.parse(localStorage.getItem("user"))._id;
        console.log(name, price, category, company, userId);

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
            {error && !name && <small className='invalid-input'>Enter Valid Name</small>}

            <input type="text" className='inputBox' name=""
                placeholder='Enter Product Price'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            {error && !price && <small className='invalid-input'>Enter Valid Price</small>}

            <input type="text" className='inputBox' name=""
                placeholder='Enter Product Category'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />
            {error && !category && <small className='invalid-input'>Enter Valid Category Name</small>}

            <input type="text" className='inputBox' name=""
                placeholder='Enter Product Company'
                value={company}
                onChange={(e) => setCompany(e.target.value)}
            />
            {error && !company && <small className='invalid-input'>Enter Valid Company Name</small>}

            <button onClick={addProduct} className='appButton'>Add Product</button>

        </div>
    );
};

export default AddProduct;