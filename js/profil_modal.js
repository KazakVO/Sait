$(document).ready(function () {
// view_flats -> add_foto
// viewFlatsBtn
  var modal = $('.modal');
  var modalCloseBtn = $('.modal__close_btn');
  var viewAddFoto = $('.add_foto');

  //при клике на modal__close_btn модальное окно закрывается
  modalCloseBtn.on("click", toggleModal);

  //при клике на кнопку "add_foto" открывается модальное окно
  viewAddFoto.on("click", toggleModal);

  function toggleModal() {
    modal.toggleClass("modal__is_open");
  };

  var _validFileExtensions = [".jpg", ".jpeg", ".bmp", ".gif", ".png"];
function Validate(oForm) {
var arrInputs = oForm.getElementsByTagName("input");
for (var i = 0; i < arrInputs.length; i++) {
var oInput = arrInputs[i];
if (oInput.type == "file") {
var sFileName = oInput.value;
if (sFileName.length > 0) {
var blnValid = false;
for (var j = 0; j < _validFileExtensions.length; j++) {
var sCurExtension = _validFileExtensions[j];
if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase() == sCurExtension.toLowerCase()) {
blnValid = true;
break;
}
}

if (!blnValid) {
alert("Sorry, " + sFileName + " is invalid, allowed extensions are: " + _validFileExtensions.join(", "));
return false;
}
}
}
}

return true;
}

  // var modal_1 = $('.modal_1');
  // var modalCloseBtn_1 = $('.modal__close_btn_1');
  // var openFoto_1 = $('.open__foto_1');

  // modalCloseBtn_1.on("click", toggleModal);
  // openFoto_1.on("click", toggleModal);
  // function toggleModal() {
  //   modal_1.toggleClass("modal_1__is_open");
  // };

});
$(document).ready(function () {
    var modal_1 = $('.modal_1');
    var modalCloseBtn_1 = $('.modal__close_btn_1');
    var openFoto_1 = $('.open__foto_1');

    modalCloseBtn_1.on("click", toggleModal);
    openFoto_1.on("click", toggleModal);
    function toggleModal() {
      modal_1.toggleClass("modal_1__is_open");
    };
  });
