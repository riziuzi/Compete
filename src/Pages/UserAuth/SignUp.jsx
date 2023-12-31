import React from "react";
function SignUpForm({ setIsLogin }) {
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
      // else if((key==="password") && (state[key].length < 8))
      // {
      //   console.log((key))
      //   error = "Password length should be >= 8"
      // }
      // else if((key==="password2") && (state[key].length < 8))
      // {
      //   console.log((key))
      //   error = "Password length should be >= 8"
      // }
    }
    if (error.length === 0) {
      fetch("http://localhost:3001/register", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(state)
      })
        .then(res => res.json())
        .then((res) => {
          console.log(res)
          fetch("http://localhost:3005/create-user", {               // 3001
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId: state.userId, name: state.name })
          }).then(res => res.json())
            .then((data) => {
              console.log(data)
            })
            .catch(err => `Error occured in fetching: ${err}`)

        })
        .catch(err => `Error occured in fetching: ${err}`)
    }
    else {
      alert(`Error : ${error}`)
    }

    // setState(prevState => {
    //   let newState = { ...prevState };
    //   for (let key in newState) {
    //     newState[key] = "";
    //   }
    //   return newState;
    // });
  };

  return (
    <>
      <div className="rowOne mx-5 my-5 w-40 h-auto relative">
        <a href="/">
          <img className='hover:cursor-pointer' src="./img/img_logodark.svg" alt="Logo" />
        </a>
      </div>
      <div className=' rowTwo py-10 flex justify-center w-full'>
        <div className='priamry shadow-2xl bg-skin-primary100 w-1/3 min-w-64 py-26 -mr-5 rounded-3xl flex flex-col justify-center items-center z-10'>
          <div className=' my-4 text-3xl text-cyan-100 md:-ml-28'>Register</div>
          <div className=' my-4 text-sm text-cyan-100 max-w-56 ml-10 md:-ml-2 overflow-hidden z-0'>Register your account with name, unique userId and strong password</div>
          <div className='flex flex-col'>
            <form onSubmit={handleOnSubmit} className='flex flex-col max-w-96 items-center'>
              <div className='flex-wrap'>
                <input type='text' name='name' value={state.name} onChange={handleChange} placeholder="Your Name" className='focus:outline-none w-60 bg-slate-100 focus:bg-white rounded-2xl mt-2 px-2 py-1' />
                {/* <input placeholder="Last Name" className='w-28 ml-3 bg-slate-100 focus:outline-none focus:bg-white rounded-2xl my-2 px-2 py-1' /> */}
              </div>
              <input type="text" name="userId" value={state.userId} onChange={handleChange} placeholder="Unique UserId" className='rounded-2xl bg-slate-100 focus:outline-none focus:bg-slate-50 w-60 mt-2 px-2 py-1' />
              <input type="password" name="password" value={state.password} onChange={handleChange} placeholder="Create Password" className='rounded-2xl bg-slate-100 focus:outline-none focus:bg-slate-50 w-60 mt-2 px-2  py-1' />
              <button className='bg-skin-primary300 py-1 mt-4 w-60 rounded-2xl'>Let's go</button>
              <a onClick={() => { setIsLogin(prev => !prev) }} className='text-sm hover:cursor-pointer text-cyan-100 mt-10 mb-24'>Got no account? Register here.</a>
            </form>
          </div>
        </div>
        <div className="secondary bg-skin-primary200 hidden items-center px-10  rounded-r-3xl flex-col md:flex">
          <img src="./img/signup.svg" alt="kid_Photo" className='object-cover w-96 h-auto mt-8 ml-0' />
        </div>
      </div>
      {/* <div className="first border border-green-700 w-1/2 h-1/2"></div> */}
    </>
  );
}

export default SignUpForm;
