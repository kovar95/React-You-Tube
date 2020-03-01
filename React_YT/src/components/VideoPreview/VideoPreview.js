import React from 'react';
import './VideoPreview.scss';


const VideoPreview = ({videoId}) => {

		return (
			<section className="video-preview">
				{videoId && <iframe width="800" height="450" src={`https://www.youtube.com/embed/${videoId}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>}
			</section>
		)
}

export {VideoPreview};