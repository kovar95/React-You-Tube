import React, {Component} from 'react';
import './Image.scss';

class Image extends Component{

	state = {
		sholudIOpenThisVideo: false,
	}

	shouldComponentUpdate(nextProps, nextState){
		if (nextState.sholudIOpenThisVideo !== this.state.sholudIOpenThisVideo) {
			return true
		}
		return false
	}

	componentDidUpdate(){
		const {pleaseOpenVideo} = this.props;
		pleaseOpenVideo(this.state.sholudIOpenThisVideo);
	}

	openVideo() {
		this.setState({
			sholudIOpenThisVideo : true,
		})
	}

	render() {
		return <img src={this.props.src} alt="img"  onClick={() => this.openVideo()}/>
	}
}

export {Image};