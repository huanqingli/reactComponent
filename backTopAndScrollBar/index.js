"use strict";

var BackTop = React.createClass({
    displayName: "BackTop",

    getInitialState: function getInitialState() {
        return {
            play: "none"
        };
    },
    componentDidMount: function componentDidMount() {
        var scrolltop = function () {
            var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            if (scrollTop > document.documentElement.clientHeight) {
                this.setState({ play: "block" });
            } else {
                this.setState({ play: "none" });
            }
        }.bind(this);
        window.addEventListener("scroll", scrolltop, false);
        //            function compute(){
        //                if(document.body.scrollTop>document.documentElement.clientHeight){
        //                    this.setState({play: "block"});
        //
        //                }else{
        //                    this.setState({play: "none"});
        //                }
        //            }
        //            document.body.addEventListener("mousewheel",compute.bind(this));
        //            document.body.addEventListener("DOMMouseScroll",compute.bind(this));
    },
    back: function back() {
        var timer = setInterval(goTop, 30);
        function goTop() {
            var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            if (scrollTop <= 8) {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
                clearInterval(timer);
            } else if (0.1 * scrollTop < 8) {
                document.body.scrollTop -= 8;
                document.documentElement.scrollTop -= 8;
            } else {
                document.body.scrollTop *= 0.9;
                document.documentElement.scrollTop *= 0.9;
            }
        }
    },
    render: function render() {
        return React.createElement(
            "div",
            { id: "topbox", onClick: this.back, style: { display: this.state.play } },
            "Top"
        );
    }
});
ReactDOM.render(React.createElement(BackTop, null), document.getElementById("backtop"));