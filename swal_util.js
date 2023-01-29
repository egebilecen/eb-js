function confirmSwal(title, text, confirmCallback = null, cancelCallback = null)
{
    Swal.fire({
        title: title,
        text: text,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Evet"
    })
    .then((result) => {
        if(result.isConfirmed
        && confirmCallback !== null)
            confirmCallback();
        else if(cancelCallback !== null)
            cancelCallback();
    });
}

function ajaxResultSwal(res)
{
    var show_btn = !res.hide_btn;

    if(show_btn == null
    || show_btn == undefined)
        show_btn = true;

    Swal.fire({
        title : (res.swal_icon == "error") ? "Hata" : ((res.swal_icon == "warning") ? "Uyarı" : "Bilgi"),
        html  : res.message + (res.swal_icon != "success" ? " <br /><b>(İşlem Kodu: "+res.code+")</b>" : ""),
        icon  : res.swal_icon,
        showConfirmButton : show_btn,
        confirmButtonText : "Kapat",
        allowOutsideClick : false
    });
}
