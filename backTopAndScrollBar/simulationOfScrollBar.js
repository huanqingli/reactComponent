"use strict";

var ScrollBar = React.createClass({
    displayName: "ScrollBar",

    getInitialState: function getInitialState() {
        return {
            top: 0
        };
    },
    componentDidMount: function componentDidMount() {
        var scrolltop = function () {
            var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            this.setState({ top: scrollTop / (document.body.scrollHeight - document.documentElement.clientHeight) * 560 });
        }.bind(this);
        window.addEventListener("scroll", scrolltop, false);
    },
    mouseDown: function (event) {
        var y=event.clientY-this.state.top-50;//获取点击位置与拖拽模块顶部的距离
        document.onmousemove=function(event){
            var top=event.clientY-y-50;
            if(top>555){
                this.setState({top:560});
                document.body.scrollTop=document.documentElement.scrollTop=document.body.scrollHeight-document.documentElement.clientHeight;
            }else if(top<5){
                this.setState({top:0});
                document.body.scrollTop=document.documentElement.scrollTop=0;
            }else{
                this.setState({top:top});
                document.body.scrollTop=document.documentElement.scrollTop=top/560*(document.body.scrollHeight-document.documentElement.clientHeight);
            }
            return false
        }.bind(this);
        document.onmouseup=function(){
            document.onmousemove=document.onmouseup=null;
        };
        return false
    },
    render: function render() {
        return React.createElement(
            "div",
            { id: "scrollbar", ref: "scrollbar", style: { height: 600 }},
            React.createElement("div", { id: "bar", ref: "bar", style: { top: this.state.top, height: 40 }, onMouseDown: this.mouseDown  })
        );
    }
});
ReactDOM.render(React.createElement(ScrollBar, null), document.getElementById("scroll"));