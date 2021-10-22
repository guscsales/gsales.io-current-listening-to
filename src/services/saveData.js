const { initializeApp } = require('firebase/app');
const { getDatabase, ref, set } = require('firebase/database');
const { credentials } = require('../../env');

const app = initializeApp(credentials);

function saveData(payload) {
	const db = getDatabase(app);
	set(ref(db, 'currentSong'), payload);
}

module.exports = saveData;
