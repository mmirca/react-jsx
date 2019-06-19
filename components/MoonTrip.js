class MoonTrip extends React.Component {
  render() {
    let pageContent;
    switch (this.props.step) {
      case 3:
        pageContent = <p>Done!! &#x1F468;&#x200D;&#x1F680; &#x1F47E;</p>;
        break;
      case 2:
        pageContent = <p>Don't look down... &#x1F319;</p>;
        break;
      case 1:
        pageContent = <p>Bye... &#x1F30D;</p>;
        break;
      default:
        pageContent = <p>Lets's get started! &#x1F680;</p>;
    }
    return (
      <div className='display-4 mt-2'>
        {pageContent}
      </div>
    );
  }
}
