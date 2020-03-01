import React, {Component} from 'react';
import './Main.scss';
import {Message} from '../Message/Message';
import {VideoPreview} from '../VideoPreview/VideoPreview';
import {VideoList} from '../VideoList/VideoList';
import {Pagination} from '../Pagination/Pagination';
import {Related} from '../Related/Related';


class Main extends Component{

	state = {
		pageNumber : 1,
		videoForOpening: '',
		preview: false,
	}

	changePage(number){
		this.setState({
			pageNumber:number,
		})
	}

	setVideoForOpening(idOfVideo) {
		this.setState({
			videoForOpening : idOfVideo,
			preview: true,
		})
	}

	shouldComponentUpdate(nextProps, nextState){
		if ( nextState.videoForOpening !== this.state.videoForOpening || 
			nextProps.load !== this.props.load || 
			nextState.pageNumber !== this.state.pageNumber || 
			nextProps.displayData[0].snippet.title !== this.props.displayData[0].snippet.title
		) {
			return true
		}
		return false
	}

	componentDidUpdate() {
		this.setState({
			preview:false,
			isLoading: true,
		})
	}

	render() {
		return (
			<main>
				{document.documentElement.scrollTop = 0}
				<div className="main-wrapper">
					{!this.props.load && <Message/>}
					{this.state.preview && <VideoPreview videoId={this.state.videoForOpening}/>}
					<VideoList displayData={this.props.displayData} 
							   load={this.props.load} 
							   pageNumber={this.state.pageNumber}  
							   openVideoWithThisId={(idOfVideo) => this.setVideoForOpening(idOfVideo)} 
					/>
					{ this.props.load && <Pagination onPageSelected={(number) => this.changePage(number)}/>}
					{this.props.load && <Related videoId={this.state.videoForOpening} 
												 openVideoWithThisId={(idOfVideo) => this.setVideoForOpening(idOfVideo)}
										/>
					}
				</div>
			</main>
		);
	}
}

export {Main};