
import { useState } from 'react';
import './App.css';
import FormInput from "./components/FormInput";


function App() {

  const [values, setValues] = useState({
    username: "",
    email: "",
    fullname: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMsg: "Username should be 3-16 character and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMsg: "Email Should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birth Day",
      label: "Birth Day"
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMsg: "Password should be 8-20 character and include at least 1 letter, 1 spacial character and 1 number!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMsg: "Password don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    }

  ]
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value })
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h3>Registration</h3>

        {inputs.map((input) => (
          <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
        ))}
       
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
