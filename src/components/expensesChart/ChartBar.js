import './ChartBar.css';

const ChartBar = (props) => {
    const bar__fill = (props.value / props.max) * 100
    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{ height: bar__fill }}></div>
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>
    )
}

export default ChartBar;