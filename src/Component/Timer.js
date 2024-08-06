import React from 'react';
import { Button } from 'primereact/button';

class Timer extends React.Component {
  state = {
    timeRemaining: this.props.initialTime
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState(prevState => {
        if (prevState.timeRemaining === 0) {
          clearInterval(this.timer);
          this.props.onTimeEnd();
          return { timeRemaining: 0 };
        } else {
          return { timeRemaining: prevState.timeRemaining - 1 };
        }
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  addTime = () => {
    this.setState(prevState => ({ timeRemaining: prevState.timeRemaining + 30 }));
  }
  endTime = () => {
    this.setState(prevState => ({ timeRemaining: 0 }));
  }

  render() {
    // console.log(this.state.timeRemaining)
    return (
      <div className="container">
        <div style={{fontWeight: "bold" }}>الوقت المتبقي: <span style={{ color: "rgb(255, 100, 100)" }}>{this.state.timeRemaining}</span> ثانية</div>
        <br></br>
        <div >
          <div className="col">
            <div className="row">
              <Button onClick={this.addTime} label="إضافة 30 ثانية" severity="success" />
            </div>
            <br></br>
            <div className="row">
              <Button onClick={this.endTime} label="إنهاء الوقت" />
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Timer;
