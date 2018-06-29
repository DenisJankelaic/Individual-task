import * as React from "react";

import "./banner-styles.css";

export class BannerView extends React.Component {
    public render(): JSX.Element {
        return (
            <div className="banner-img">
                <img src="https://user-images.githubusercontent.com/3386562/40012643-47b41a02-5779-11e8-9146-af0c8e0a40e2.png" />
                <div className="banner-text">
                    <h1>The world's leading software development platform</h1>
                    <p>Brings together the world's largest community of developers to discover, share, and build better software.</p>
                </div>
            </div>
        );
    }
}
