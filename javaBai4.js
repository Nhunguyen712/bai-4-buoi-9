function validateForm() {
    var ho = document.forms["formDK"]["ho"].value.trim();
    var ten = document.forms["formDK"]["ten"].value.trim();
    var sdt = document.forms["formDK"]["sdt"].value.trim();

    if (ho === "" || ten === "") {
        alert("Vui lòng nhập đầy đủ Họ và Tên.");
        return false;
    }

    var phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(sdt)) {
        alert("Số điện thoại phải là 1 số và có đúng 10 chữ số.");
        return false;
    }

    return true;
}