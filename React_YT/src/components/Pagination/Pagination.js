import React, {Component} from 'react';
import './Pagination.scss';


class Pagination extends Component{

	state = {
		selectedPage: 1,
	}

	shouldComponentUpdate(nextProps, nextState){
		if (nextState.selectedPage !== this.state.selectedPage) {
			return true
		}
		return false
	}

	componentDidUpdate(){
		const {onPageSelected} = this.props;
		onPageSelected(this.state.selectedPage);
	}

	selectPage(number){
		this.setState({
			selectedPage : number,
		})
	}

	addClass(pageNumber){
	 	return this.state.selectedPage === pageNumber ? 'selected' : ''
	}

	render() {
		return (
			<div className="pagination">
				<span className={this.addClass(1)} onClick={() => {this.selectPage(1)}}>1</span>
				<span  className={this.addClass(2)} onClick={() => {this.selectPage(2)}}>2</span>
				<span  className={this.addClass(3)} onClick={() => {this.selectPage(3)}}>3</span>
			</div>
		)
	}
}

export {Pagination};