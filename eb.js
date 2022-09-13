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
function uniqueID(){
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
function getElementById(element){
    return document.getElementById(element);
}

/*
	Javascript's document.querySelector()
	@return dom object
*/
function querySelector(query){
    return document.querySelector(query);
}

/*
	Easy usage of setTimeout()
*/
function delay(func, time){
    setTimeout( () => {
        func();
    }, time );
}

/*
	Runs your function ?x times
*/
function repeat(func, count){
    for( let i=1; i <= count; i++ )
    {
        func();
    }
}

/*
	Shuffle the array elements
*/
function arrayShuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

/*
	Check if number is negative
*/
function isNegative(num){
    return num < 0;
}

/*
	Get random element from array
*/
Array.prototype.getRandomElement = function(){
    var arr  = this;
    var rand = Math.floor(Math.random() * arr.length);
    
    return arr[rand];
}

/*
	Get random property from a object
*/
Object.prototype.getRandomObject = function(property_count, excluded_keys){
    if(typeof excluded_keys === "undefined" || excluded_keys.constructor !== Array)
        excluded_keys = [];

    var obj  = this;
    var rand = Math.floor(Math.random() * property_count);
    var i = 0;

    for(key in obj)
    {
        if(i === rand)
        {
            if(excluded_keys.indexOf(key) === -1)
                obj[key]._keyName_ = key;
            else
                obj.getRandomObject(property_count, excluded_keys);
            
            return obj[key];
        }

        i++;
    }
}

/*
	Add number filter to input. Requires jQuery
*/
function addNumberFilter()
{
    $("body").on("keyup", "input", (e) => {
        var $this = e.currentTarget;
        var data_type = $($this).attr("data-type");

        if(!data_type) return;

        var val = $($this).val();

        if(data_type == "float" || data_type == "double")
        {
            if(isNaN(val))
            {
                val = val.replace(/[^0-9\.]/g,'');

                if(val.split('.').length > 2) 
                    val = val.replace(/\.+$/, "");
            }
        }
        else val = val.replace(/[^0-9]/g,'');

        $($this).val(val);
    });	
}
