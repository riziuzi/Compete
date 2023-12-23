import React from "react";
function SignInForm() {
  const [state, setState] = React.useState({
    username: "",
    password: ""
  });
  const handleChange = evt => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const authButton = evt => {
    fetch("http://localhost:3001/profile", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include', // Include credentials (cookies)
    })
    .then(res => {
        if (res.ok) {
            return res.json();
        } else {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.error(`Error occurred in fetching: ${err}`);
    });
};

  const handleOnSubmit = evt => {
    evt.preventDefault();

    const { username, password } = state;
    if (username.length === 0 || password.length === 0) {
      alert("Fill all the blanks")
      return
    }
    fetch("http://localhost:3001/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(state)
    })
      .then(res => console.log(res.json()))
      .catch(err => `Error occured in fetching: ${err}`)

    // for (const key in state) {
    //   setState({
    //     ...state,
    //     [key]: ""
    //   });
    // }
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Sign in</h1>
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
        <span>or use your account</span>
        <input
          type="email"
          placeholder="Email"
          name="username"
          value={state.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />
        <a href="#">Forgot your password?</a>
        <button>Sign In</button>
      </form>
      <button onClick={authButton}>Auth check</button>

    </div>
  );
}

export default SignInForm;
