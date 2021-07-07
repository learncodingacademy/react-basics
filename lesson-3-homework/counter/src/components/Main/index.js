import React, {Component} from "react";
import Range from "../Range";
import CheckBox from "../CheckBox";
import ActionButton from "../ActionButton";
import "./style.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      showRange: false,
      showCheckBox: false,
      max: 10,
      min: 0,
      isEven: false,
      isOdd: false,
      step: 1,
    };
  }

  onClickShowRange = e => {
    this.setState({
      showRange: !this.state.showRange,
    });
  };

  onClickShowCheckBoxCont = e => {
    this.setState({
      showCheckBox: !this.state.showCheckBox,
    });
  };

  handleClickIncrement = () => {
    const newCount = this.state.count;
    this.setState({
      count: newCount + this.state.step,
    });
    if (newCount === this.state.max) {
      alert("The max value is: " + this.state.max);
      this.setState({
        count: this.state.max,
      });
    }
  };

  handleClickDecrement = () => {
    const newCount = this.state.count;
    this.setState({
      count: newCount - this.state.step,
    });
    if (newCount === this.state.min) {
      alert("The min value is: " + this.state.min);
      this.setState({
        count: this.state.min,
      });
    }
  };

  handleClickReset = () => {
    this.setState({
      step: 1,
      count: 0,
      showRange: false,
      showCheckBox: false,
      max: 10,
      min: 0,
    });
  };

  setRange = ({minvalue, maxvalue}) => {
    if (maxvalue <= minvalue) {
      alert("(-_-) Enter correct range! (o_O)");
    } else {
      this.setState({
        min: minvalue,
        max: maxvalue,
        count: minvalue,
      });
    }
  };

  setCheck = ({stepCheck}) => {
    const even = this.state.isEven;
    const count = this.state.count;
    if (even && count % 2 === 0) {
      console.log(this.state.count);
      this.setState({
        step: stepCheck,
      });
    } else {
      console.log(this.state.count);
      this.setState({
        step: stepCheck,
      });
    }
  };

  renderRange = () => {
    this.state.showRange && (
      <Range
        setRange={this.setRange}
        min={this.state.min}
        max={this.state.max}
      />
    );
  };

  renderCheckBox = () => {
    this.state.showCheckBox && (
      <CheckBox
        setCheckBox={this.setCheckBox}
        isEven={this.state.isEven}
        isOdd={this.state.isOdd}
      />
    );
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <ActionButton
          actionHandler={this.handleClickDecrement}
          sign={"-"}
          classSequnace={"btn btn-light"}
        />
        <ActionButton
          actionHandler={this.handleClickReset}
          sign={"RESET"}
          classSequnace={"btn btn-light"}
        />
        <ActionButton
          actionHandler={this.handleClickIncrement}
          sign={"+"}
          classSequnace={"btn btn-light"}
        />
        <ActionButton
          actionHandler={this.onClickShowRange}
          sign={"Range"}
          classSequnace={"smallBtn"}
        />
        <ActionButton
          actionHandler={this.onClickShowCheckBoxCont}
          sign={"Type"}
          classSequnace={"smallBtn"}
        />
        {this.renderRange()}
        {this.renderCheckBox()}
      </div>
    );
  }
}

export default Main;
