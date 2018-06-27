import * as React from "react";
import * as ReactDOM from "react-dom";
import "./Information-block-styles/information-block-style.css";

export class MyInfoBlock extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    public render(): JSX.Element {
        return (
            <div className="block">
                <div className="wrapper">
                    <div className="picture">
                        <img
                            src="https://steamuserimages-a.akamaihd.net/ugc/478895272571535117/507261AA2503E9BEEB71D35BD43BA88320B1AD78/" />
                    </div>
                    <div className="info">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Valve_logo.svg/2000px-Valve_logo.svg.png" />
                        <h1>Industry</h1>
                        <p>Finance</p>
                        <h1>Challenge/Assignment</h1>
                        <p>Multiple payment tools for simplified payment process. From zero to production in 4 months</p>
                        <h1>Location</h1>
                        <p>Riga, Latvia</p>

                    </div>
                </div>
            </div>
        );
    }
}
