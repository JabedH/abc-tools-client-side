import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import photo from "../../img/mypic.png";

const Myportfolio = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="my-10 flex justify-center">
      <div>
        <div class="avatar mb-5">
          <div class="w-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={photo} />
          </div>
        </div>

        <div class="overflow-x-auto">
          <table class="table  w-96">
            <thead>
              <tr>
                <th>Title</th>
                <th>Information</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Name: </td>
                <td>MD Jabed Hossain Tusar</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>jabedhtusar@gmail.com</td>
              </tr>
              <tr>
                <td>Mobile:</td>
                <td>01789274185</td>
              </tr>
              <tr>
                <td>Education:</td>
                <td>
                  <ul>
                    <li>
                      University of Information Technology and Sciences (UITS)
                    </li>
                    <li>
                      Your Education level:{" "}
                      <span className="font-bold">Bachelor</span>{" "}
                    </li>
                    <li>
                      Degree Title:{" "}
                      <span className="font-bold">Civil Engineering</span>
                    </li>
                  </ul>
                </td>
              </tr>

              <tr>
                <td>List Of Technology</td>
                <td>
                  <ul className="font-bold">
                    <li>HTML</li>
                    <li>CSS </li>
                    <li>JavaScript </li>
                    <li>Bootstrap</li>
                    <li>Tailwindcss</li>
                    <li>Daisyui</li>
                    <li>Google firebase </li>
                    <li>React Routs </li>
                    <li>React Firebase Hooks</li>
                    <li>React Query</li>
                    <li>Node.js</li>
                    <li>Express.Js</li>
                    <li>Mongodb</li>
                    <li>CORS</li>
                    <li>Dotenv</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Website Link:</td>
                <td className=" text-blue-500">
                  <ul>
                    <a href="https://world-gym-bb4c8.web.app/" target="_blank">
                      GYM WORLD
                    </a>
                  </ul>
                  <ul>
                    <a
                      href="https://car-vally.firebaseapp.com/"
                      target="_blank"
                    >
                      CAR VALLEY
                    </a>
                  </ul>
                  <ul>
                    <a
                      href="https://gadget-review.netlify.app/"
                      target="_blank"
                    >
                      GADGET REVIEW
                    </a>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Myportfolio;
