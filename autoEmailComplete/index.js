"use strict";

var emailList = ["@qq.com", "@hotmail.com", "@163.com", "@126.com", "@gmail.com"];
var EmailBox = React.createClass({
    displayName: "EmailBox",

    getDefaultProps: function getDefaultProps() {
        return { emailList: [] };
    },
    getInitialState: function getInitialState() {
        return { e: "", index: 0 };
    },
    point: function point(item) {
        this.refs.myInput.value += item;
    },
    reset: function reset() {
        var email = this.props.emailList.map(function (item) {
            var that = this;
            return React.createElement(
                "li",
                {
                    onClick: function onClick() {
                        that.point(item);
                    } },
                this.refs.myInput.value + item
            );
        }, this);
        this.setState({ e: email });
        this.refs.myBox.style.visibility = "visible";
        var that = this;
        document.onclick = function () {
            that.refs.myBox.style.visibility = "hidden";
        };
    },
    select: function select(ev) {
        if (ev.keyCode == 40) {
            if (this.state.index > 4) {
                this.setState({ index: 0 });
            }
            this.display();
            this.setState({ index: this.state.index + 1 });
        } else if (ev.keyCode == 38) {
            if (this.state.index < 0) {
                this.setState({ index: 4 });
            }
            this.display();
            this.setState({ index: this.state.index - 1 });
        } else if (ev.keyCode == 13) {
            this.refs.myBox.style.visibility = "hidden";
        }
    },
    display: function display() {
        var aList = document.getElementById("box").getElementsByTagName("li");
        for (var i = 0; i < 5; i++) {
            aList[i].style.backgroundColor = "white";
        }
        aList[this.state.index].style.backgroundColor = "#eee";
        this.refs.myInput.value = aList[this.state.index].innerHTML;
    },
    render: function render() {
        return React.createElement(
            "div",
            { id: "box" },
            React.createElement("input", { onChange: this.reset, onKeyUp: this.select, ref: "myInput",
                placeholder: "                                                            email" }),
            React.createElement(
                "ul",
                { ref: "myBox" },
                this.state.e
            )
        );
    }
});
ReactDOM.render(React.createElement(EmailBox, { emailList: emailList }), document.getElementById("user"));