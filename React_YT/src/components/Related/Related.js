import React, {Component} from 'react';
import './Related.scss';
import uuid from 'react-uuid';
import {VideoElement} from '../VideoElement/VideoElement';

class Related extends Component{

	state = {
		data: [],
		key : "AIzaSyBWueneDpHbbvKAg6BHenPY--qjzeMtMZc",
		check : false
	}

	shouldComponentUpdate(nextProps, nextState){
		if (nextProps.videoId !== this.props.videoId || nextState.check !== this.state.check) {
			return true
		}
		return false
	}

	componentDidUpdate() {
		if (this.props.videoId) {
			this.searchRelatedVideos(this.props.videoId);
		}
	}

	searchRelatedVideos(someId){
		let request = `https://www.googleapis.com/youtube/v3/search?part=snippet&
		maxResults=6&type=video&relatedToVideoId=${someId}&key=${this.state.key}`;
		fetch(request)
	  	.then( response => response.json())
	  	.then( myJson => this.setState({ data : myJson.items, check: true}))
	  	.catch( error => alert(`Error: ${error}`));	
	}

	render() {
		return (
			<div className="related-videos">
			{this.props.videoId &&<h4>Related videos:</h4>}
				{this.props.videoId && this.state.data.map( element => {
						return (
							<VideoElement 
								src={element.snippet.thumbnails.medium.url}
								title={element.snippet.title.substring(0,20)}
								desc={element.snippet.description.substring(0,20)}
								key={uuid()}
								videoId={element.id.videoId}
								openVideoWithThisId={this.props.openVideoWithThisId}
							/>
						)
					})	
				}
			</div>
		);
	}
}

export {Related}