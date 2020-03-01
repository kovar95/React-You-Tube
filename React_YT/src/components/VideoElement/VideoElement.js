import React, {Component} from 'react';
import './VideoElement.scss';
import {Image} from '../Image/Image';

class VideoElement extends Component{

	state = {
		iAmOpeningThisVideo: false,
	}

	sholudComponentUpdate(nextProps, nextState){
		if (nextState.iAmOpeningThisVideo !== this.state.iAmOpeningThisVideo) {
			return true
		}
		return false
	}

	componentDidUpdate(){
		const {videoId, openVideoWithThisId} = this.props;
		openVideoWithThisId(videoId);
	}

	openThisVideo(value) {
		this.setState({
			iAmOpeningThisVideo: true,
		})
	}

	render() {

		return (
				<div>
					<Image src={this.props.src} pleaseOpenVideo={(value) => this.openThisVideo(value)}/>
					<section>
						<h3 onClick={(value) => this.openThisVideo(value)}>{this.props.title}</h3>
						<div>{this.props.desc}</div>
					</section>
				</div>
			)
	}
}



export {VideoElement}