'use strict';

const { Streamings, getCurrentSong } = require('./services/getCurrentSong');
const saveData = require('./services/saveData');

if (Object.values(Streamings).indexOf(window.location.host) !== -1) {
	let storedCurrentSong = null;

	setTimeout(() => {
		storedCurrentSong = getCurrentSong(Streamings.YOUTUBE);

		saveData(storedCurrentSong);
	}, 1000);

	setInterval(() => {
		const currentSong = getCurrentSong(Streamings.YOUTUBE);

		if (currentSong === null) {
			storedCurrentSong = null;
			saveData(null);
		} else if (!storedCurrentSong) {
			saveData(currentSong);
		} else if (storedCurrentSong.title !== currentSong.title) {
			storedCurrentSong = currentSong;
			saveData(currentSong);
		}
	}, 4000);
}
