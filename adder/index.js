var AdderOne = React.createClass({
    displayName: "AdderOne",

    getInitialState: function getInitialState() {
        return { n: 0 };
    },
    click: function click() {
        this.setState({ n: this.state.n + this.props.x });
    },
    render: function render() {
        return React.createElement(
            "div",
            { onClick: this.click },
            "你点击了",
            this.state.n,
            "次"
        );
    }
});
ReactDOM.render(React.createElement(AdderOne, { x: 1 }), document.getElementById("add1"));
"use strict";

var AddX = React.createClass({
    displayName: "AddX",

    changeValue: function changeValue() {
        this.props.callBack(this.props.x);
    },
    render: function render() {
        return React.createElement(
            "div",
            { onClick: this.changeValue },
            this.props.x,
            "元"
        );
    }
});
var Adder = React.createClass({
    displayName: "Adder",

    getInitialState: function getInitialState() {
        return { n: 0 };
    },
    click: function click(x) {
        this.setState({ n: this.state.n + x });
    },
    render: function render() {
        return React.createElement(
            "div",
            null,
            React.createElement(AddX, { x: 1, callBack: this.click }),
            React.createElement(AddX, { x: 3, callBack: this.click }),
            React.createElement(AddX, { x: 5, callBack: this.click }),
            React.createElement(AddX, { x: 10, callBack: this.click }),
            React.createElement(
                "div",
                { id: "show" },
                "共计",
                this.state.n,
                "元"
            )
        );
    }
});
ReactDOM.render(React.createElement(Adder, null), document.getElementById("add1_10"));