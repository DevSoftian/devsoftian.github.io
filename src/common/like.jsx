import React, { Component } from "react";

class Like extends React.Component {
  render() {
    // console.log("clickLike is ", this.props);
    const isLiked = this.props.liked ? "fa fa-heart" : "fa fa-heart-o"; //this.props.counter.liked
    // console.log("Props", this.props.counter.value);
    let classes = "fa fa-heart";
    if (!this.props.liked) classes += "-o";
    return (
      //onClick={() => this.props.onClick(this.props.movie)} goes in div
      <div>
        {
          <i
            // onClick={() => this.props.clickLike(this.props.counter)}
            onClick={this.props.onClick}
            style={{ cursor: "pointer" }}
            class={classes} //isLiked
            aria-hidden="true"
          ></i>
        }
      </div>
    );
  }

  // clickLike() {}
}

export default Like;
