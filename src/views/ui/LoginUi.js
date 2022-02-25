import { useForm } from "react-hook-form";
import React, { useEffect, url } from "react";

export default function LoginUi() {
//   const fetchData = async () => {
//     try {
//         const response = await fetch(url);
//         const json = await response.json();
//         console.log(json);
// 		} catch (error) {
//         console.log("error", error);
// 		}
// };
//   useEffect(() => {
//     const url = "https://api.adviceslip.com/advice";

//     const fetchData = async () => {
//       try {
//         const response = await fetch(url);
//         const json = await response.json();
//         console.log(json);
//       } catch (error) {
//         console.log("error", error);
//       }
//     };

//     fetchData();
// }, []);

  const {
    register,

    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <div className="login-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
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
            {errors?.firstName && <p>{errors?.firstName.message || "Error"}</p>}
          </div>
        </label>
        <label>
          Password
          <input
            className="login-input"
            type="password"
            {...register("password", {
              required: "Error Message",

              minLength: {
                value: 6,
                message: "Minimum 6 synbol",
              },
            })}
          />
          <div style={{ height: 40 }}>
            {errors?.lastName && <p>{errors?.lastName.message || "Error"}</p>}
          </div>
        </label>

        <input className="login-input" type="submit" value="Log In" />
      </form>
    </div>
  );
}
