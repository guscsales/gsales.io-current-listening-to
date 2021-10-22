const Streamings = {
	YOUTUBE: 'music.youtube.com'
};

function getFromYouTube() {
	const songBar = document.querySelector('ytmusic-player-bar');
	const isPlaying =
		songBar.querySelector('#play-pause-button').getAttribute('title') ===
		'Pause';

	if (!isPlaying) {
		return null;
	}

	const [artist, album] = songBar
		.querySelector('.subtitle')
		.innerText.split('\n • \n');
	const metadata = {
		title: songBar.querySelector('.title').innerText,
		artist,
		album,
		cover: songBar
			.querySelector('.image')
			.getAttribute('src')
			.replace('w60-h60', 'w240-h240')
	};

	return metadata;
}

function getCurrentSong(streaming) {
	switch (streaming) {
		case Streamings.YOUTUBE:
			return getFromYouTube();
		default:
			console.error(
				`You must have to choose a streaming, options: ${Object.keys(
					Streamings
				).join(', ')}`
			);
	}
}

module.exports = { Streamings, getCurrentSong };
