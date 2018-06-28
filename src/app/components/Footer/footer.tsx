import * as React from "react";
import "./footer-styles.css";

export class FooterView extends React.Component {

    public render(): JSX.Element {
        return (
            <div className="footer">
                    <p>© All right reserved to bookart. 2018</p>
            </div>
        );
    }
}
