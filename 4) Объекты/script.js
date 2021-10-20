"use strict";
//Задание №1.
let tv = {
	currentChannel: 1,
	nextChannel() {
		this.currentChannel++;
	},
	previousChannel() {
		this.currentChannel--;
	},
	setChannel(number) {
		if (typeof number === "number") {
			this.currentChannel = number;
		}
	}
};

//Задание №2.
let mp3 = {
	name: "Tom",
	state: false,
	_batteryCharge: 100,
	_volume: 10,
	currentNumberTrack: 1,
	musicTrack: [
	{
		serialNumber: 1,
		singer: "24kGoldn",
		trackTitle: "«Mood»",
		songDutaion: 194,
	},	{
		serialNumber: 2,
		singer: "Silk Sonic",
		trackTitle: "Leave the Door Open",
		songDutaion: 265,
	},	{
		serialNumber: 3,
		singer: "The Kid LAROI",
		trackTitle: "Stay",
		songDutaion: 240,
	},	{
		serialNumber: 4,
		singer: "Ioral Dik Eht",
		trackTitle: "Yats",
		songDutaion: 42,
	}
	],
	
	powerOn() {
		this.state = true;
	},
	powerOff() {
		this.state = false;
	},
	get battery() {
		return `${this._batteryCharge} %`;
	},
	get volume() {
		return this._volume;
	},
	set volume(num) {
		if (num > 0 && num < 20) {
			this._volume = num;
		}
	},
	volumeDown() {
		if (this._volume > 0) {
			this._volume--;
		}
	},
	volumeUp() {
		if (this._volume < 20) {
			this._volume++;
		}
	},
	get tracksList() {
		return this.musicTrack;
	},
	nextTrack() {
		if (this.currentNumberTrack < this.musicTrack.length) {
			this.currentNumberTrack += 1;
		} else if (this.currentNumberTrack = this.musicTrack.length) {
			this.currentNumberTrack = 1;
		}
		return `${this.musicTrack[this.currentNumberTrack - 1].singer}: ${this.musicTrack[this.currentNumberTrack - 1].trackTitle}`;
	},
	previousTrack() {
		if (this.currentNumberTrack > 1) {
			this.currentNumberTrack -= 1;
		} else if (this.currentNumberTrack === 1) {
			this.currentNumberTrack = this.musicTrack.length;
		}
		return `${this.musicTrack[this.currentNumberTrack - 1].singer}: ${this.musicTrack[this.currentNumberTrack - 1].trackTitle}`;
	},
	musicStop() {
		return `Stop ${this.musicTrack[this.currentNumberTrack - 1].singer}: ${this.musicTrack[this.currentNumberTrack - 1].trackTitle}`;
	},
	musicPlay() {
		return `Play ${this.musicTrack[this.currentNumberTrack - 1].singer}: ${this.musicTrack[this.currentNumberTrack - 1].trackTitle}`;
	},
	get fullTime() {
		let fullTime = 0;
		for (let i = 0; i < this.musicTrack.length; i++) {
			fullTime += this.musicTrack[i].songDutaion;
		}
		let minutes = parseInt(fullTime / 60);
		let seconds = fullTime % 60;
		return `Total: ${minutes} min, ${seconds} sec.`;
	},
	addMusicTrack(obj) {
		this.musicTrack.push(obj);
	}
}
function CreateTrack(singer, trackTitle, songDutaion) {
	this.singer = singer;
	this.trackTitle = trackTitle;
	this.songDutaion = songDutaion;
};

const newTrack1 = new CreateTrack("Bob Marley", "Sun is shining", 298);
const newTrack2 = new CreateTrack("Bob Marley", "Sun is shining", 298);
mp3.addMusicTrack(newTrack1);
mp3.addMusicTrack(newTrack2);