// Requires SweetAlert2
var AJAX_LOCK = false;

function sendAjaxRequest({ url, method, data, dataType, onSuccess, onError })
{
    if(url === undefined) url = "ajax.php";
    if(method === undefined) method = "post";
    if(data === undefined) data = {};
    if(dataType === undefined) dataType = "json";
    if(onSuccess === undefined) onSuccess = null;
    if(onError === undefined) onError = null;

    $.ajax({
        url  : url,
        type : method,
        data : data,
        dataType : dataType,
        success : function(res)
        {
            if(onSuccess !== null) onSuccess(res);
        },
        error : function(err)
        {
            if(onError !== null) onError(err);
        }
    });
}

function isAjaxLocked()
{
    if(AJAX_LOCK)
    {
        Swal.fire({
            title : "Uyarı",
            html  : "Lütfen bir önceki gönderilen isteğin bitmesini bekleyiniz.",
            icon  : "warning",
            showConfirmButton : true,
            confirmButtonText : "Kapat",
            allowOutsideClick : false
        });

        return true;
    }

    return false;   
}
