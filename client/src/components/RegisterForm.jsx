import React, { useState } from "react";
import FormInput from "./FormInput";
import axios from "axios";

export default function RegisterForm() {

  const [register, setRegister] = useState({
    name: '',
    email: '',
    password: ''
  })

  function handleChange(event) {
    const { name, value } = event.target;
    setRegister({
      ...register,
      [name]: value
    })
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post('/user/register', register);
      localStorage.setItem('firstRegister', true)
      window.location.href = '/';
    } catch (error) {
      alert(error.response.data.msg);
    }
  }
  return (
    <form method="" onSubmit={handleSubmit} className="col-md-12 mb-5">
      <div className="col-md-12 p-3">
        <FormInput
          name="name"
          type="text"
          title="Name"
          placeholder="Enter Your Name"
          onChange={handleChange}
        />
      </div>
      <div className="col-md-12 p-3">
        <FormInput
          name="email"
          type="email"
          title="Email address"
          placeholder="Enter email"
          onChange={handleChange}
        />
        <small id="emailHelp" className="text-light form-text">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="col-md-12 p-3">
        <FormInput
          name="password"
          type="password"
          title="Password"
          placeholder="Password"
          onChange={handleChange}
        />
      </div>
      <div className="col-md-12 p-3 text-center">
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </div>
    </form>
  );
}
