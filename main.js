const videoSection= document.querySelector('#video');
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


function appearEpisode1(e){
	e.preventDefault();
	videoSection.innerHTML='<iframe src="http://vidstreaming.io/load.php?id=MjIwMQ==&amp;title=Naruto+Shippuden+Episode+1" allowfullscreen="true"></iframe>';
}

function appearEpisode2(e){
	e.preventDefault();
	videoSection.innerHTML='<iframe src="http://vidstreaming.io/streaming.php?id=MjIwMA==&amp;title=Naruto+Shippuden+Episode+2" allowfullscreen="true"></iframe>';
}
function appearEpisode3(e){
	e.preventDefault();
	videoSection.innerHTML='<iframe src="http://vidstreaming.io/streaming.php?id=MjIwNA==&amp;title=Naruto+Shippuden+Episode+3" allowfullscreen="true"></iframe>';
}
function appearEpisode4(e){
	e.preventDefault();
	videoSection.innerHTML='<iframe src="http://vidstreaming.io/streaming.php?id=MjIwNg==&amp;title=Naruto+Shippuden+Episode+4" allowfullscreen="true"></iframe>';
}
function appearEpisode5(e){
	e.preventDefault();
	videoSection.innerHTML='<iframe src="http://vidstreaming.io/streaming.php?id=MjIwOQ==&amp;title=Naruto+Shippuden+Episode+5" allowfullscreen="true"></iframe>';
}
function appearEpisode6(e){
	e.preventDefault();
	videoSection.innerHTML='<iframe src="http://vidstreaming.io/streaming.php?id=MjIxMw==&amp;title=Naruto+Shippuden+Episode+6" allowfullscreen="true"></iframe>';
}
function appearEpisode7(e){
	e.preventDefault();
	videoSection.innerHTML='<iframe src="http://vidstreaming.io/streaming.php?id=MjIxMg==&amp;title=Naruto+Shippuden+Episode+7" allowfullscreen="true"></iframe>';
}
function appearEpisode8(e){
	e.preventDefault();
	videoSection.innerHTML='<iframe src="http://vidstreaming.io/streaming.php?id=MjIxNw==&amp;title=Naruto+Shippuden+Episode+8" allowfullscreen="true" ></iframe>';
}
function appearEpisode9(e){
	e.preventDefault();
	videoSection.innerHTML='<iframe src="http://vidstreaming.io/streaming.php?id=MjIxNg==&amp;title=Naruto+Shippuden+Episode+9" allowfullscreen="true"></iframe>';
}
function appearEpisode10(e){
	e.preventDefault();
	videoSection.innerHTML='<iframe src="http://vidstreaming.io/streaming.php?id=MjIxOA==&amp;title=Naruto+Shippuden+Episode+10" allowfullscreen="true"></iframe>';
}
function appearEpisode11(e){
	e.preventDefault();
	videoSection.innerHTML='<iframe src="http://vidstreaming.io/streaming.php?id=MjIyMQ==&amp;title=Naruto+Shippuden+Episode+11" allowfullscreen="true"></iframe>';
}
function appearEpisode12(e){
	e.preventDefault();
	videoSection.innerHTML='<iframe src="http://vidstreaming.io/streaming.php?id=MjIyNA==&amp;title=Naruto+Shippuden+Episode+12" allowfullscreen="true"></iframe>';
}



ep1.addEventListener('click',appearEpisode1);
ep2.addEventListener('click',appearEpisode2);
ep3.addEventListener('click',appearEpisode3);
ep4.addEventListener('click',appearEpisode4);
ep5.addEventListener('click',appearEpisode5);
ep6.addEventListener('click',appearEpisode6);
ep7.addEventListener('click',appearEpisode7);
ep8.addEventListener('click',appearEpisode8);
ep9.addEventListener('click',appearEpisode9);
ep10.addEventListener('click',appearEpisode10);
ep11.addEventListener('click',appearEpisode11);
ep12.addEventListener('click',appearEpisode12);

