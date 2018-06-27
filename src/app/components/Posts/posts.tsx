import * as React from "react";
import "./posts-styles/posts-styles.css";
import { Postsdata } from "./src/postsdata";
import { Post } from "./src/Post";

interface State {
    posts: Post[];
    singlePost?: Post;
}

export class MyPosts extends React.Component<{}, State>  {
    constructor(props: {}) {
        super(props);
        this.state = {
            posts: [],
        };
    }
    public componentDidMount(): void {
        this.setState({
            posts: Postsdata,
            singlePost: Postsdata.length !== 0 ? Postsdata[0] : undefined 
        });
    }

    private renderPosts(): Array<JSX.Element | null> {
        return [].map((item, index) => {
            if (index === 0) {
                return null;
            }

            return <div></div>;
        });
    }

    public render(): JSX.Element {
        return (
            <div>
                <div className="posts-body">
                    <div className="wrapper">
                        <div className="main-post">
                            <h2> {this.state.singlePost != null ? this.state.singlePost.Post_title : ""} </h2>
                            <p>  {this.state.singlePost != null ? this.state.singlePost.Post_descriptiontwo : ""} </p>
                            <button>Read More</button>
                        </div>
                        <div className="side-posts">
                            <h2>Checkout more stories</h2>
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
                    </div>
                </div>
            </div>
        );
    }
}
