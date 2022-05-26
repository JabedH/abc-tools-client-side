import React from "react";

const Blog = () => {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 my-10  text-left">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">
            How will you improve the performance of a React Application?
          </h2>
          <ul>
            <li>1. Using Immutable Data Structures</li> <br />
            <li>2. Using Dependency optimization</li> <br />
            <li>3. Avoiding Frequent unnecessary re-renders</li> <br />
            <li>
              4. User light image instead of Lazy loading images in React
            </li>{" "}
            <br />
            <li>5. Optimizing the Javascript bundle with Gzip compression</li>
          </ul>
        </div>
      </div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">
            What are the different ways to manage a state in a React
            application?
          </h2>
          <p>
            there are many types of start available but three types are need
            manage a state.
          </p>
          <ul>
            <li>
              <b>Local state:</b> Local state is data we manage in one or
              another component. Local state is managed in React using the
              useState hook
            </li>{" "}
            <br />
            <li>
              <b>Global state:</b> Global state is data we manage across
              multiple components. Global state is very important for updating
              data from anywhere.
            </li>{" "}
            <br />
            <li>
              <b>Server state:</b> Data that comes from an external server that
              must be integrated with our UI state.update data from an external
              server, including loading and error state.
            </li>
          </ul>
        </div>
      </div>

      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">How does prototypical inheritance work?</h2>
          <p>
            JavaScript is a prototype-based, Object Oriented programming
            language.The Prototypal Inheritance is used to add methods and
            properties in objects, meaning that objects and methods can be
            shared, extended, and copied. its seems like chain. Prototypical
            inheritance allows us to reuse the properties or methods from one
            JavaScript object to another through a reference pointer function.
            When we used prototypical inheritance in JavaScript is a powerful
            tool that can save hours of coding.
          </p>
        </div>
      </div>

      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">
            why you do not set the state directly in react?
          </h2>
          <p>
            <ul>
              <li>
                {" "}
                1. If you update it directly, calling the setState() afterward
                may just replace the update you made.
              </li>{" "}
              <br />
              <li>
                {" "}
                2. When you directly update the state, it does not change
                this.state immediately.
              </li>{" "}
              <br />
              <li>
                {" "}
                3. You'll lose control of state across components.. and you will
                not get result.
              </li>
            </ul>
          </p>
        </div>
      </div>

      {/* <div>
        <h1>How will you implement a search to find products by name?</h1>
        <p>
          <script>
      function myFunction() {
        const input = document.getElementById("myInput");
        const filter = input.value.toUpperCase();
        const ul = document.getElementById("myUL");
        const li = ul.getElementsByTagName("li");
        for (i = 0; i < li.length; i++) {
          a = li[i].getElementsByTagName("a")[0];
          txtValue = a.textContent || a.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
          } else {
            li[i].style.display = "none";
          }
        }
      }
    </script>
        </p>
      </div> */}

      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">
            What is a unit test? Why should write unit tests?
          </h2>
          <p>
            Unit testing is a testing method that tests an individual software
            unit in isolation. This involves verifying the output of a function
            or component for a given input. For React components, this could
            mean checking that the component renders correctly for the specified
            props.
          </p>
          <ul>
            <li>
              <b>Quality of code:</b> Unit testing significantly improves the
              quality of the code.
            </li>{" "}
            <br />
            <li>
              <b>Process Becomes Agile:</b> Agile Testing process is the main
              advantage of unit testing.
            </li>
            <b>Reduction in cost:</b> When bugs are detected at an early stage,
            through unit testing, they can be fixed at almost no cost as
            compared to a later stage
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Blog;
