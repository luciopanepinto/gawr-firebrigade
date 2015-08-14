var HEART_SOUND = new buzz.sound([
    "./sound/heart.ogg",
    "./sound/heart.mp3" 
]);
var STEP_SOUND = new buzz.sound([
    "./sound/step.ogg",
    "./sound/step.mp3" 
]);
var TOUCH_SOUND = new buzz.sound([
    "./sound/touch.wav"
]);
var MISS_SOUND = new buzz.sound([
    "./sound/miss.ogg",
    "./sound/miss.mp3" 
]);
var GAMEOVER_SOUND = new buzz.sound([
    "./sound/gameover.ogg",
    "./sound/gameover.mp3" 
]);

var GROUP_SOUND = new buzz.group([ HEART_SOUND, STEP_SOUND, TOUCH_SOUND, MISS_SOUND, GAMEOVER_SOUND ]);

function isAvailableSound() { 
	return !($("#main .control.sound").css("display") === "none");
}

function loadAllSound() { 
	if (isAvailableSound()) GROUP_SOUND.load();
}

function playHeartSound() { 
	if (isAvailableSound()) HEART_SOUND.play();
}
function playStepSound() { 
	if (isAvailableSound()) STEP_SOUND.play();
}
function playTouchSound() { 
	if (isAvailableSound()) setTimeout('TOUCH_SOUND.play()', 100);
}
function playMissSound() { 
	if (isAvailableSound()) MISS_SOUND.play();
}
function playGameoverSound() { 
	if (isAvailableSound()) GAMEOVER_SOUND.play();
}