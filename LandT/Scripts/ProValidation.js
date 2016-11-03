//Created By Vaseem For project Validation
//Aniket start 
function Setvalidations() {
    $(".OnlyFloat").focusout(function () {

        var vals = $(this).val();

        var con = 0;
        if (vals != "") {
            $(this).removeClass('error');
        }
        else {
            $(this).addClass('error');
            if ($(this).hasClass('val')) {

                // $(this).addClass('danger');
                var vals = $(this).val();
                if (vals != null) {

                    $(this).addClass('error');
                    $(this).attr('required', "required");
                    $(this).attr('style', " text-align:right; border:1px solid red ");
                    //$(this).val('');

                    var valid = $(this).attr('id');
                    if (valid != null) {
                        var newid = "spn" + valid;
                        $("#" + newid).addClass("fa fa-exclamation-circle errspan");
                    }

                }
            }
            con++;

        }

        $(this).tooltip('hide');
        $(this).attr('data-original-title', '');
        return false;

    });

    $(".OnlyFloat").focusin(function () {//zero-possible
        var msg = "Please enter Numeric value only";
        if ($(this).attr('readonly') == 'readonly') {
            return;
        }
        if ($(this).hasClass('OnlyFloat')) {
            msg = 'Please enter Numeric value only';
        }
        if ($(this).hasClass('error')) {
            if ($(this).hasClass('val')) {

                $(this).addClass('danger');
                var vals = $(this).val();
                if (vals != null) {

                    $(this).removeClass('error');
                    $(this).removeAttr('required', "required");
                    $(this).removeAttr('style', " text-align:right; border:1px solid red ");
                    //$(this).val('');

                    var valid = $(this).attr('id');
                    if (valid != null) {
                        //  var newid = valid.replace("txt", "spn");
                        var newid = "spn" + valid;
                        $("#" + newid).removeClass("fa fa-exclamation-circle errspan");
                    }
                    //return false;
                }
            }
            $(this).attr('data-toggle', 'tooltip');
            $(this).attr('title', msg);
            $(this).attr('data-original-title', msg);
            $(this).tooltip('show');
            var vals = $(this).val();
        }
    });

    $(".val").focusout(function () {

        var vals = $(this).val();

        var con = 0;
        if (vals != "") {

            $(this).removeClass('error');
            $(this).removeAttr('required', "required");
            $(this).removeAttr('style', " text-align:right;border:1px solid red ");
            //$(this).val('');

            var valid = $(this).attr('id');
            if (valid != null) {
                //    var newid = valid.replace("txt", "spn");
                var newid = "spn" + valid;
                $("#" + newid).removeClass("fa fa-exclamation-circle errspan");
            }

        }
        else {
            $(this).addClass('error');
            $(this).attr('required', "required");
            $(this).attr('style', " text-align:right; border:1px solid red ");
            //$(this).val('!');

            var valid = $(this).attr('id');
            if (valid != null) {
                //var newid = valid.replace("txt", "spn");
                var newid = "spn" + valid;
                $("#" + newid).addClass("fa fa-exclamation-circle errspan");
            }

            con++;

        }

        $(this).tooltip('hide');
        $(this).attr('data-original-title', '');
        return false;

    });

    $(".val").focusin(function () {//zero-possible
        var msg = "Mandetary feilds";

        if ($(this).hasClass('zero-possible')) {
            msg = 'Please enter Numeric value only';
        }
        if ($(this).hasClass('nigative-possible')) {
            msg = 'Please enter Numeric value only';
        }
        if ($(this).hasClass('val')) {
            msg = 'Please enter Numeric value only' // msg = 'Mandetary feilds';
        }
        if ($(this).hasClass('zero-possible')) {
            msg = 'Please enter Numeric value only';
        }
        if ($(this).hasClass('greater-than-zero')) {
            msg = 'Please enter Numeric value only';
        }

        if ($(this).hasClass('error')) {
            $(this).addClass('danger');
            $(this).attr('data-toggle', 'tooltip');
            $(this).attr('title', msg);
            $(this).attr('data-original-title', msg);
            $(this).tooltip('show');

            var vals = $(this).val();
            if (vals != null) {

                $(this).removeClass('error');
                $(this).removeAttr('required', "required");
                $(this).removeAttr('style', " text-align:right; border:1px solid red ");
                //$(this).val('');

                var valid = $(this).attr('id');
                if (valid != null) {
                    //  var newid = valid.replace("txt", "spn");
                    var newid = "spn" + valid;
                    $("#" + newid).removeClass("fa fa-exclamation-circle errspan");
                }
                //return false;
            }

        }
    });

    $('.val1').focusin(function () {
        var vals = $(this).val();
        if (vals != null) {

            $(this).removeClass('error');
            $(this).removeAttr('required', "required");
            $(this).removeAttr('style', " text-align:right; border:1px solid red ");
            //$(this).val('');

            var valid = $(this).attr('id');
            if (valid != null) {
                //  var newid = valid.replace("txt", "spn");
                var newid = "spn" + valid;
                $("#" + newid).removeClass("fa fa-exclamation-circle errspan");
            }
        }
    });

    $(".val1").focusout(function () {

        var vals = $(this).val();

        var con = 0;
        if (vals != "") {

            $(this).removeClass('error');
            $(this).removeAttr('required', "required");
            $(this).removeAttr('style', " text-align:right;border:1px solid red ");
            //$(this).val('');

            var valid = $(this).attr('id');
            if (valid != null) {
                //    var newid = valid.replace("txt", "spn");
                var newid = "spn" + valid;
                $("#" + newid).removeClass("fa fa-exclamation-circle errspan");
            }

        }
        else {
            $(this).addClass('error');
            $(this).attr('required', "required");
            $(this).attr('style', " text-align:right; border:1px solid red ");
            //$(this).val('!');

            var valid = $(this).attr('id');
            if (valid != null) {
                //var newid = valid.replace("txt", "spn");
                var newid = "spn" + valid;
                $("#" + newid).addClass("fa fa-exclamation-circle errspan");
            }

            con++;

        }

        $(this).tooltip('hide');
        $(this).attr('data-original-title', '');
        return false;

    });

    var regexp = /[^a-zA-Z]/g;
    var email = /^[\w\-\.\+]+\@@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    var age = /^([0-9]{2})/;
    var mobile1 = /^[7-9][0-9]{9}$/;
    var charnum = /[^a-zA-Z0-9\-\s]/g;
    var Number = /[^0-9\.]/g// /^\d*(\.\d{1})?\d{0,1}$/;//  /[^0-9\.]/g;// /^[-+][0-9]+\.[0-9]+[eE][-+]?[0-9]+$////(?=[^\0])(?=^([0-9]+){0,1}(\.[0-9]{1,2}){0,1}$);///[^0-9\.{0,1}\d+]/g;///[0-9]\d*\.{0,1}\d+$/;
    var NumberNumeric = /[^0-9]/g;
    var NumberNigative = /[^0-9\.\-]/g;
    var zerotoone = /[^0-1\.]/g;
    var GreterthanZero = /[^0-9\.]/g;
    var specialKeys = new Array();
    specialKeys.push(8); //Backspace
    ///specialKeys.push(110);

    function validateDecimal(value) {

        //  var RE = /^\d*\.?\d*$/;
        var RE = /^\d*(\.\d{1})?\d{0,1}$/;
        if (RE.test(value)) {
            return true;
        } else {
            return false;
        }
    }

    $(".zero-possible").each(function () {

        $(this).keypress(function (e) {
            var keyCode = e.which ? e.which : e.keyCode
            if ($(this).val().split('.').length == 2 && (keyCode == 46)) {
                return false;
            }
            var ret = (((keyCode >= 48 && keyCode <= 57) || (keyCode == 46)) || specialKeys.indexOf(keyCode) != -1);
            return ret;
        });

        //$(this).keyup(function () {
        //    $(this).attr('title', '');


        //    if (!($(this).val().match(Number)) && $(this).val() != null) {
        //        //$(this).tooltip('hide');
        //        //$(this).attr('data-original-title', '');
        //        return false;
        //    }
        //    else {
        //        $(this).addClass('danger');
        //        $(this).attr('data-toggle', 'tooltip');
        //        //$(this).attr('title', 'Please enter Numeric value only');
        //        //$(this).attr('data-original-title', 'Please enter Numeric value only');
        //        // $(this).tooltip('show');
        //        $(this).val($(this).val().replace(Number, ''));
        //        return false;
        //    }
        //});
        //  $(this).keyup(function () {
        // if (this.id == "NozzleName") {

        //$(this).keyup(function () { //$(this).focusout(function () { $(this).keypress (function () {
        //    var str = $(this).val();
        //    //if (!$.isNumeric(str)) {
        //    //    return false;
        //    //}
        //    //if ($.isNumeric(str))
        //    //{
        //        //alert("isNumeric " + str);


        //        $(this).attr('title', '');

        //        //if (!(((str.split('.').length - 1) <= 1)) == true) {
        //        //    //$(this).val($(this).val().replace(Number, ''));
        //        //     //alert("result ");
        //        //    return false;
        //        //}
        //        // alert("result " + Number.test($(this).val()));//(!($(this).val().match(Number)) && $(this).val() != null));
        //        //  alert("this.value" + $(this).val());
        //        //  alert("Number " + Number);

        //        if (($(this).val().match(Number)) && $(this).val() != null) {//( ($(this).val().match(Number)) && $(this).val() != null) { ((Number.test($(this).val())) && $(this).val() != null) {

        //            return false;
        //        }
        //        else {
        //            $(this).addClass('danger');
        //            $(this).attr('data-toggle', 'tooltip');
        //            $(this).val($(this).val().replace(Number, ''));
        //            return false;
        //        }
        //     //   return true;
        //    //}
        //    //else { return false; }
        //});
        //  }
    });

    $(".Only-Digit").each(function () {

        $(this).keypress(function (e) {
            var keyCode = e.which ? e.which : e.keyCode

            var ret = (((keyCode >= 48 && keyCode <= 57)));
            return ret;
        });
    });

    $(".Float").bind("keypress", function (e) {

        var keyCode = e.which ? e.which : e.keyCode
        if ($(this).val().split('.').length == 2 && (keyCode == 46)) {
            return false;
        }
        var str = $(this).val();
        var res = str.charAt(0)
        //if (res == "-") {

        //    return false;
        //}
        if (((keyCode >= 48 && keyCode <= 57) || (keyCode == 46) || (keyCode == 45)) || specialKeys.indexOf(keyCode) != -1) {
            var ret = (((keyCode >= 48 && keyCode <= 57) || (keyCode == 46) || (keyCode == 45)) || specialKeys.indexOf(keyCode) != -1);
            return ret;
        }
        else {

            $(this).addClass('danger');
            $(this).attr('data-toggle', 'tooltip');
            $(this).attr('data-original-title', 'Please enter Numeric value only');
            $(this).tooltip('show');
            return false;
        }
    });

    $(".greater-than-or-equal-zero").bind("keypress", function (e) {
        //alert('asds');
        debugger;
        var keyCode = e.which ? e.which : e.keyCode
        if ($(this).val().split('.').length == 2 && (keyCode == 46)) {
            return false;
        }
        if (((keyCode >= 48 && keyCode <= 57) || (keyCode == 46)) || specialKeys.indexOf(keyCode) != -1) {
            var ret = (((keyCode >= 48 && keyCode <= 57) || (keyCode == 46)) || specialKeys.indexOf(keyCode) != -1);
            return ret;
        }
        else {

            $(this).addClass('danger');
            $(this).attr('data-toggle', 'tooltip');
            $(this).attr('data-original-title', 'Please enter Numeric value only');
            $(this).tooltip('show');
            return false;
        }

    });

    //$(".greater-than-zero").each(function () {
    //    alert('131');
    //    var vals = $(this).val();
    //    $(this).keyup(function (e) {

    //        $(this).attr('title', '');
    //        var keyCode = e.which ? e.which : e.keyCode
    //        if ($(this).val().split('.').length == 2 && (keyCode == 46)) {
    //            return false;
    //        }
    //        if (!($(this).val().match(GreterthanZero)) && $(this).val() != null) {
    //            return false;
    //        }
    //        else {
    //            $(this).addClass('danger');
    //            $(this).attr('data-toggle', 'tooltip');
    //            $(this).attr('data-original-title', 'Please enter Numeric value only');
    //            $(this).tooltip('show');
    //            $(this).val($(this).val().replace(GreterthanZero, ''));
    //            return false;
    //        }
    //    });

    //    if (vals > 0) {
    //        return false;
    //    } else {
    //        $(this).val($(this).val().replace(vals, ''));
    //        return false;
    //    }
    //});

    //$(".greater-than-zero").bind("keypress", function (e) {

    //    var keyCode = e.which ? e.which : e.keyCode
    //    if ($(this).val().split('.').length == 2 && (keyCode == 46)) {
    //        return false;
    //    }
    //    var str = $(this).val();
    //    var res = str.charAt(0)
    //    //if (res == "-") {

    //    //    return false;
    //    //}
    //    var ret = (((keyCode >= 48 && keyCode <= 57) || (keyCode == 46)  ) || specialKeys.indexOf(keyCode) != -1);
    //    return ret;
    //});

    $(".greater-than-zero").focusout(function () {
        debugger;
        $(this).keyup(function (e) {

            $(this).attr('title', '');
            var keyCode = e.which ? e.which : e.keyCode
            if ($(this).val().split('.').length == 2 && (keyCode == 46)) {
                return false;
            }
            if (!($(this).val().match(GreterthanZero)) && $(this).val() != null) {
                return false;
            }
            else {
                $(this).addClass('danger');
                $(this).attr('data-toggle', 'tooltip');
                $(this).attr('data-original-title', 'Please enter Numeric value only');
                $(this).tooltip('show');
                $(this).val($(this).val().replace(GreterthanZero, ''));
                return false;
            }
        });
        var vals = $(this).val();
        if (vals > 0) {
            return false;
        } else {
            $(this).val($(this).val().replace(vals, ''));
            //$(this).addClass('error');
            $(this).attr('required', "required");
            $(this).attr('style', " text-align:right; border:1px solid red ");
            //$(this).val('!');

            var valid = $(this).attr('id');
            if (valid != null) {
                //var newid = valid.replace("txt", "spn");
                var newid = "spn" + valid;
                $("#" + newid).addClass("fa fa-exclamation-circle errspan");
            }
            return false;
        }
    });

    $(".greater-than-zero").focusin(function () {
        debugger;
        $(this).keyup(function (e) {

            $(this).attr('title', '');
            var keyCode = e.which ? e.which : e.keyCode
            if ($(this).val().split('.').length == 2 && (keyCode == 46)) {
                return false;
            }
            if (!($(this).val().match(GreterthanZero)) && $(this).val() != null) {
                return false;
            }
            else {
                $(this).addClass('danger');
                $(this).attr('data-toggle', 'tooltip');
                $(this).attr('data-original-title', 'Please enter Numeric value only');
                $(this).tooltip('show');
                $(this).val($(this).val().replace(GreterthanZero, ''));
                return false;
            }
        });
        var vals = $(this).val();
        if (vals > 0) {
            return false;
        } else {
            $(this).val($(this).val().replace(vals, ''));
            return false;
        }
    });

    $(".val").bind("paste", function (e) {
        return false;
    });

    $(".val").bind("drop", function (e) {
        return false;
    });

    $(".zero-possible").bind("paste", function (e) {
        return false;
    });

    $(".zero-possible").bind("drop", function (e) {
        return false;
    });

    $(".greater-than-zero").bind("paste", function (e) {
        return false;
    });

    $(".greater-than-zero").bind("drop", function (e) {
        return false;
    });

    $(".Float").bind("paste", function (e) {
        return false;
    });

    $(".Float").bind("drop", function (e) {
        return false;
    });

    $(".Only-Digit").bind("paste", function (e) {
        return false;
    });

    $(".Only-Digit").bind("drop", function (e) {
        return false;
    });
    $(".alfa-numeric").each(function () {

        $(this).keyup(function () {
            $(this).attr('title', '');


            if (!($(this).val().match(charnum)) && $(this).val() != null) {
                $(this).tooltip('hide');
                $(this).attr('data-original-title', '');
                return false;
            }
            else {
                $(this).addClass('danger');
                $(this).attr('data-toggle', 'tooltip');
                $(this).attr('title', 'Please enter Numeric value only');
                $(this).attr('data-original-title', 'Please enter Numeric value only');
                $(this).tooltip('show');
                $(this).val($(this).val().replace(charnum, ''));
                return false;
            }
        });
    });

    $(".Numericzero-possible").each(function () {

        $(this).keyup(function () {
            $(this).attr('title', '');


            if (!($(this).val().match(NumberNumeric)) && $(this).val() != null) {
                $(this).tooltip('hide');
                $(this).attr('data-original-title', '');
                return false;
            }
            else {
                $(this).addClass('danger');
                $(this).attr('data-toggle', 'tooltip');
                $(this).attr('title', 'Please enter Numeric value only');
                $(this).attr('data-original-title', 'Please enter Numeric value only');
                $(this).tooltip('show');
                $(this).val($(this).val().replace(NumberNumeric, ''));
                return false;
            }
        });
    });


}
function SetValForAll() {
    $(".val").each(function () {
        var vals = $(this).val();
        //alert($(this).id)
        var con = 0;
        if (vals != "") {
            $(this).removeClass('error');
            $(this).removeAttr('required', "required");
            $(this).removeAttr('style', " text-align:right;border:1px solid red ");

            var valid = $(this).attr('id');
            if (valid != null) {
                var newid = "spn" + valid;
                $("#" + newid).removeClass("fa fa-exclamation-circle errspan");
            }
        }
        else {
            $(this).addClass('error');
            $(this).attr('required', "required");
            $(this).attr('style', " text-align:right; border:1px solid red ");
            var valid = $(this).attr('id');
            if (valid != null) {
                var newid = "spn" + valid;
                $("#" + newid).addClass("fa fa-exclamation-circle errspan");
            }
            con++;
        }
        $(this).tooltip('hide');
        $(this).attr('data-original-title', '');
        // return false;

    });
}

