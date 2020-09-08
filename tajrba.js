const VideoSection = document.querySelector('#video');
const ep1 = document.querySelector('.episode1');
const ep2 = document.querySelector('.episode2');
const ep3 = document.querySelector('.episode3');
const ep4 = document.querySelector('.episode4');
const ep5 = document.querySelector('.episode5');
const ep6 = document.querySelector('.episode6');
const ep7 = document.querySelector('.episode7');
const ep8 = document.querySelector('.episode8');
const ep9 = document.querySelector('.episode9');
const ep10 = document.querySelector('.episode10');
const ep11 = document.querySelector('.episode11');
const ep12 = document.querySelector('.episode12');

function appearEpisode(frame){
	VideoSection.innerHTML= frame; 
}

ep1.addEventListener('click',function(e){e.preventDefault(); appearEpisode('<iframe src="http://vidstreaming.io/load.php?id=MjIwMQ==&amp;title=Naruto+Shippuden+Episode+1" allowfullscreen="true"></iframe>')});
ep2.addEventListener('click',function(e){e.preventDefault(); appearEpisode('<iframe src="http://vidstreaming.io/streaming.php?id=MjIwMA==&amp;title=Naruto+Shippuden+Episode+2" allowfullscreen="true"></iframe>')});
ep3.addEventListener('click',function(e){e.preventDefault(); appearEpisode('<iframe src="http://vidstreaming.io/streaming.php?id=MjIwNA==&amp;title=Naruto+Shippuden+Episode+3" allowfullscreen="true"></iframe>')});
ep4.addEventListener('click',function(e){e.preventDefault(); appearEpisode('<iframe src="http://vidstreaming.io/streaming.php?id=MjIwNA==&amp;title=Naruto+Shippuden+Episode+3" allowfullscreen="true"></iframe>')});
ep5.addEventListener('click',function(e){e.preventDefault(); appearEpisode('<iframe src="http://vidstreaming.io/streaming.php?id=MjIwNA==&amp;title=Naruto+Shippuden+Episode+3" allowfullscreen="true"></iframe>')});
ep6.addEventListener('click',function(e){e.preventDefault(); appearEpisode('<iframe src="http://vidstreaming.io/streaming.php?id=MjIwNA==&amp;title=Naruto+Shippuden+Episode+3" allowfullscreen="true"></iframe>')});
ep7.addEventListener('click',function(e){e.preventDefault(); appearEpisode('<iframe src="http://vidstreaming.io/streaming.php?id=MjIwNA==&amp;title=Naruto+Shippuden+Episode+3" allowfullscreen="true"></iframe>')});
ep8.addEventListener('click',function(e){e.preventDefault(); appearEpisode('<iframe src="http://vidstreaming.io/streaming.php?id=MjIwNA==&amp;title=Naruto+Shippuden+Episode+3" allowfullscreen="true"></iframe>')});
ep9.addEventListener('click',function(e){e.preventDefault(); appearEpisode('<iframe src="http://vidstreaming.io/streaming.php?id=MjIwNA==&amp;title=Naruto+Shippuden+Episode+3" allowfullscreen="true"></iframe>')});
ep10.addEventListener('click',function(e){e.preventDefault(); appearEpisode('<iframe src="http://vidstreaming.io/streaming.php?id=MjIwNA==&amp;title=Naruto+Shippuden+Episode+3" allowfullscreen="true"></iframe>')});
ep11.addEventListener('click',function(e){e.preventDefault(); appearEpisode('<iframe src="http://vidstreaming.io/streaming.php?id=MjIwNA==&amp;title=Naruto+Shippuden+Episode+3" allowfullscreen="true"></iframe>')});
ep12.addEventListener('click',function(e){e.preventDefault(); appearEpisode('<iframe src="http://vidstreaming.io/streaming.php?id=MjIwNA==&amp;title=Naruto+Shippuden+Episode+3" allowfullscreen="true"></iframe>')});