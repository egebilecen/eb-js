// Requires SweetAlert2
let AJAX_LOCK = false;

function sendAjaxRequest({ url, method, data, dataType, onSuccess, onError })
{
    if(url === undefined) url = "ajax.php";
    if(method === undefined) method = "post";
    if(data === undefined) data = {};
    if(dataType === undefined) dataType = "json";
    if(onSuccess === undefined) onSuccess = null;
    if(onError === undefined) onError = null;

    AJAX_LOCK = true;

    $.ajax({
        url  : url,
        type : method,
        data : data,
        dataType : dataType,
        success : function(res)
        {
            AJAX_LOCK = false;
            if(onSuccess !== null) onSuccess(res);
        },
        error : function(err)
        {
            AJAX_LOCK = false;
            if(onError !== null) onError(err);
        }
    });
}
