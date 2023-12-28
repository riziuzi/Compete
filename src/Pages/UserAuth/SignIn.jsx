import React from "react";
import { useNavigate } from 'react-router-dom';

function SignInForm() {
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
        navigate('/', { replace: true });
      })
      .catch(err => console.error(`Error occurred in fetching: ${err}`));
  };

  const authButton = () => {
    // Your authentication logic here
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
          type="text"
          placeholder="UserId"
          name="userId"
          value={state.userId}
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
