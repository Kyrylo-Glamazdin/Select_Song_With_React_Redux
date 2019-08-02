const SONG_SELECTED = "SONG_SELECTED";

//Action creator
export const selectSong = song => {
	//return an action
	return{
		type: SONG_SELECTED,
		payload: song
	};
};