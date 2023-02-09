import "./TestResultGaugeMeterComponent.scss";
import GaugeChart from 'react-gauge-chart';
import {useEffect, useState} from "react";

export interface TestResultGaugeMeterComponentProps {
    percentage: number;
    riskLabel: string;
}

const TestResultGaugeMeterComponent = (props: TestResultGaugeMeterComponentProps) => {

    const {riskLabel} = props;
    const [percentage, setPercentage] = useState<number>(props.percentage || 0)

    useEffect(() => {
        setPercentage(props.percentage);
    }, [props.percentage]);

    return (
        <div className={'gauge-meter-component component'}>
            <div className="gauge-meter-chart-wrapper">
                {<GaugeChart
                    style={{
                        height: "100px",
                        width: "350px"
                    }}
                    id="gauge-chart1"
                    percent={percentage ? (percentage / 100) : 0}
                    arcPadding={0.02}
                    cornerRadius={0}
                    arcWidth={0.2}
                    hideText={true}
                    arcsLength={[0.2, 0.3, 0.5]}
                    colors={["#60FA9D", "#FFF384", "#FF5A82"]}
                    needleBaseColor={"#727476"}
                    needleColor={"#727476"}
                />}
            </div>
            <div className="gauge-meter-risk-factor-wrapper">
                <div className="gauge-meter-risk-factor-label">Risk Factor</div>
                <div className="gauge-meter-risk-factor-value"> {riskLabel} </div>
            </div>
            <div className="gauge-meter-line-separator"/>
            <div className="gauge-meter-legends-wrapper">
                <div className="gauge-meter-legend-item">
                    <div className="gauge-meter-legend-dot low"/>
                    <div className="gauge-meter-legend-title">Low</div>
                </div>
                <div className="gauge-meter-legend-item">
                    <div className="gauge-meter-legend-dot medium"/>
                    <div className="gauge-meter-legend-title">Medium</div>
                </div>
                <div className="gauge-meter-legend-item">
                    <div className="gauge-meter-legend-dot high"/>
                    <div className="gauge-meter-legend-title">High</div>
                </div>
            </div>
        </div>
    );

};

export default TestResultGaugeMeterComponent;