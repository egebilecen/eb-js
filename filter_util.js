function isNumber(n) 
{
    return !isNaN(parseFloat(n)) && !isNaN(n - 0);
}

function validateEmail(email)
{
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

/*
	Add number filter to input. Requires jQuery.
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
