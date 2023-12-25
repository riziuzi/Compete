import React from "react";
function SignUpForm() {
  const [state, setState] = React.useState({
    name: "",
    username: "",
    password: "",
    password2: ""
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

    const { name, username, password, password2 } = state;
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
      else if (state["password2"] !== state["password"]) {
        error = "Passwords do not match"
      }
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
            body: JSON.stringify({auth_id : res.user._id})
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
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Create Account</h1>
        <div className="social-container">
          <a href="#" className="social">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-google-plus-g" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
        <span>or use your email for registration</span>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="username"
          value={state.username}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <input
          type="password"
          name="password2"
          value={state.password2}
          onChange={handleChange}
          placeholder="Password again"
        />
        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
