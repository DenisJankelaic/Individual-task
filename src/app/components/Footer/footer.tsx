import * as React from "react";
import * as ReactDOM from "react-dom";
import "./footer-styles/footer-styles.css";

export class MyFooter extends React.Component {

    public render(): JSX.Element {
        return (
            <div className="footer">
                    <p> © All right reserved to bookart. 2018</p>
            </div>
        );
    }
}
