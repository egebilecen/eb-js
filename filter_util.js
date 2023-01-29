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
