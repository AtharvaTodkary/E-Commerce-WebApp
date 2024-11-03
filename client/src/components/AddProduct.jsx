import React, { useContext, useEffect, useState } from 'react';
import FormInput from './FormInput';
import axios from 'axios';
import { GlobalState } from '../GlobalState';

export default function AddProduct() {
    const state = useContext(GlobalState);
    const token = state.token;
    // const [isUploaded, setIsUploaded] = useState(false);
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
            if (!upload) {
                alert("Please select an image");
                return;
            }
            await axios.post('/api/products', product);
            alert("Product added successfully");
            setProduct('');
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
            console.log(response)

            setProduct({
                ...product,
                images: response.data
            });
            alert("Image uploaded successfully:", response.data);
        } catch (error) {
            console.error("Error uploading image:", error);
            alert(error.response.data.msg);
        }
    }

    useEffect(() => {
        
    }, [upload])

    return (
        <main>
            <div className="container my-5">
                <div className="card bg-dark text-light p-4">
                    <h2 className="text-center p-3 border-bottom border-secondary">Create Product</h2>

                    <form onSubmit={handleUpload}>
                        <div className="d-flex justify-content-center p-4">
                            <div className="card bg-secondary text-light col-md-10 p-4 d-flex justify-content-center">
                                <div className="col-md-6">
                                    <label htmlFor="image" className="form-label fs-5">Upload Product Image</label>
                                    { upload ?
                                        "Not Upload" : "Uploaded" 
                                    }
                                    <input
                                        type="file"
                                        name="image"
                                        id="image"
                                        className="form-control"
                                        accept="image/png, image/jpeg"
                                        onChange={handleImage}
                                    />
                                </div>
                                <div className="col-md-4 text-center mt-3">
                                    <button type="submit" className="btn btn-primary">
                                        Upload Image
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="d-flex justify-content-center">
                        <div className="card bg-secondary text-light p-4 col-md-10">
                            <form onSubmit={handleSubmit}>
                                <div className="row g-3">
                                    <div className="col-md-3">
                                        <FormInput
                                            type="number"
                                            title="Product ID"
                                            name="product_id"
                                            placeholder="Product ID"
                                            onChange={handleChange}
                                        />
                                        <small className="form-text text-light">ID should be unique</small>
                                    </div>
                                    <div className="col-md-7 text-center">
                                        <h1 className="display-4 fw-bold">SmileKart</h1>
                                    </div>
                                </div>

                                <div className="row g-3 my-3">
                                    <div className="col-md-6">
                                        <FormInput
                                            type="text"
                                            title="Product Name"
                                            name="title"
                                            placeholder="Product Name"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <FormInput
                                            type="number"
                                            title="Price"
                                            name="price"
                                            placeholder="Price"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className="row g-3 my-3">
                                    <div className="col-md-6">
                                        <FormInput
                                            type="text"
                                            title="Category"
                                            name="category"
                                            placeholder="Category"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className="row g-3 my-3">
                                    <div className="col-md-6">
                                        <FormInput
                                            type="text"
                                            title="Description"
                                            name="description"
                                            placeholder="Description"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="content" className="form-label">Content</label>
                                        <textarea
                                            name="content"
                                            id="content"
                                            rows="3"
                                            className="form-control"
                                            placeholder="Content details"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className="text-center mt-4">
                                    <button type="submit" className="btn btn-primary px-5">
                                        Add Product
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
