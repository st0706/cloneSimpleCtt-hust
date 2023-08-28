const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var editIcon = $('.edit-icon');
var contentEditing = $('.main-content-editing');
var contentEdited = $('.main-content-edited');
var imgEdit = $('#img-edit');
var imgInput = $('.upload-button-input');
var imgEdited = $('#img-edited');
var checkboxes = document.getElementsByName("gender");

function gender(nodelist) {
    for (let i = 0; i < nodelist.length; i++) {
        if (nodelist[i].checked) {
            return nodelist[i].value;
            break;
        }
    }
}

//Khai báo object TTSV
var TTSV = {
    Hovaten: "Nguyễn Sơn Tùng",
    Namvaotruong: "2020",
    Bacdaotao: "Đại học đại trà",
    Chuongtrinh: "Kỹ thuật Máy tính 2020",
    Khoa_Vienquanly: "Trường Công nghệ Thông tin và Truyền thông",
    Tinhtranghoctap: "Học",
    Gioitinh: "Nam",
    Lop: "Kỹ thuật máy tính 02-K65",
    Khoahoc: "65",
    Email: "tung.ns204804@sis.hust.edu.vn"
}
// console.log("Thông tin sinh viên ban đầu:")


editIcon.onclick = function () {
    contentEditing.classList.toggle('apear');
    contentEdited.classList.toggle('hide');
    if (contentEditing.classList.contains('apear')) {

        imgEdit.src = imgEdited.src;

        imgInput.addEventListener('change', (event) => {
            if (event) {
                var fileImg = event.target.files[0];
                var reader = new FileReader();
                if (fileImg) {
                    reader.onload = (e) => {
                        imgEdit.src = e.target.result;
                    }
                    reader.readAsDataURL(fileImg);
                }
            }
        })

        //Khi bấm OK
        var buttonOK = $('#buttonOK');
        buttonOK.onclick = function (e) {

            TTSV = {
                Hovaten: $('#nameEdit').value,
                Namvaotruong: $('#time-enrollmentEdit').value,
                Bacdaotao: $('#education-levelEdit').value,
                Chuongtrinh: $('#programEdit').value,
                Khoa_Vienquanly: $('#departmentEdit').value,
                Tinhtranghoctap: $('#statusEdit').value,
                Gioitinh: gender(checkboxes),
                Lop: $('#classEdit').value,
                Khoahoc: $('#courseEdit').value,
                Email: $('#emailEdit').value
            }
            e.preventDefault();
            console.log("Thông tin sinh viên sau khi bấm OK:");
            console.log(TTSV);

            $('#name').innerHTML = TTSV.Hovaten
            $('#time-enrollment').innerHTML = TTSV.Namvaotruong
            $('#education-level').innerHTML = TTSV.Bacdaotao
            $('#program').innerHTML = TTSV.Chuongtrinh
            $('#department').innerHTML = TTSV.Khoa_Vienquanly
            $('#status').innerHTML = TTSV.Tinhtranghoctap
            $('#gender').innerHTML = TTSV.Gioitinh
            $('#class').innerHTML = TTSV.Lop
            $('#course').innerHTML = TTSV.Khoahoc
            $('#email').innerHTML = TTSV.Email

            imgEdited.src = imgEdit.src;

            contentEditing.classList.remove('apear');
            contentEdited.classList.remove('hide');
        }

        var buttonCancel = $('#buttonCancel');
        buttonCancel.onclick = function (e) {
            TTSV = {
                Hovaten: $('#name').innerText,
                Namvaotruong: $('#time-enrollment').innerText,
                Bacdaotao: $('#education-level').innerText,
                Chuongtrinh: $('#program').innerText,
                Khoa_Vienquanly: $('#department').innerText,
                Tinhtranghoctap: $('#status').innerText,
                Gioitinh: $('#gender').innerText,
                Lop: $('#class').innerText,
                Khoahoc: $('#course').innerText,
                Email: $('#email').innerText,
            }
            e.preventDefault();
            console.log("Thông tin sinh viên sau khi bấm Cancel:");
            console.log(TTSV);

            contentEditing.classList.remove('apear');
            contentEdited.classList.remove('hide');
        }

        var buttonReset = $('#buttonReset');
        buttonReset.onclick = function (e) {
            TTSV = {
                Hovaten: "Nguyễn Sơn Tùng",
                Namvaotruong: "2020",
                Bacdaotao: "Đại học đại trà",
                Chuongtrinh: "Kỹ thuật Máy tính 2020",
                Khoa_Vienquanly: "Trường Công nghệ Thông tin và Truyền thông",
                Tinhtranghoctap: "Học",
                Gioitinh: "Nam",
                Lop: "Kỹ thuật máy tính 02-K65",
                Khoahoc: "65",
                Email: "tung.ns204804@sis.hust.edu.vn"
            }
            e.preventDefault();
            console.log("Thông tin sinh viên sau khi bấm Reset:");
            console.log(TTSV);

            $('#name').innerHTML = TTSV.Hovaten
            $('#time-enrollment').innerHTML = TTSV.Namvaotruong
            $('#education-level').innerHTML = TTSV.Bacdaotao
            $('#program').innerHTML = TTSV.Chuongtrinh
            $('#department').innerHTML = TTSV.Khoa_Vienquanly
            $('#status').innerHTML = TTSV.Tinhtranghoctap
            $('#gender').innerHTML = TTSV.Gioitinh
            $('#class').innerHTML = TTSV.Lop
            $('#course').innerHTML = TTSV.Khoahoc
            $('#email').innerHTML = TTSV.Email

            imgEdited.setAttribute("src", "assets/img2.png");

            contentEditing.classList.remove('apear');
            contentEdited.classList.remove('hide');
        }

        // imgEdit.src = imgEdited.src;

        // imgInput.addEventListener('change', (event) => {
        //     if (event) {
        //         var fileImg = event.target.files[0];
        //         var reader = new FileReader();
        //         if (fileImg) {
        //             reader.onload = (e) => {
        //                 imgEdit.src = e.target.result;
        //             }
        //             reader.readAsDataURL(fileImg);
        //             buttonOK.onclick = () => {
        //                 e.preventDefault();
        //                 reader.onload = (e) => {
        //                     imgEdited.src = e.target.result;
        //                 }
        //                 reader.readAsDataURL(fileImg);
        //                 contentEditing.classList.remove('apear');
        //                 contentEdited.classList.remove('hide');
        //             }
        //         }
        //     }
        // })
    }
}
