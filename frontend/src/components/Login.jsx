import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../redux/userSlice";

function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/user/login`,
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        },
      );
      dispatch(setAuthUser(res.data));

      if (res.data.success) {
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      const message =
        error.response?.data?.message || "Login failed. Please try again.";

      toast.error(message);
      console.log(error.data);
    }

    setUser({
      username: "",
      password: "",
    });
  };
  return (
    <div className="min-w-96 m-auto">
      <div className="w-full p-6 rounded-lg shadow-mdh-full bg-green-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
        <h1 className="text-3xl font-bold text-center text-white">Login</h1>
        <form onSubmit={onSubmitHandler} action="">
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white">Username</span>
            </label>
            <input
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className="w-full input input-bordered h-10"
              type="text"
              placeholder="username"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white">Password</span>
            </label>
            <input
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="w-full input input-bordered h-10"
              type="password"
              placeholder="password"
            />
          </div>

          <p className="text-white text-center my-2">
            Don't have an account ? <Link to={"/signup"}>signup</Link>
          </p>

          <button
            type="submit"
            className="btn btn-warning btn-block btn-sm mt-2 border border-slate-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
// add padding to primary button
