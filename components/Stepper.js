class Stepper extends React.Component {
  emitNextStep(e) {
    this.props.onNextStep(Number(e.target.value));
  }
  getBackgroundClass(stepValue) {
    if (this.props.step === stepValue) {
      return 'bg-primary';
    } else {
      return 'bg-dark';
    }
  }
  render() {
    return (
      <div>
        <button
          className={`rounded-circle text-white mr-2 ${this.getBackgroundClass(0)}`}
          onClick={this.emitNextStep.bind(this)}
          value={0}
        >1</button>
        <button
          className={`rounded-circle text-white mr-2 ${this.getBackgroundClass(1)}`}
          onClick={this.emitNextStep.bind(this)}
          value={1}
        >2</button>
        <button
          className={`rounded-circle text-white mr-2 ${this.getBackgroundClass(2)}`}
          onClick={this.emitNextStep.bind(this)}
          value={2}
        >3</button>
        <button
          className={`rounded-circle text-white ${this.getBackgroundClass(3)}`}
          onClick={this.emitNextStep.bind(this)}
          value={3}
        >4</button>
      </div>
    );
  }
}
