import React from "react";
import { useNavigate } from "react-router-dom";
import {zerop0, onep0} from '../../apiConfig'

function SignUpForm() {
  const navigate = useNavigate()
  const [state, setState] = React.useState({
    name: "",
    userId: "",
    password: "",
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

    const { name, userId, password } = state;
    let error = ""

    for (let key in state) {
      if (state[key] === "") {
        error = `${key} should be filled!`
        break
      }
      else if ((key === "password") && (state[key].length < 8)) {
        console.log((key))
        error = "Password length should be >= 8"
      }
      else if ((key === "password2") && (state[key].length < 8)) {
        console.log((key))
        error = "Password length should be >= 8"
      }
    }
    if (error.length === 0) {
      fetch(`${zerop0}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "userId": state.userId,
          "password": state.password
        })
      })
        .then(res => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }
        })
        .then((res) => {
          console.log(res)
          fetch(`${onep0}/create-user`, {               // 3001
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId: state.userId, name: state.name })
          }).then(res => {
            if (res.ok) {
              return res.json();
            } else {
              throw new Error(`HTTP error! Status: ${res.status}`);
            }
          })
            .then((data) => {
              console.log(data)
              fetch(`${zerop0}/login`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(state)
              })
                .then(res => {
                  if (res.ok) {
                    return res.json();
                  } else {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                  }
                })
                .then((data) => {
                  console.log(data);
                  localStorage.setItem("token", data.token);
                  navigate('/resource', { replace: true });
                })
                .catch(err => console.error(`Error occurred in fetching: ${err}`));
            })
            .catch(err => `Error occured in fetching: ${err}`)

        })
        .catch(err => `Error occured in fetching: ${err}`)
    }
    else {
      alert(`Error : ${error}`)
    }
  };

  return (
    <>
      <div className="rowOne mx-5 my-5 w-40 h-auto relative">
        <a href="/">
          <img className='hover:cursor-pointer' src="./img/dark.svg" alt="Logo" />
        </a>
      </div>
      <div className=' rowTwo py-10 flex justify-center w-full'>
        <div className='priamry shadow-2xl bg-skin-primary100 w-1/3 min-w-64 py-26 -mr-5 rounded-3xl flex flex-col justify-center items-center z-10'>
          <div className=' my-4 text-3xl text-cyan-100 md:-ml-28'>Register</div>
          <div className=' my-4 text-sm text-cyan-100 max-w-56 ml-10 md:-ml-2 overflow-hidden z-0'>Register your account with name, unique userId and strong password</div>
          <div className='flex flex-col'>
            <form onSubmit={handleOnSubmit} className='flex flex-col max-w-96 items-center'>
              <div className='flex-wrap'>
                <input type='text' name='name' value={state.name} onChange={handleChange} placeholder="Your Name" className='focus:outline-none w-60 bg-slate-100 text-black focus:bg-white rounded-2xl mt-2 px-2 py-1' />
              </div>
              <input type="text" name="userId" value={state.userId} onChange={handleChange} placeholder="Unique UserId" className='rounded-2xl bg-slate-100 focus:outline-none text-black focus:bg-slate-50 w-60 mt-2 px-2 py-1' />
              <input type="password" name="password" value={state.password} onChange={handleChange} placeholder="Create Password" className='rounded-2xl bg-slate-100 text-black focus:outline-none focus:bg-slate-50 w-60 mt-2 px-2  py-1' />
              <button className='bg-skin-primary300 py-1 mt-4 w-60 rounded-2xl'>Let's go</button>
              <a href="/signin" className='text-sm hover:cursor-pointer text-cyan-100 mt-10 mb-24'>Got no account? Register here.</a>
            </form>
          </div>
        </div>
        <div className="secondary bg-skin-primary200 hidden items-center px-10  rounded-r-3xl flex-col md:flex">
          <img src="./img/signup.svg" alt="kid_Photo" className='object-cover w-96 h-auto mt-8 ml-0' />
        </div>
      </div>
    </>
  );
}

export default SignUpForm;
