class App extends React.Component{
  constructor(props){
    super(props);
    alert("constructor");
    this.state = {
      html: "value set at constructor",
    }
  }
  
  componentWillMount(){
    alert("componentWillUpdate")
  }
    
  componentDidMount(){
    alert("componentDidUpdate")
  }
  
  setValue(inputText){
    this.enteredText = inputText.target.value;
  }
  
  handleClick(){
    this.setState({
      html: this.enteredText,
    })
  }
  
  
  render(){
    return (
      <div>
        <h1> React Component Lifecycle </h1>
        <p> Whenever a new component is created, it follows a lifecycle. </p>
        <h3>{this.state.html}</h3>
        <input type='text' onChange={this.setValue.bind(this)}></input>
        <button onClick={this.handleClick.bind(this)}>press</button>
      </div>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
    
