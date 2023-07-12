import { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/reducers/userSlice";
import { Form, Button } from "react-bootstrap";
import HeadLine from "../../shared/HeadLine";
import "./Login.css";

const Login = ({ setLogin}) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  //   users object
  const users = [
    {
      username: "admin",
      password: "123456",
      role: "admin",
    },
    {
      username: "customer1",
      password: "123456",
      role: "customer",
    },
    {
      username: "customer2",
      password: "123456",
      role: "customer",
    },
  ];

  //   handle on change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // check if user exist
  const checkUser = (username, password) => {
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      return user;
    } else {
      setErrorMessage("Invalid username or password");
    }
  };

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = formData;
    const user = checkUser(username, password);
    if (user.username === "admin") {
      dispatch(login({ username: "admin", role: "admin" }));
    } else if (user.username === "customer1") {
      dispatch(login({ username: "customer1", role: "customer" }));
    } else {
      dispatch(login({ username: "customer2", role: "customer" }));
    }
    setLogin(true);

    //   clear fields
    setFormData({
      username: "",
      password: "",
    });
  };

  return (
    <div className="LogContainer">
      <div >
        <HeadLine text="Login to your Dashboard" />
        <p className="Error">{errorMessage}</p>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="my-4">
            <Form.Control
           
              type="text"
              placeholder="Enter username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </Form.Group>

          <Button type="submit" className="LoginBtn">
            Login
          </Button>
        </Form>
        <p className="Forget">Forget Password</p>
      </div>
    </div>
  );
};

Login.propTypes = {
  setLogin: PropTypes.func,
};

export default Login;
