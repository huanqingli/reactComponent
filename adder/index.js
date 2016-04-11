var AdderOne = React.createClass({
    displayName: "AdderOne",

    getInitialState: function getInitialState() {
        return { n: 0 };
    },
    click: function click() {
        this.setState({ n: this.state.n + 1 });
    },
    render: function render() {
        return React.createElement(
            "div",
            { onClick: this.click, className: "item1" },
            "你点击了",
            this.state.n,
            "次"
        );
    }
});
ReactDOM.render(React.createElement(AdderOne, null), document.getElementById("add1"));
var AddX = React.createClass({
    displayName: "AddX",

    getInitialState: function getInitialState() {
        return { n: 0 };
    },
    changeValue: function changeValue() {
        this.props.callBack(this.props.x);
        this.setState({ n: this.state.n + 1 });
    },
    render: function render() {
        return React.createElement(
            "div",
            { onClick: this.changeValue, className: "item2_1_1" },
            this.props.x,
            "元",
            this.state.n,
            "件"
        );
    }
});
var Adder = React.createClass({
    displayName: "Adder",

    getInitialState: function getInitialState() {
        return { n: 0, u: 0 };
    },
    click: function click(x) {
        this.setState({ n: this.state.n + x,
            u: this.state.u + 1 });
    },
    render: function render() {
        return React.createElement(
            "div",
            { className: "item2" },
            React.createElement(
                "div",
                { className: "item2_1" },
                React.createElement(AddX, { x: 1, callBack: this.click }),
                React.createElement(AddX, { x: 3, callBack: this.click }),
                React.createElement(AddX, { x: 5, callBack: this.click }),
                React.createElement(AddX, { x: 10, callBack: this.click })
            ),
            React.createElement(
                "div",
                { className: "item2_2" },
                "共计",
                this.state.n,
                "元",
                this.state.u
            )
        );
    }
});
ReactDOM.render(React.createElement(Adder, null), document.getElementById("add1_10"));