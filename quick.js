/**
  * QUICK JS - Version 1.0
  */

/*
	Sleep Function
*/
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

/*
	Unique ID Function
	return: @string
*/
function uniq_id(){
  return Math.random().toString(36).substr(2, 9);
}

/*
	Random Number Function
	return: @int
*/
function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

/*
	Javascript's document.getElementById()
	@return dom object
*/
function getElementById( element ){
    return document.getElementById(element);
}

/*
	Javascript's document.querySelector()
	@return dom object
*/
function querySelector( query ){
    return document.querySelector(query);
}

/*
	Easy usage of setTimeout()
*/
function delay( func, time ){
    setTimeout( () => {
        func();
    }, time );
}

/*
	Runs your function ?x times
*/
function repeat( func, count ){
    for( let i=1; i <= count; i++ )
        func();
}
