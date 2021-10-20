"use strict";
// Задание №1.
class Mp3 {
	constructor(name) {
		this._name = name;
		this._state = false;
		this._currentNumberTrack = 1;
		this._musicTracks = [
	{
		singer: "24kGoldn",
		trackTitle: "«Mood»",
		songDutaion: 194,
	},	{
		singer: "Silk Sonic",
		trackTitle: "Leave the Door Open",
		songDutaion: 265,
	},	{
		singer: "The Kid LAROI",
		trackTitle: "Stay",
		songDutaion: 240,
	},	{
		singer: "Ioral Dik Eht",
		trackTitle: "Yats",
		songDutaion: 42,
	}
	];
		this._volume = 10; //0-20
		this._batteryCharge = 100;
	}
	get name() {
		return this._name;
	}
	set name(value) {
		if (Mp3.validString(value)) {
			this._name = value;
		}
	}
	powerOn() {
		this._state = true;
	}
	powerOff() {
		this._stare = false;
	}
	get currentTrack() {
		return this._musicTracks[this._currentNumberTrack - 1];
	}
	get tracksList() {
		return this._musicTracks;
	}
	nextTrack() {
		if (this._currentNumberTrack < this._musicTracks.length) {
			this._currentNumberTrack += 1;
		} else if (this._currentNumberTrack = this._musicTracks.length) {
			this._currentNumberTrack = 1;
		}
		return `${this._musicTracks[this._currentNumberTrack - 1].singer}: ${this._musicTracks[this._currentNumberTrack - 1].trackTitle}`;
	}
	previousTrack() {
		if (this._currentNumberTrack > 1) {
			this._currentNumberTrack -= 1;
		} else if (this._currentNumberTrack === 1) {
			this._currentNumberTrack = this._musicTracks.length;
		}
		return `${this._musicTracks[this._currentNumberTrack - 1].singer}: ${this._musicTracks[this._currentNumberTrack - 1].trackTitle}`;
	}
		musicStop() {
		return `Stop ${this._musicTracks[this._currentNumberTrack - 1].singer}: ${this._musicTracks[this._currentNumberTrack - 1].trackTitle}`;
	}
	musicPlay() {
		return `Play ${this._musicTracks[this._currentNumberTrack - 1].singer}: ${this._musicTracks[this._currentNumberTrack - 1].trackTitle}`;
	}
	get fullTime() {
		let fullTime = 0;
		for (let i = 0; i < this._musicTracks.length; i++) {
			fullTime += this._musicTracks[i].songDutaion;
		}
		let minutes = parseInt(fullTime / 60);
		let seconds = fullTime % 60;
		return `Total: ${minutes} min, ${seconds} sec.`;
	}
	addMusicTrack(obj) {
		this._musicTracks.push(obj);
	}
	get battery() {
		return `${this._batteryCharge} %`;
	}
	get volume() {
		return this._volume;
	}
	set volume(num) {
		if (num > 0 && num < 20) {
			this._volume = num;
		}
	}
	volumeDown() {
		if (this._volume > 0) {
			this._volume--;
		}
	}
	volumeUp() {
		if (this._volume < 20) {
			this._volume++;
		}
	}
	static validString(str) {
		if (typeof str === "string") {
			return true;
		}
		return false;
	}
}

class CreateTrack {
	constructor(singer, trackTitle, songDutaion) {
		this.singer = singer;
		this.trackTitle = trackTitle;
		this.songDutaion = songDutaion;
	}
};

const myMp3 = new Mp3("Bohdan");
const newTrack1 = new CreateTrack("Bob Marley", "Sun is shining", 298);
const newTrack2 = new CreateTrack("Bob Marley", "Sun is shining", 298);
myMp3.addMusicTrack(newTrack1);
myMp3.addMusicTrack(newTrack2);