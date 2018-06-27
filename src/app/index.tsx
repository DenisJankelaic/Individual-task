import * as React from "react";
import * as ReactDOM from "react-dom";
// import { Book } from "./booksdata";
// import { User } from "./User";
import "./sassStyles.css";
import "./components/Index-styles/index-styles.css";
import { MyHeader } from "./components/Header/Header";
import { MyBanner } from "./components/Banner/Banner";
import { MyInfoBlock } from "./components/Information-block/information-block";
import { MyPosts } from "./components/Posts/posts";
import { MyFooter } from "./components/Footer/footer";

class App extends React.Component {
    public render(): JSX.Element {
        return (
            <div>
                <div className="mainPage">
                    <MyHeader />
                    <MyBanner />
                    <MyInfoBlock />
                    <MyPosts />
                    <MyFooter />
                </div>
            </div>
        );
    }

}

ReactDOM.render(<App />, document.getElementById("app-root"));
