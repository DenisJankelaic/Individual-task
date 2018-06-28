import * as React from "react";
import "./information-block-style.css";

export class InfoBlockView extends React.Component {

    public render(): JSX.Element {
        return (
            <div className="block">
                <div className="wrapper">
                    <div className="picture">
                        <img
                            src="https://steamuserimages-a.akamaihd.net/ugc/478895272571535117/507261AA2503E9BEEB71D35BD43BA88320B1AD78/" />
                    </div>
                    <div className="info">
                        <div className="info-pic">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Valve_logo.svg/2000px-Valve_logo.svg.png" />
                        </div>
                        <div className="fact">
                            <div className="fact-title">Industry</div>
                            <div className="fact-desc">Finance</div>
                        </div>

                        <div className="fact">
                            <div className="fact-title">Challenge/Assignment</div>
                            <div className="fact-desc">
                                Multiple payment tools for simplified payment process. From zero to production in 4 months
                            </div>
                        </div>
                        <div className="fact">
                            <div className="fact-title">Location</div>
                            <div className="fact-desc">Riga, Latvia</div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
