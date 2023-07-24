import React from 'react';
import ReactDOM from "react-dom/client";

//JSX => React.createElement => ReactElement - JS Object => HTMLElement(render)
// React Element
const jsxHeading = <h1 id="heading" className='heading'>Namaste React using JSX 🚀</h1>

// React Functional Component
const Title = () => (
    <h1 className='heading' tabIndex={5}>Namaste React using JSX 🚀</h1>
)

// Component Composition - Component inside component
const HeadingComponent = () => (
    <div id="container">
        <Title/>
        <h1 id="heading" className='heading'>Namaste React Functional Component🚀</h1>
    </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);