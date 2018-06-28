import * as React from "react";

import { Postsdata } from "../src/postsdata";
import { Post } from "../src/post";

import "../posts-styles.css";

interface State {
    posts: Post[];
    singlePost?: Post;
}

export class SidePost extends React.Component<{}, State>  {
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
                {this.state.posts.map((postData, i) =>
                                (
                                    <div key={i} className="side-post">
                                        <div className="side-post-picture">
                                            <img src={postData.url} alt="Post picture" />
                                        </div>
                                        <div className="side-post-text">
                                            <p className="post-title"> {postData.Post_title} </p>
                                            <p className="post-desc"> {postData.Post_description} </p>
                                            <p className="post-desctwo"> {postData.Post_descriptiontwo} </p>
                                            <div className="button"><button>Read</button></div>
                                        </div>
                                    </div>
                                ))}
                </div>
        );
    }
}
