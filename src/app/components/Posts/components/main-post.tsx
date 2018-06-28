import * as React from "react";

import { Postsdata } from "../src/postsdata";
import { Post } from "../src/post";

import "../posts-styles.css";

interface State {
    posts: Post[];
    singlePost?: Post;
}

export class MainPost extends React.Component<{}, State>  {
    constructor(props: {}) {
        super(props);
        this.state = {
            posts: [],
        };
    }
    public componentDidMount(): void {
        this.setState({
            posts: Postsdata,
            singlePost: Postsdata.length !== 0 ? Postsdata[0] : undefined,
        });
    }
    public render(): JSX.Element {
        return (
                <div className="main-post">
                            <h2> {this.state.singlePost != null ? this.state.singlePost.Post_title : ""} </h2>
                            <p>  {this.state.singlePost != null ? this.state.singlePost.Post_descriptiontwo : ""} </p>
                            <button>Read More</button>
                        </div>
        );
    }
}
