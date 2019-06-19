class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {step: 0};
  }
  onNextStep(stepNumber) {
    this.setState({step: stepNumber || 0 });
  }
  render() {
    return (
      <div>
        <Stepper onNextStep={this.onNextStep.bind(this)} step={this.state.step} />
        <MoonTrip step={this.state.step} />
      </div>
    );
  }
}
