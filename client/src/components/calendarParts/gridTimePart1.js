import React from "react";
import RGL, { WidthProvider } from "react-grid-layout";
import "../../styles/gridTimePart.css";

const columnsCount = 1;
const ReactGridLayout = WidthProvider(RGL);

class GridTimePartOne extends React.PureComponent {
    static defaultProps = {
        className: "layout",
        cols: columnsCount,
        rowHeight: 30 * 2,
        isDraggable: false,
        isResizable: false,
        onLayoutChange: function () { },
        verticalCompact: false,
        columnWidth: 1,
        margin: [0, 0],
        containerPadding: [0, 0],
    };

    constructor(props) {
        super(props);

        const layout = this.generateLayout();
        this.state = { layout };
    }

    generateDOM() {
        return this.props.time.map( function (element, i) {
            return (
                    <div key={i}
                     className="div-time-part">
                        <span className="text">{element}</span>
                    </div>
            );
        });
    }

    generateLayout() {
        return this.props.time.map(function (item, i) {
            const y = 1;
            return {
                x: (i * GridTimePartOne.defaultProps.columnWidth) % GridTimePartOne.defaultProps.cols,
                y: Math.floor(i / 6) * y,
                w: GridTimePartOne.defaultProps.columnWidth,
                h: y,
                i: i.toString(),
                margin: [0, 0],
                containerPadding: [0, 0],
                maxW: 1,
            };
        });
    }

    onLayoutChange(layout) {
        this.props.onLayoutChange(layout);
    }

    render() {
        return (
            <ReactGridLayout
                layout={this.state.layout}
                onLayoutChange={this.onLayoutChange}
                {...this.props}
            >
                {this.generateDOM()}
            </ReactGridLayout>
        );
    }
}

export default GridTimePartOne;