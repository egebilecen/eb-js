function confirmSwal(title, text, confirmCallback = null, cancelCallback = null)
{
    Swal.fire({
        title: title,
        text: text,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Evet",
        cancelButtonText: "İptal"
    })
    .then((result) => {
        if(result.isConfirmed
        && confirmCallback !== null)
            confirmCallback();
        else if(cancelCallback !== null)
            cancelCallback();
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

function ajaxResultSwal(res)
{
    let showBtn = !res.hide_btn;

    if(showBtn == null
    || showBtn == undefined)
        showBtn = true;

    showSwal(
        (res.data == "error") ? "Hata" : ((res.data == "warning") ? "Uyarı" : "Bilgi"),
        res.message + (res.data != "success" ? " <br /><b>(İşlem Kodu: "+res.code+")</b>" : ""),
        res.data == "" ? "error" : res.data,
        "Kapat",
        showBtn
    );
}

function showSwal(title, text, icon, confirmButtonText = "Kapat", showConfirmButton = true)
{
    Swal.fire({
        title : title,
        html  : text,
        icon  : icon,
        showConfirmButton : showConfirmButton,
        confirmButtonText : confirmButtonText,
        allowOutsideClick : false
    });
}

function ajaxErrorSwal()
{
    Swal.fire({
        title : "Hata",
        html  : "İstek gönderilirken bir hata oluştu.",
        icon  : "error",
        showConfirmButton : true,
        confirmButtonText : "Kapat",
        allowOutsideClick : false
    });
}
