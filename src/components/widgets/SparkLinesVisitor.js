import React from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";

const SparkLinesVisitorWidgets = () => {
    return (
        <React.Fragment>
        <Sparklines
            data={[0, 2, 0, 5, 2, 0, 4, 1, 1, 1, 4, 3, 0]}
            width={383}
            height={32}
        >
            <SparklinesLine color="#2C8EBB"  />
        </Sparklines>
        </React.Fragment>

)};

export default SparkLinesVisitorWidgets;