import { useForm } from "react-hook-form";
import {useState} from "react"
import React from "react";
import { useUserContext } from "../../context/user_context";
import { useNavigate } from "react-router-dom";

export default function LoginUi() {
  

  const {register,formState: { errors }, handleSubmit,reset} = useForm();
  const [errorForm, setErrorForm] = useState(false)
  const {handlerShowSidebar} = useUserContext();
  const navigate =  useNavigate()
  const fetchData = async (data) => {

    try {
      const response = await  fetch("https://twitter-api-2406.herokuapp.com/auth/login/", {
        body: JSON.stringify(data),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-Csrftoken": "taLOvDWaPQakSNX895bxm9UA8MwICT4H5Jp1SywlEezWdfhhO2I3OpKiV5yrnF4o"
        },
        method: "POST"
      })
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const json = await response.json();
      localStorage.setItem('user', JSON.stringify(json.tokens));
      reset()
      
      setErrorForm(false)
      handlerShowSidebar()
      navigate('/search')
      
    } catch (error) {
      setErrorForm(true)
      console.log("error", error);
    }
  };


  const onSubmit = (data) => {
    fetchData(data);
  };
  return (
    <div className="login-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        {errorForm ? <p style={{ color: 'red' }}>Invalid email or password</p> : null}
        <div>
          Email
          <input
            className="login-input"
            type="email"
            {...register("email", {
              required: "Error Message",

              minLength: {
                value: 6,
                message: "Minimum 6 synbol",
              },
            })}
          />
          <div>
            {errors?.firstName && <p>{errors?.email.message || "Error"}</p>}
          </div>
        </div>
        <div>
          Password
          <input
            className="login-input"
            type="password"
            {...register("password", {
              required: "Error Message",

              minLength: {
                value: 8,
                message: "Minimum 8 synbol",
              },
            })}
          />
          <div style={{ height: 40 }}>
            {errors?.lastName && <p>{errors?.password.message || "Error"}</p>}
          </div>
        </div>

        <input className="login-input" type="submit" value="Log In" />
      </form>
    </div>
  );
}
