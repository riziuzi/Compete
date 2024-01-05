import React from "react";
import { useNavigate } from 'react-router-dom';

function SignInForm({ setIsLogin }) {
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    userId: "",
    password: ""
  });

  const handleChange = evt => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const handleOnSubmit = evt => {
    evt.preventDefault();

    const { userId, password } = state;
    if (userId.length === 0 || password.length === 0) {
      alert("Fill all the blanks");
      return;
    }

    fetch("http://localhost:3001/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(state)
    })
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem("token", data.token);
        // Replace the current entry in the history stack with the home page
        navigate('/resource', { replace: true });
      })
      .catch(err => console.error(`Error occurred in fetching: ${err}`));
  };

  const authButton = () => {
    // Your authentication logic here
  };

  return (
    <>
      <div className="rowOne mx-5 my-5 w-40 h-auto relative">
        <a href="/">
          <img className='hover:cursor-pointer' src="./img/img_logodark.svg" alt="Logo" />
        </a>
      </div>
      <div className='rowTwo py-10 flex justify-center w-full'>
        <div className="secondary bg-skin-primary200 hidden items-center px-10 -mr-5 rounded-l-3xl flex-col md:flex">
          <div className='text-sm mt-20'><p className='text-cyan-100'>Welcome Back to MindScape India</p><p className='text-cyan-100'> – Where Diligence Meets Triumph.</p></div>
          <img src="./img/img_signin1.svg" alt="kid_Photo" className='w-64 h-auto mt-12 ml-0' />
        </div>
        <div className='priamry shadow-2xl bg-skin-primary100 w-1/4 min-w-64 py-32 rounded-3xl flex flex-col justify-center items-center'>
          <div className=' my-4 text-lg text-cyan-100 md:-ml-40'>Login</div>
          <div className=' my-4 text-sm text-cyan-100 max-w-52 ml-10 md:ml-0 overflow-hidden'>Login to your account with username and password</div>
          <div className='mx-4 flex flex-col'>
            <form onSubmit={handleOnSubmit} className='flex flex-col'>
              <input type="text" name="userId" value={state.userId} onChange={handleChange} placeholder="UserId" className='rounded-2xl my-2 px-2 py-1' />
              <input type="password" name="password" value={state.password} onChange={handleChange} placeholder="Password" className='rounded-2xl px-2  py-1' />
              <button className='bg-skin-primary300 py-1 mt-4 rounded-2xl'>Let's go</button>
              <a onClick={() => { setIsLogin(prev => !prev) }} className='text-sm hover:cursor-pointer text-cyan-100 mt-10'>Got no account? Register here.</a>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignInForm;
