import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useToken from "../../Hookes/useToken";

const Signup = () => {
  const [signInWithGoogle, Guser, Gloading, Gerror] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [token] = useToken(user || Guser);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    console.log(data);
  };
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  if (token) {
    navigate(from, { replace: true });
  }
  return (
    <div>
      <div>
        <h1>Login</h1>
        <div class=" flex justify-center">
          <div class=" w-96 lg:flex-row-reverse ">
            <div class="card flex-shrink-0 shadow-2xl bg-base-100">
              <div class="card-body ">
                <form onSubmit={handleSubmit(onSubmit)} action="">
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Type Name"
                      class="input input-bordered"
                      {...register("name", {
                        required: {
                          value: true,
                          message: "Please provide a name",
                        },
                      })}
                      {...register("name", {
                        minLength: {
                          value: 4,
                          message: "Name must be 4 character",
                        },
                      })}
                    />
                    <label class="label">
                      {errors.name?.type === "required" && (
                        <span class="label-text-alt text-red-500">
                          {errors.name.message}
                        </span>
                      )}
                    </label>
                    <label class="label">
                      {errors.name?.type === "minLength" && (
                        <span class="label-text-alt text-red-500">
                          {errors.name.message}
                        </span>
                      )}
                    </label>
                  </div>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Type Email"
                      class="input input-bordered"
                      {...register("email", {
                        required: {
                          value: true,
                          message: "Please provide a email",
                        },
                      })}
                      {...register("email", {
                        pattern: {
                          value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                          message: "provide a valid email",
                        },
                      })}
                    />
                    <label class="label">
                      {errors.email?.type === "required" && (
                        <span class="label-text-alt text-red-500">
                          {errors.email.message}
                        </span>
                      )}
                    </label>
                    <label class="label">
                      {errors.email?.type === "pattern" && (
                        <span class="label-text-alt text-red-500">
                          {errors.email.message}
                        </span>
                      )}
                    </label>
                  </div>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="password"
                      class="input input-bordered"
                      {...register("password", {
                        required: {
                          value: true,
                          message: "Please provide a password",
                        },
                      })}
                      {...register("password", {
                        minLength: {
                          value: 6,
                          message: "Password must be 6 character or more",
                        },
                      })}
                    />
                    <label class="label">
                      {errors.password?.type === "required" && (
                        <span class="label-text-alt text-red-500">
                          {errors.password.message}
                        </span>
                      )}
                    </label>
                    <label class="label">
                      {errors.password?.type === "minLength" && (
                        <span class="label-text-alt text-red-500">
                          {errors.password.message}
                        </span>
                      )}
                    </label>
                    <label class="label">
                      <a href="#" class="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                    </label>
                  </div>
                  <div class="form-control mt-6">
                    <button class="btn btn-primary">Login</button>
                  </div>
                </form>
                <div className="flex ">
                  <p>Do you have an account?</p>
                  <Link className="text-primary" to="/login">
                    Login here
                  </Link>
                </div>
                <div className="">
                  <div className="flex flex-col w-full border-opacity-50">
                    <div className="divider">OR</div>
                    <button
                      onClick={() => signInWithGoogle()}
                      className="btn btn-outline"
                    >
                      CONTINUE WITH GOOGLE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
