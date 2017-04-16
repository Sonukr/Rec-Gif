import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search';

class App extends React.Component {
	
  handleTermChange(term) {
		console.log(term);
  }
		
	render() {
		return (
			<div class="greeting">
				<p class="greeting-text">Hello World!</p>
				<SearchBar onTermChange={this.handleTermChange} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));