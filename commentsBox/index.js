"use strict";

var CommentBox = React.createClass({
    displayName: "CommentBox",

    getInitialState: function getInitialState() {
        return { data: [] };
    },
    getComments: function getComments() {
        $.ajax({
            url: this.props.url,
            dataType: "json",
            type: "get",
            success: function (data) {
                this.setState({ data: data });
            }.bind(this)
        });
    },
    setComment: function setComment(newComment) {
        $.ajax({
            url: this.props.url,
            dataType: "json",
            type: "post",
            data: newComment,
            success: function (data) {
                this.setState({ data: data });
            }.bind(this)
        });
    },
    componentDidMount: function componentDidMount() {
        this.getComments();
        setInterval(this.getComments, 2000);
    },
    render: function render() {
        return React.createElement(
            "div",
            { className: "comment-box" },
            React.createElement(
                "p",
                { className: "comment-header" },
                "Comment:"
            ),
            React.createElement(CommentList, { data: this.state.data }),
            React.createElement(SubmitForm, { setComment: this.setComment })
        );
    }
});
var CommentList = React.createClass({
    displayName: "CommentList",

    render: function render() {
        var allComments = this.props.data.map(function (comment) {
            var text = function text() {
                var text = marked(comment.text, { sanitize: true });
                return { __html: text };
            };
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "p",
                    { className: "author" },
                    comment.author
                ),
                React.createElement(
                    "p",
                    { className: "date" },
                    comment.date
                ),
                React.createElement(
                    "p",
                    { className: "comment" },
                    React.createElement("span", { dangerouslySetInnerHTML: text() })
                )
            );
        });
        return React.createElement(
            "div",
            { className: "comment-list" },
            allComments
        );
    }
});
var SubmitForm = React.createClass({
    displayName: "SubmitForm",

    setData: function setData() {
        var author = this.refs.author.value.trim();
        var text = this.refs.text.value.trim();
        if (!author) {
            alert("请输入昵称");
            return;
        } else if (!text) {
            alert("请输入留言");
            return;
        }
        var newComment = {
            "author": author,
            "text": text
        };
        this.props.setComment(newComment);
        this.refs.author.value = "";
        this.refs.text.value = "";
    },
    keyboardSet: function keyboardSet(ev) {
        if (ev.keyCode == 13) {
            this.setData();
        }
    },
    render: function render() {
        return React.createElement(
            "div",
            { className: "submit-form" },
            React.createElement(
                "div",
                null,
                "昵称：",
                React.createElement("input", { className: "input-author", type: "text", ref: "author" })
            ),
            React.createElement(
                "div",
                null,
                React.createElement(
                    "span",
                    { style: { top: -100 + "px", position: "relative" } },
                    "留言："
                ),
                React.createElement("textarea", { className: "input-comment", ref: "text", rows: "6", cols: "40", onKeyUp: this.keyboardSet })
            ),
            React.createElement(
                "button",
                { className: "submit-button", onClick: this.setData },
                "提交"
            )
        );
    }
});
ReactDOM.render(React.createElement(CommentBox, { url: "test.php" }), document.getElementById("box"));