import React, {Component} from 'react';
import {Button} from '../Button/Button'
import './Search.scss'


class Search extends Component {

	state = {
		searchedTerm : '',
		startSearch : false,
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (nextState.startSearch) {
			return true
		}
		return false
	}

	componentDidUpdate(){
		const {onDataSearch} = this.props;
		onDataSearch(this.state.searchedTerm);
		this.setState({
			startSearch : false,
		})
	}

	addValue(event) {
		if (event.key === "Enter") {
			this.setState({
				startSearch : true,
			})
		} 
		this.setState({
			searchedTerm : event.target.value,
		})
	}

	searchResults(value){
		this.setState({
			startSearch : value,
		})
	}

	render() {
		return(
			<section  className="search" >
				<input type="text" 
					   placeholder="Search" 
					   name="Search" 
					   onKeyUp={(e) => this.addValue(e)} 
				/>
				<Button beginSearch={(value) => this.searchResults(value)}/>
			</section>
		)
	}
}

export {Search};