import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const [user, setUser] = useState({
    username: "",
    fullname: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      console.log("Sending user:", user);
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/user/register`,
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        },
      );
      console.log(res);
      
      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
    setUser({
      username: "",
      fullname: "",
      password: "",
      confirmPassword: "",
      gender: "",
    });
  };

  const handleGenderChange = (e) => {
    setUser({ ...user, gender: e.target.value });
  };

  return (
    <div className="min-w-96 m-auto">
      <div className="w-full p-6 rounded-lg shadow-mdh-full w-full bg-green-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
        <h1 className="text-3xl font-bold text-center text-gray-200">Signup</h1>
        <form onSubmit={onSubmitHandler} action="">
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-200">
                Full Name
              </span>
            </label>
            <input
              value={user.fullname}
              onChange={(e) => setUser({ ...user, fullname: e.target.value })}
              className="w-full input input-bordered h-10"
              type="text"
              placeholder="Fullname"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-200">
                Username
              </span>
            </label>
            <input
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className="w-full input input-bordered h-10"
              type="text"
              placeholder="Username"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-200">
                Password
              </span>
            </label>
            <input
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="w-full input input-bordered h-10"
              type="password"
              placeholder="Password"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-200">
                Confirm Password
              </span>
            </label>
            <input
              value={user.confirmPassword}
              onChange={(e) =>
                setUser({ ...user, confirmPassword: e.target.value })
              }
              className="w-full input input-bordered h-10"
              type="password"
              placeholder="Confirm Password"
            />
          </div>

          <div>
            <label className="text-gray-200">Gender</label>
            <br />

            <input
              type="radio"
              name="gender"
              value="male"
              onChange={handleGenderChange}
            />
            <span className="text-gray-200 ml-1">Male</span>

            <br />

            <input
              type="radio"
              name="gender"
              value="female"
              onChange={handleGenderChange}
            />
            <span className="text-gray-200 ml-1">Female</span>
          </div>

          <p className="my-2 text-white text-center">
            Already have a account ? <Link to={"/login"}>login</Link>
          </p>

          <button
            type="submit"
            className="btn btn-warning btn-block btn-sm mt-2 border border-slate-700"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
