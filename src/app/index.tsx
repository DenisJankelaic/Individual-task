import * as React from "react";
import * as ReactDOM from "react-dom";

import { HeaderView } from "./components/header/header";
import { BannerView } from "./components/banner/banner";
import { InfoBlockView } from "./components/information-block/information-block";
import { PostsView } from "./components/posts/posts";
import { FooterView } from "./components/footer/footer";

import "./components/Index-styles/index-styles.css";

class App extends React.Component {
    public render(): JSX.Element {
        return (
            <div className="mainPage">
                <HeaderView />
                <BannerView />
                <InfoBlockView />
                <PostsView />
                <FooterView />
            </div>
        );
    }

}

ReactDOM.render(<App />, document.getElementById("app-root"));
