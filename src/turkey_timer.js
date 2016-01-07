var TurkeysContainer = React.createClass({
  getInitialState: function(){
    return {
      name: '',
      turkeys: [],
    }
  },
  updateName: function(e){
    this.setState({
      name: e.target.value
    });
  },
  addTurkey: function(newTurkey){
    this.setState({
      turkeys: this.state.turkeys.concat([newTurkey])
    });
  },
  render: function(){
    return (
      <div>
        <span> Enter your name: </span>
        <input type="text" value={this.state.name} onChange={this.updateName} />
        <h3> The Turkeys of {this.state.name} </h3>
        <AddTurkey addNew={this.addTurkey} />
        <ShowList turkeyWeights={this.state.turkeys} />
      </div>
    )
  }
});

var AddTurkey = React.createClass({
  getInitialState: function(){
    return {
      newTurkey: ''
    }
  },
  updateNewTurkey: function(e){
    this.setState({
      newTurkey: e.target.value
    });  
  },
  handleAddNew: function(){
    if (this.state.newTurkey >= 10) {
      this.props.addNew(this.state.newTurkey);
      this.setState({
        newTurkey: ''
      });
    } else {alert("This algorithm only works for turkeys that weight 10lbs or greater.")};
  },
  render: function(){
    return (
        <div>
          <input type="text" value={this.state.newTurkey} onChange={this.updateNewTurkey} />
          <button onClick={this.handleAddNew}> Add Turkey (lbs) </button>
        </div>
    );
  }
});

var ShowList = React.createClass({
  render: function(){
    var listItems = this.props.turkeyWeights.map(function(turkey){
      return <li> Weight: {turkey} lbs, Cooktime: {(Math.log(turkey) * 1.65).toFixed(2)} hours </li>;
    });
    return (
      <div>
        <h3> Turkeys </h3>
        <ul>
          {listItems}
        </ul>
      </div>
    )
  }
});

ReactDOM.render(
  <TurkeysContainer />,
  document.getElementById('app')
);
