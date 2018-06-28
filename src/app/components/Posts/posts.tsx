import * as React from "react";

import { MainPost } from "./main-post";
import { SidePost } from "./side-posts";
import { Postsdata } from "./src/postsdata";
import { Post } from "./src/post";

import "./posts-styles.css";

interface State {
    posts: Post[];
    singlePost?: Post;
}

export class PostsView extends React.Component<{}, State>  {
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
            <div>
                <div className="posts-body">
                    <div className="wrapper">
                        <MainPost />
                        <div className="side-posts">
                            <div className="article">Checkout more stories</div>
                            <SidePost />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
