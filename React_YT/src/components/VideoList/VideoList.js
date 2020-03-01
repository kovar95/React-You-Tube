import React, {Fragment} from 'react';
import './VideoList.scss';
import {VideoElement} from '../VideoElement/VideoElement';
import uuid from 'react-uuid';


const VideoList = ({displayData, load, pageNumber, openVideoWithThisId}) => {

	const pageData = [];

	for (let i = (pageNumber - 1)*10; i < pageNumber*10; i++) {
		pageData.push(displayData[i]);
	}

		return (
			<section className="video-list">
				{load && pageData.map( element => {
						return (
							<VideoElement 
								src={element.snippet.thumbnails.medium.url}
								title={element.snippet.title}
								desc={element.snippet.description}
								key={uuid()}
								videoId={element.id.videoId}
								openVideoWithThisId={openVideoWithThisId}
							/>
						)
					})	
				}
			</section>
		 )
}

export {VideoList};