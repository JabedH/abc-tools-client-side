import React from "react";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <div>
      <h1>Login</h1>
      <div class=" flex justify-center">
        <div class=" w-96 lg:flex-row-reverse ">
          <div class="card flex-shrink-0 shadow-2xl bg-base-100">
            <div class="card-body ">
              <form action="">
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    class="input input-bordered"
                  />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="password"
                    class="input input-bordered"
                  />
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
                <p>New to Doctors Portal?</p>
                <Link className="text-primary" to="/signup">
                  Create new account
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
  );
};

export default Login;
