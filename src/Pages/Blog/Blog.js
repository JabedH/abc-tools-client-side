import React from "react";

const Blog = () => {
  return (
    <div className="grid grid-cols-3">
      <div>
        <h1>How will you improve the performance of a React Application?</h1>
        <ul>
          <li>Using Immutable Data Structures</li>
          <li>Using Dependency optimization</li>
          <li>Avoiding Frequent unnecessary re-renders</li>
          <li>User light image instead of Lazy loading images in React</li>
          <li>Optimizing the Javascript bundle with Gzip compression</li>
        </ul>
      </div>
      <div>
        <h1>
          What are the different ways to manage a state in a React application?
        </h1>
        <p>
          there are many types of start available but three types are need
          manage a state.
        </p>
        <ul>
          <li>
            Local state:Local state is data we manage in one or another
            component. Local state is managed in React using the useState hook
          </li>
          <li>
            Global state: Global state is data we manage across multiple
            components. Global state is very important for updating data from
            anywhere.
          </li>
          <li>
            Server state: Data that comes from an external server that must be
            integrated with our UI state.update data from an external server,
            including loading and error state.
          </li>
        </ul>
      </div>
      <div>
        <h1>How does prototypical inheritance work?</h1>
        <p>
          JavaScript is a prototype-based, Object Oriented programming
          language.The Prototypal Inheritance is used to add methods and
          properties in objects, meaning that objects and methods can be shared,
          extended, and copied. its seems like chain. Prototypical inheritance
          allows us to reuse the properties or methods from one JavaScript
          object to another through a reference pointer function. When we used
          prototypical inheritance in JavaScript is a powerful tool that can
          save hours of coding.
        </p>
      </div>
      <div>
        <h1>why you do not set the state directly in react?</h1>
        <p>
          <ul>
            <li>
              If you update it directly, calling the setState() afterward may
              just replace the update you made.
            </li>
            <li>
              When you directly update the state, it does not change this.state
              immediately.
            </li>
            <li>
              You'll lose control of state across components.. and you will not
              get result.
            </li>
          </ul>
        </p>
      </div>

      <div>
        <h1>How will you implement a search to find products by name?</h1>
        <p>
          {/* <script>
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
    </script> */}
        </p>
      </div>
      <div>
        <h1>What is a unit test? Why should write unit tests?</h1>
        <p>
          Unit testing is a testing method that tests an individual software
          unit in isolation. This involves verifying the output of a function or
          component for a given input. For React components, this could mean
          checking that the component renders correctly for the specified props.
        </p>
        <ul>
          <li>
            Quality of code: Unit testing significantly improves the quality of
            the code.
          </li>
          <li>
            Process Becomes Agile: Agile Testing process is the main advantage
            of unit testing.
          </li>
          Reduction in cost: When bugs are detected at an early stage, through
          unit testing, they can be fixed at almost no cost as compared to a
          later stage.
        </ul>
      </div>
    </div>
  );
};

export default Blog;
