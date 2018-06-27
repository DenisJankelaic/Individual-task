import * as React from "react";
import * as ReactDOM from "react-dom";
import "./header-styles/header-styles.css";

export class MyHeader extends React.Component {

    public render(): JSX.Element {
        return (
            <div className="header">
            <div className="wrapper">
               <div className="logo">
                  <div className="logo-icon">
                     <img src="https://image.flaticon.com/icons/svg/25/25231.svg" alt="GitHub Logo"/>
                  </div>
                  <div className="logo-text">
                     GitHub
                  </div>
               </div>
            <div className="menu">
               <ul>
                  <li>
                     <a href="#">home</a>
                  </li>
                  <li>
                     <a href="#">about</a>
                  </li>
                  <li>
                     <a href="#">products</a>
                  </li>
                  <li>
                     <a href="#">contact</a>
                  </li>
               </ul>
            </div>
           </div>
         </div>
        );
    }
}
ReactDOM.render(<MyHeader />, document.getElementById("app-root"));
