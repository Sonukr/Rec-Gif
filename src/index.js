import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search';
import GifList from './components/giflist';
class App extends React.Component {
	
  handleTermChange(term) {
		console.log(term);
  }
		
		 constructor(props) {
    super(props);

    this.state = {
      gifs: [
        {
          id: 1,
          url: 'http://fakeimg.pl/300/'
        },
        {
          id: 2,
          url: 'http://fakeimg.pl/300/'
        },
        {
          id: 3,
          url: 'http://fakeimg.pl/300/'
        }
      ]
    }
  }
		
	render() {
		return (
			<div className="greeting">
				<p className="greeting-text">Hello World!</p>
				<SearchBar onTermChange={this.handleTermChange} />
				<GifList gifs={this.state.gifs} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));