import React from 'react';
import { Button } from 'primereact/button';
class TimeUpScreen extends React.Component {
    render() {
        return (
            <div className="time-up-screen">
                <h1 style={{ fontWeight: "bold" } }> ! انتهى الوقت</h1>
                <Button onClick={this.props.onReturnToGrid} label="العودة للأسئلة" severity="success"/>
            </div>
        );
    }
}

export default TimeUpScreen;
