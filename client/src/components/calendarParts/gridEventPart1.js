import React from "react";
import RGL from "react-grid-layout";
import WidthProvider from "../WidthProvider";
import "../../styles/gridEventPart.css";
import EditEvent from "../modalEditEvent"

class GridEventPartOne extends React.PureComponent {
    static defaultProps = {
        className: "layout",
        // items: 9,
        // cols: 4,
        rowHeight: 2,
        isDraggable: false,
        isResizable: false,
        onLayoutChange: function () { },
        // This turns off compaction so you can place items wherever.
        verticalCompact: false,
        columnWidth: 1,
        margin: [0, 0],
        //useCSSTransforms: false,
        containerPadding: [0, 0],
    };

    constructor(props) {
        super(props);

        const layout = this.generateLayout(props.columnsCount);
        this.state = { 
            layout,
            elementsArr: this.props.elements,
        };
    }

    componentWillReceiveProps() {

        // console.log(`will recieveProp props,  ${this.props.elements.length}`);
        // console.log(` will  recieveProp cols,  ${GridEventPartOne.defaultProps.cols}`);
        setTimeout(() => {
            var layout = this.generateLayout(this.props.elements.length);
            this.setState({ layout });
        }, 100);
    }
    generateDOM() {
        return this.props.elements.map(function (element, i) {
            return (
                <div key={i} className="main-div-events">
                    <EditEvent event={element} />
                    {/* <span className="text" >{element.title}</span> */}
                </div>
            );
        });
    }


    generateLayout(countCols) {

        return this.props.elements.map(function (item, i) {
            return {
                x: (i * GridEventPartOne.defaultProps.columnWidth) % countCols,
                y: item.start,
                w: GridEventPartOne.defaultProps.columnWidth,
                h: item.duration,
                i: i.toString(),
                margin: [0, 0],
                containerPadding: [0, 0],
                maxW: 1,
            };
        });
    }

    onLayoutChange(layout) {
        this.props.onLayoutChange()(layout);
    }

    render() {
        // let arrlength = this.props.elements.length;
        // console.log(`dlina mas v render, ${arrlength}`);
        
        const ReactGridLayout = WidthProvider(RGL, this.props.columnsCount, 200);

        return (
            <ReactGridLayout
                layout={this.state.layout}
                onLayoutChange={this.onLayoutChange}
                {...this.props}
                cols={this.props.columnsCount}
            >
                {this.generateDOM()}
            </ReactGridLayout>
        );
    }
}


export default GridEventPartOne;

