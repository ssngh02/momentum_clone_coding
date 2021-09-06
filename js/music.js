const musics = ["https://www.youtube.com/embed/bpOSxM0rNPM", 
"https://www.youtube.com/embed/giLpYG11qxQ", 
"https://www.youtube.com/embed/C4qJ4y-rDgs",
"https://www.youtube.com/embed/mGUjVbsYG6E",
"https://www.youtube.com/embed/VsxlqmSDmBU",
"https://www.youtube.com/embed/nyuo9-OjNNg"];

const chosenMusic = musics[Math.floor(Math.random() * musics.length)];
const bgm = document.querySelector("iframe");

bgm.width = "600";
bgm.height = "340";
bgm.src = `${chosenMusic}` + "?autoplay=1&mute=1";
bgm.title = "YouTube video player";
bgm.frameborder ="0";
bgm.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
bgm.allowFullscreen;


