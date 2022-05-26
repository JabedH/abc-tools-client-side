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
        <h1></h1>
      </div>
    </div>
  );
};

export default Blog;
