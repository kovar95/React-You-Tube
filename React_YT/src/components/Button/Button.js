import React, {Component} from 'react';
import './Button.scss';
import {Image} from '../Image/Image';
import search from '../../images/search.png';

class Button extends Component{

	state = {
		search: false,
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (nextState.search !== this.state.search) {
			return true
		}
		return false
	}

	componentDidUpdate(){
		const {beginSearch} = this.props;
		beginSearch(this.state.search);
	}
	
	proceedSearch(){
		this.setState({
			search: true
		})
	}

	render() {
		return (
			<div onClick={() => this.proceedSearch()} className="button">
				<img src={search} />
			</div>
		);	
	}	
}

export {Button};