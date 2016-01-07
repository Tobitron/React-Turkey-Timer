var HelloUser = React.createClass({
  getInitialState: function(){
  	return {
  		username: 'Tobias Kahn'
  	}
  },

  handleChange: function(event){
  	this.setState({
  		username: event.target.value
  	});
  },

  render: function(){
      return (
        <div>
          Hello {this.state.username} <br/><br/>
          Change Name: <input type="text" value={this.state.username} onChange={this.handleChange} /> <br/>
          Devils Name: {reverse(this.state.username)} <br/>
          Yelled Name: {this.state.username.toUpperCase()}
        </div>
      )
    }
  });

ReactDOM.render(
	<HelloUser />, 
	document.getElementById('app')
);

function reverse(s) {
  var o = '';
  for (var i = s.length - 1; i >= 0; i--)
    o += s[i];
  return o;
}