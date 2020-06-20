import React from "react";
import SuperButton from "./SuperButton";

export default function App() {
  return (
    <div className="App">
      <h1>
        Hello Tests! With{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://jestjs.io/en/"
        >
          Jest
        </a>
      </h1>
      Your tasks are:
      <ol>
        <li>
          [Vanilla JS] To create tests for each function of{" "}
          <strong>utils.js</strong> in <strong>utils.spec.js</strong>. <br />
          For each:
          <ul>
            <li> A description of the function </li>
            <li> A test to make the function works </li>
            <li> A test to make the function fails </li>
          </ul>
        </li>
        <li>
          [Vanilla JS] With a TTD approach:
          <ul>
            <li>
              Create the tests (in <strong>phone.spec.js</strong>) to check if a
              number is a German phone number, for example:
              <ul>
                <li>The format can be +491 000 000000</li>
                <li>The format can be +491000000000</li>
                <li>The format can be 01000000000</li>
                <li>...</li>
              </ul>
            </li>
            <li>
              Then, and only then, create the function to check if a phone
              number is German (in <strong>phone.js</strong>).{" "}
            </li>
            <li>Would your function be the same without the tests before?</li>
          </ul>
        </li>
        <li>
          [React] By using{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://jestjs.io/docs/en/tutorial-react#enzyme"
          >
            Enzyme
          </a>{" "}
          with this button: <SuperButton />
          <ul>
            <li>
              Test if the text is <i>"I'm an awesome button"</i>
            </li>
            <li> Simulate a click </li>
            <li>
              Test if the text is <i>"I'm not a super awesome button?"</i>{" "}
            </li>
            <li>(check if the color is red)</li>
          </ul>
        </li>
      </ol>
      <img src="Screenshot.png" alt="screenshot" style={{ width: "100vw" }} />
    </div>
  );
}
