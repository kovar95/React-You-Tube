import React, {Component, Fragment} from 'react';
import './App.scss';

import {Search} from './components/Search/Search';
import {Header} from './components/Header/Header';
import {Image} from './components/Image/Image';
import {Main} from './components/Main/Main';

class App extends Component {

	state = {
		key : "AIzaSyBWueneDpHbbvKAg6BHenPY--qjzeMtMZc",
		data : '',
		load: false,
	}

	sholudComponentUpdate(nextProps, nextState) {
		if (nextState.load || nextState.data[0].snippet.title !== this.state.data[0].snippet.title) {
			return true
		}
		return false
	}

	dataSearch(text) {
		let request = `https://www.googleapis.com/youtube/v3/search?part=snippet&
		type=video&maxResults=30&q=${text}&key=${this.state.key}`;
		fetch(request)
	  	.then( response => response.json())
	  	.then( myJson => {
	  		this.setState({
	  			data : myJson.items,
	  			load: true,
	  		})
	  	})
	  	.catch( error => alert(`Error: ${error}`));
	}

	render() {
		return (
			<Fragment>
				<Header getSearched={(text) => this.dataSearch(text)} />
				<Main displayData={this.state.data} load={this.state.load} />
			</Fragment>
		)
	}
}

export default App;