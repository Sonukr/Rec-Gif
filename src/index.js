import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search';
import GifList from './components/giflist';
import request from 'superagent';



class App extends React.Component {
	
		
  handleTermChange(term) {
  	const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=dc6zaTOxFJmzC`;	
    request.get(url, (err, res) => {
      this.setState({ gifs: res.body.data })
    });
  }
		
  constructor(props) {
    super(props);

    this.state = {
      gifs: [ ]
    }
		
		   this.handleTermChange = this.handleTermChange.bind(this);
  }
		
		
	render() {
		return (
			<div className="greeting">
				<p className="greeting-text">Hello World!</p>
				<SearchBar onTermChange={term => this.handleTermChange(term)} />
				<GifList gifs={this.state.gifs} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));