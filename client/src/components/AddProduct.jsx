import React, { useContext, useState } from 'react';
import FormInput from './FormInput';
import axios from 'axios';
import { GlobalState } from '../GlobalState';

export default function AddProduct() {
    const state = useContext(GlobalState);
    const token = state.token;
    const [isUploaded, setIsUploaded] = useState(false);
    const [upload, setUpload] = useState(null);
    const [product, setProduct] = useState({
        product_id: "",
        title: "",
        price: "",
        images: "",
        category: "",
        description: "",
        content: ""
    });

    function handleImage(e) {
        const file = e.target.files[0];
        setUpload(file);
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setProduct({
            ...product, [name]: value
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await axios.post('/api/products', product);
            alert("Product added successfully");
            setProduct('');
            setIsUploaded(false);
        } catch (error) {
            alert(error.response.data.msg);
        }
    }

    async function handleUpload(e) {
        e.preventDefault();
        if (!upload) {
            alert("Please select an image");
            return;
        }
        const formData = new FormData();
        formData.append('file', upload);

        try {
            const response = await axios.post('/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': token,
                }
            });

            setProduct({
                ...product,
                images: response.data
            });
            setIsUploaded(true);
            alert("Image uploaded successfully:", response.data);
        } catch (error) {
            console.error("Error uploading image:", error);
            alert(error.response.data.msg);
        }
    }

    return (
        <main>
            <div className="border">
                <h2 className='text-center p-3'>Create Product</h2>
                
                {isUploaded ?
                    (<div className="col-md-12 d-flex justify-content-center p-4">
                        <div className="col-md-10 border p-3 d-flex justify-content-center">
                            <form className='col-md-10' onSubmit={handleSubmit}>
                                <div className="col-md-12 d-flex justify-content-evenly row p-3">
                                    <div className="col-md-3">
                                        <FormInput
                                            type="number"
                                            title="Product Id"
                                            name="product_id"
                                            placeholder="Product Id"
                                            onChange={handleChange}
                                        />
                                        <small className='text-light form-text'>Product id should be unique</small>
                                    </div>
                                    <div className='col-md-7'><h1 className='fw-bolder text-center'
                                        style={{ fontSize: "60px" }}>
                                        SmileKart
                                    </h1></div>
                                </div>
                                <div className="col-md-12 d-flex justify-content-between row p-3">
                                    {/* Title */}
                                    <div className="col-md-5">
                                        <FormInput
                                            type="text"
                                            title="Product Name"
                                            name="title"
                                            placeholder="Product Name"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    {/* Price */}
                                    <div className="col-md-5">
                                        <FormInput
                                            type="number"
                                            title="Price"
                                            name="price"
                                            placeholder="Product Price"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-12 d-flex justify-content-between row p-3">
                                    {/* category */}
                                    <div className="col-md-5">
                                        <FormInput
                                            type="text"
                                            title="category"
                                            name="category"
                                            placeholder="Product category"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-12 d-flex justify-content-between row p-3">
                                    {/* description */}
                                    <div className="col-md-5">
                                        <FormInput
                                            type="text"
                                            title="Description"
                                            name="description"
                                            placeholder="Product description"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    {/* content */}
                                    <div className="col-md-5">
                                        <label htmlFor="content" className="form-label pt-2">
                                            Content
                                        </label>
                                        <textarea name="content" id="content" cols="30" rows="3"
                                            className="form-control"
                                            onChange={handleChange}>
                                            Product Contents
                                        </textarea>
                                    </div>
                                </div>
                                <div className="col-md-12 p-3 text-center">
                                    <button type="submit" className="btn btn-primary">
                                        Add Product
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>) :
                    (<form className='' onSubmit={handleUpload}>
                        <div className="col-md-12 d-flex justify-content-center p-4">
                            <div className="col-md-8 border d-flex justify-content-center p-3">
                                {/* Image Upload */}
                                <div className="col-md-5 p-3">
                                    <label htmlFor='image' className="form-label fs-5 pt-2">
                                        Product Image
                                    </label>
                                    <input
                                        type='file'
                                        name='image'
                                        id='image'
                                        className="form-control"
                                        placeholder="Upload Image File First"
                                        accept="image/png, image/jpeg"
                                        onChange={handleImage}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="text-center p-3">
                            <button type="submit" className="btn btn-secondary">
                                Upload Image
                            </button>
                        </div>
                    </form>)
                }
            </div>
        </main>
    );
}
