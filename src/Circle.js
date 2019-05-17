import React from "react";

class Circle extends React.Component {
  render() {
    return (
      <div
        className={
          (this.props.changeColor ? "circle__color--show" : "") +
          (this.props.changeSize ? " circle__size--show" : "") +
          " circle"
        }
        style={{
          backgroundColor: this.props.color,
          height: this.props.size + "px",
          width: this.props.size + "px",
          opacity: this.props.opacity
        }}
        onClick={() => this.props.handleCircleClick(this.props.id)}
        onBlur={() => this.props.handleBlur(this.props.id)}
      >
        <div
          className="circle__color circle__color--red"
          data-color="red"
          onClick={e => this.props.handleCircleColorClick(this.props.id, e)}
        />
        <div
          className="circle__color circle__color--blue"
          data-color="blue"
          onClick={e => this.props.handleCircleColorClick(this.props.id, e)}
        />
        <div
          className="circle__color circle__color--cyan"
          data-color="cyan"
          onClick={e => this.props.handleCircleColorClick(this.props.id, e)}
        />
        <div
          className="circle__color circle__color--pink"
          data-color="pink"
          onClick={e => this.props.handleCircleColorClick(this.props.id, e)}
        />
        <div
          className="circle__color circle__color--purple"
          data-color="purple"
          onClick={e => this.props.handleCircleColorClick(this.props.id, e)}
        />
        <div
          className="circle__color circle__color--yellow"
          data-color="yellow"
          onClick={e => this.props.handleCircleColorClick(this.props.id, e)}
        />
        <div
          className="circle__color circle__color--violet"
          data-color="violet"
          onClick={e => this.props.handleCircleColorClick(this.props.id, e)}
        />
        <div
          className="circle__color circle__color--lime"
          data-color="lime"
          onClick={e => this.props.handleCircleColorClick(this.props.id, e)}
        />
        <div
          className="circle__color circle__color--green"
          data-color="green"
          onClick={e => this.props.handleCircleColorClick(this.props.id, e)}
        />
        <div
          className="circle__color circle__color--lightblue"
          data-color="lightblue"
          onClick={e => this.props.handleCircleColorClick(this.props.id, e)}
        />

        <div
          className="circle__size"
          onClick={e => this.props.handleSizeClick(e)}
        >
          <input
            type="number"
            onKeyDown={e => this.props.handleSizeChange(this.props.id, e)}
          />
        </div>
      </div>
    );
  }
}

export default Circle;
