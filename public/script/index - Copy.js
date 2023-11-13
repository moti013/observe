

var app = document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1;
Date.now = Date.now || function () { return +new Date; };
var storage = window.localStorage;
var userIndex = 0;

var imageArray = [];
var selectedObjArr;
var currentChangeImageIndex;
var qs = location.pathname;
qs = qs.trim();
var mainIndex = 0;
var host = "https://" + location.host + "/";    //local hos
var canYouSendOk = true;
var editMode = false;
var editModeObject;

var mainArr = [];
var userName = "משה לוי";
var userEmail = "davidyerakot@gmail.com";
var userArr = [];
var mainIndexuestion;
var tryingToReconnect;
var colorInter;
var dotArr = [];
var mainArrImageName = [];
var colArr = ["red", "blue", "pink", "green", "yellow",
    "gray", "coral", "Violet", "cyan", "Brown", "Navy", "olive", "SkyBlue"];

var numArr = ["ראשונה", "שניה", "שלישית", "רביעית", "חמישית", "שישית"]



var tap = 0;

var senArr = [];
var chosenSen = 0;
var isCameraBlock = true;
var waitingTime = 3000;




var mainId = "0000";
var canChoose = true;
var dataFolder;
var scale;

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    url = url.toLowerCase();
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
var tt = 'type'.toLowerCase()
mainId = getParameterByName(tt);

if (mainId == null) {
    
    mainId = "0000";
}






var sourcePathXml;  

$(document).ready(function () {
    //var design = getParameterByName("design");
   
    //if (design == "2") {
    //    design2();
    //}
    $("input").on("keypress", function (event) {
        if (event.keyCode == 13) {
            $("input").blur();
        }
    })
    var arr1 = [];

    function design2() {

        $("#boxCon8").css("border-color", "#94ac8d");
        $("#tatKot").css("color", "#E6DFCB");
        $(".imgBox").css("border-color", "#94ac8d");
        $("div").each(function () {

            if ($(this).css('background-image') != 'none') {
                var t = $(this).css("background-image");
                var b = $(this).attr("id");
                // bg = t.replace('url(', '').replace(')', '').replace(/\"/gi, "");
                t = t.replace("/images/", "/images/images2/")
                $(this).css("background-image", t);

            }

        })
    }
    
    getGameData(mainId);
   // dataFolder = 0;
   // sourcePathXml = host + "mahut2/appMahutData" + dataFolder + "/myXml.xml?" + Date.now();

   // callXml();
    //$("*").each(function () {
    //    var $this = $(this);
    //    if (parseInt($this.css("fontSize")) < 12) {
    //        $this.css({ "font-size": "14px" });
    //    }
    //});

    var maxWidth = $('#boxCon8').width();
    var maxHeight = $('#boxCon8').height();

    $(window).resize(function (evt) {
        setSize();

    });

    function setSize() {

      //let vh = window.innerHeight * 0.01;
       // document.documentElement.style.setProperty('--vh', `${vh}px`); 
       // document.body.style.height = window.innerHeight + "px";
        var maxWidth = $('#boxCon8').width();
        var maxHeight = $('#boxCon8').height();
        var $window = $(window);
        var width = $('#canvasCon').width();
        var height = $('#canvasCon').height();
        var scale;

        // early exit
        if (height >= width - 100) {
            $("#screen100").show();
            $("#screen100").css("display", "flex");
            console.log("1000000000");
            return;
        }

        else {
          
            $("#screen100").hide();

        }
      // = height / (maxHeight);
        

        scale = Math.min(width / (maxWidth + 200), height / (maxHeight + 350));
       
        $('#boxCon8').css({ 'zoom': scale });
        if (height < 600) {
            var maxWidth2 = $('#cameraCon').width();
            var maxHeight2 = $('#cameraCon').height();
            scale = Math.min(width / (maxWidth2), height / (maxHeight2 + 300));

            $('#cameraCon').css({ 'zoom': scale });
            $('#cameraBorder').css({ 'zoom': scale });
        }
        else {
            $('#cameraCon').css({ 'zoom': 1 });
            $('#cameraBorder').css({ 'zoom': 1 })

        }

    }

    window.scrollTo(0, 0);
    $('body').scrollTop(0);
    var btLike = $("#btLike");
    var mesCon = $("#mesCon");

    //  $("#btEnd").hide();

    //----------- setting----------------------------------
    $("#btDoneReflect").hide();



    showScreen(0);

    setBtLike();

    


    function starTheGame() {
     
        showScreen(0);
      
        setSize();
     // editMode = true;
    // mainIndex = 4;
     //makeQ();
        // editMode = true;
      //  makeQ();
        //  showExplain(0);

   //showScreen(3);
     //  makeQPreview()
        // makeQtempalte();
        //setTimeout(function () { insertQ(); }, 100)
        // end();

    }




    //allbt
   

    $("#canvasConmainImage").on("click", function () {

        editMode = true;
        if (editMode) {
            $("#btCamBtCon").hide();
            $("#btCameraSnap").show();
            $('#camRes').hide();
            $('#camRes').empty();
            $("#btCamBtCon").hide();
            $("#btCameraSnap").show();
            showScreen(4);
        }

    })

    $("#btEnd").on("click", function () {
        $('#boxCon8').css({ 'zoom': 1 });
        setTimeout(function () {
            saveToImageMain();
        }, 500)
       
        var type10 = 'Hashraha  end ' + mainId + "  "+dataFolder;
        gtag('event', 'click', { 'event_category': type10, 'event_label': 'conversion' });
        //  showExplain(4);


    })
    $("#btStart").on("click", function () {

        //showScreen(1);
        showExplain(0);
        var type10 = 'Hashraha  start  ' + mainId + "  " + dataFolder;
        gtag('event', 'click', { 'event_category': type10, 'event_label': 'conversion' });

    })
    $("#btEx0").on("click", function () {
        //camera
       
        showScreen(1);

    })

    $("#btEx1").on("click", function () {
        //camera

        showScreen(4);

    })

    $("#q10").on("click", function () {
        isHelp = true;
        showExplain(1);
    })

    $("#btEx2").on("click", function () {
        //bg select
        //  showScreen(3);
        if (isHelp) {
            showScreen(2);
        }
        else {
            makeQPreview();
        }
        
        

    })
    var isHelp = false;
    $("#btEx3").on("click", function () {
        //bg select
        showScreen(3);

    })

    //$("#btEx4").on("click", function () {
    //    //bg select
    //    showScreen(3);

    //})

    $("#btBgNext").on("click", function () {
        //bg select
        showExplain(2)

    })

    $("#btName").on('click', function (e) {

        var t = $("#txtName").val();
        if (t.length > 0) {
            userName = $.trim(t);
            $("#myUserName").text(userName);
            var isneedMail = $("#isNeedEmail").prop("checked");
            if (isneedMail == true) {
                camera1();
                showScreen(4);
                return;
            }
           
            if (checkMail() ) {
                camera1();
                showScreen(4);
            }

        }
        else {
           // showMes("יש להזין שם");
            alert("יש להזין שם");
        }
    });
    //makebgCon();

    function checkMail() {
        var t = $("#txtEmail").val();
        if (t.length > 0) {
            userEmail = $.trim(t);
            if (validateEmail(userEmail)) {
                return true;
            }
            else {
                alert("כתובת מייל לא תקינה");
                return false;
            }

        }
        else {
            alert("יש להוסיף אי מייל")
        }
    }
    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    function makebgCon() {

        var mainCon1 = $("#bgCon");
        for (let i = 0; i < 3; i++) {

            var div = $("<div/>");
            div.appendTo(mainCon1);
            div.addClass("bgConClass");
            var img = $("<img/>");
            img.appendTo(div);
         //   var str = host + "mahut2/images/bg/bg" + i + ".png";
           // console.log(str);
           // img.attr("src", str);

            div.on("click", function () {

                var path = $(this).find("img").attr("src");
                console.log(path);
                $("#box9").css("background-image", "url(" + path + ")");
            })

        }
    }
    function showMes(str) {
        mesCon.show();
        mesCon.html(str);
    }


    function getRnd(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function makeFinal() {
        showScreen(5);
        var str = "נתראה בקרוב";
        $("#per2").show();
        $("#per1").hide();
        $("#per1").fadeOut(300);
        $("#theMainQ").html(str);
        $("#theMainQ2").html(str);
        $("#per1").removeClass("fade");
        $("#per1").addClass("fade");

    }
    function makeQPreview() {
        showScreen(5);


        $(".more100").hide();
       // $("#quCon1").css("flex-direction", "row");
        if (mainArr[mainIndex].ImageLimit == 1) {

            $(".more100").show();
          //  $("#quCon1").css("flex-direction", "column");
        }


        $(".boxCon").scrollLeft(0);
        if (mainIndex == 0) {
            $("#per1").show();
            $("#per2").hide();
            setTimeout(function () {
                $("#per2").show();
                $("#per1").fadeOut(300);
                $("#per2").removeClass("fade");
                $("#per2").addClass("fade");
                setTimeout(function () { makeQ() }, waitingTime);
            }, 2000)
        }
        else {
            $("#per2").show();
            $("#per1").hide();
            $("#per2").show();
            $("#per1").fadeOut(300);
            $("#per2").removeClass("fade");
            $("#per2").addClass("fade");
            setTimeout(function () { makeQ() }, waitingTime);

        }


        var str = mainArr[mainIndex].Qu;
        $("#theMainQ").html(str);
        $("#theMainQ2").html(str);
        $("#per1").removeClass("fade");
        $("#per1").addClass("fade");




    }

    $("#btGo").on("click", function () {

        var t = $(".boxCon").width();
        var c = $("#boxConId" + mainIndex);
        var y = c.scrollLeft();
        var t2 = c.find(".box1").width();
        var t3 = y + (t2 * 2)
        //tempCon.scrollLeft()
        c.animate({
            scrollLeft: t3 
        }, "slow");

    });
    $("#btGo2").on("click", function () {
        var c = $("#boxConId" + mainIndex);
        var y = c.scrollLeft();
        var t2 = c.find(".box1").width();
        var t3 = y - (t2*2);
        var t = $(".conBox").width();
        c.animate({
            scrollLeft: t3
        }, "slow");

    });
    function makeQ() {
        
        $(".more99").hide();
        $("#quCon1").css("flex-direction", "row");
        if (mainArr[mainIndex].ImageLimit == 1) {
         
            $(".more99").show();
            $("#quCon1").css("flex-direction", "column");
        }
       
        var str = mainArr[mainIndex].Qu;
        $("#theMainQ").html(str);
        $("#theMainQ2").html(str);

        showScreen(2);
        $(".boxCon").hide();

        $("#boxConId" + mainIndex).show();
        //  btLike.css("background-color", "rgba(00,250,0,0.5)");
        $(".box1").css("width", "30vh");
        if (mainArr[mainIndex].ImageLimit == 1) {
            $(".box1").css("width", "60vh");
        }
        canChoose = true;
    }

    function startOver() {
        buildTable();
    }

    function makeNext() {
        $(".more100").hide();
        mainIndex += 1;
        if (mainIndex < mainArr.length) {
            makeQPreview();
        }
        else {
            showExplain(2);
            // $("#btEnd").show();
            $(".box3").parent().find(".boxCover").hide();
            editMode = true;


        }
    }





    function showExplain(explainIndex) {
        showScreen(10);
        var cons = $("#screen10 .explainCon");
        cons.hide();
        $(cons[explainIndex]).show();
    }

    function showScreen(stat) {
        $("[id*='screen']").hide();
        $("#screen" + stat).show();
        $("[id*='screen']").removeClass("fade");
        $("#screen" + stat).addClass("fade");


        if (stat == 3) {

            $("#logo4").hide();
            //  $("#btEnd").show();
            $("#cover1").hide()
        }
        else {
            $("#logo4").show();
            $("#cover1").show()

        }
        if (stat == 0) { $("#logo4").hide() }

        // $("[id*='screen']").css("z-index", "10");
        //  $("#screen3").css("z-index", "9000");
        // $("#screen" + stat).css("z-index", "9001");
        mesCon.hide();
    }

    function tryParseJSON(jsonString) {
        try {
            var o = JSON.parse(jsonString);
            if (o && typeof o === "object") {
                return o;
            }
        }
        catch (e) { }

        return false;
    };


    function callXml() {

      
        $.ajax({
            type: "GET",
            url: sourcePathXml,
            dataType: "xml",
            success: function (xml) {

                setMainArr(xml);

            },
            //other code
            error: function (e) {
                alert(e + "The XML File could not be processed correctly.");
            }


        });
    }
    function setMainArr(xml) {

        mainArr = [];
        try {
            $(xml).find('group').each(function (index) {

                var xml = $(this);
                var mis = new Object();

                mis.Id = xml.attr('id');
                mis.Qu = xml.find('qu').text();
                mis.Qu1 = xml.find('qu1').text();
                mis.ImageLimit = 2;
                var theLimit = xml.find('limit').text();
              
                if (!theLimit) {
                    //#myElementID element DOES NOT exist
                    theLimit = 2;
                }
               
               
                if (theLimit == 1) {
                    mis.ImageLimit = 1;
                    
                    $(".imgBoxCon" + mis.Id + "-2").remove();
                  
                }

                if (theLimit == 2) {
                    $(".imgBoxCon" + mis.Id + "-1").remove();
                   
                }
               
                mis.Text1 = xml.find('text1').text();
                //console.log(mis);
                mainArr.push(mis);

            });

            console.log(mainArr);
            var kotText = $(xml).find('kot').text();
            $("#tatKot").text(kotText);
            var openText = $(xml).find('openText').text();
            $("#openText").html(openText);
            read22();




        }
        catch (err) {
            alert(err.message)
        }


    }

   

    function reset_animation(el) {

        el.css("animation", 'none');
        el.css("animation", 'null');


    }





    function saveToImageMain() {
        var t = $("#boxCon8");
        var imgString;



        ////sendFile(imgStr);


        // $('#boxCon8').css({ 'zoom': 1});
        window.scrollTo(0, 0);

        html2canvas(t[0],
            {
                scrollY: 00,
                width: 1920,
                height: 1080,
                scale: 1,
                scrollX: 0,



                useCORS: true
            }).then(canvas => {

                imgString = canvas.toDataURL("image/jpeg");

                // // sendFile2(imgString);

                var a = document.createElement('a');
                a.href = imgString;
                a.download = "image.png";
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);


                var imgStr = imgString.replace(/^data:image\/jpeg;base64,/, '');
                makeFinal();
                sendFile(imgStr);
                $('#boxCon8').css({ 'zoom': scale });
            });
        // $("#canvasCon").hide();


    }




    function getRand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function drawImageScaled(img, ctx) {
        var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.min(hRatio, vRatio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
        // ctx.clearRect(0,0,canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, img.width, img.height,
            centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
    }


    function buildTable() {
        console.log("1111111111111111", mainArrImageName);
        var mainQbox = $("#mainQbox");
        mainQbox.empty();
        selectedObjArr = [];

        for (let i = 0; i < mainArr.length; i++) {
           
            //settetxt
            var temp = mainArr[i].Qu1;
            $("#txt" + i).html(temp);

            var boxCon = $("<div/>");
            boxCon.addClass("boxCon");
            boxCon.data("index", i);
            boxCon.data("imageLimit", mainArr[i].ImageLimit);
           
            boxCon.attr("id", "boxConId" + i);
            boxCon.appendTo(mainQbox);
            var newArr = [];
            selectedObjArr.push(newArr);

            for (let i2 = 0; i2 < mainArrImageName[i].length; i2++) {
                var box1 = $("<div/>");
                box1.addClass("box1");
                box1.attr("id", "box" + i + "-" + i2);
                box1.appendTo(boxCon);
                box1.data("isSelect", false);


                box1.on("click", function () {
                    var imageLimit = $(this).parent().data("imageLimit");
                   
                    if (editMode == false) {


                     
                        if ($(this).data("isSelect") == false) {
                            if (checkLimit() < imageLimit) {
                                $(this).data("isSelect", true);
                                $(this).find(".boxCover").show();
                            }

                        }
                        else {
                            $(this).find(".boxCover").hide();
                            $(this).data("isSelect", false);

                        }






                    }
                    if (editMode) {
                        var img1 = $(this).find("img");

                        var img = $("</img>");
                        var img = img1.clone();
                        editModeObject.empty();
                        img.appendTo(editModeObject);

                        showScreen(3);

                    }
                });


                var img = new Image()
                var imgPath = mainArrImageName[i][i2];

                img.src = imgPath + "?" + Date.now;

                $(img).appendTo(box1);
                img.onload = function () {

                    imageArray.push(this);
                }
                img.onerror = function (e) { console.log(e.message) }

                box1.data("id", i + "-" + mainArrImageName[i][i2]);

                //// //make text box
                //// var box3 = $("<div/>");
                //// box3.addClass("box3");
                ////// box3.appendTo(box1);
                //// box3.text("box" + i + "-" + i2);

                var boxCover = $("<div/>");
                boxCover.addClass("boxCover");
                boxCover.appendTo(box1);
            }

        }
        //-------------------------------------------------------------------------------
        showScreen(0);




    }

    function checkLimit() {
        var count = 0;
        var boxconArr = $("#boxConId" + mainIndex).find(".box1");
        var myArray = $.map(boxconArr, function (element) {
            if ($(element).data("isSelect") == true) {
                count += 1;
                return element;
            }
        });

        return count;
    }

    

    function getPic() {

        var boxconArr = $("#boxConId" + mainIndex).find(".box1");

        var selectedImg = [];
        for (let i = 0; i < boxconArr.length; i++) {
            var t = $(boxconArr[i]);
            if (t.data("isSelect") == true) {

                var img1 = t.find("img");

                var img = $("</img>");
                var img = img1.clone();
                //img.appendTo($("#boxConId" + mainIndex));
                selectedImg.push(img);

            }

        }

        addimg2(mainIndex, selectedImg);

    }
    setEditMode();
    function setEditMode() {

        var arr = $(".imgBox");

        for (let i = 0; i < arr.length; i++) {
            var t = $(arr[i]);
            t.on("click", function () {
                if (editMode) {
                    var e = $(this).parent().data("id");
                    mainIndex = parseInt(e);
                  
                    makeQ();
                    editModeObject = $(this);
                }

            })
        }
    }

    function addimg2(mainIndex, selectedImg) {

        var imgArr = $("#imgBoxCon" + mainIndex).find(".imgBox");

        for (let i = 0; i < imgArr.length; i++) {
            var t = $(imgArr[i]);
            $(selectedImg[i]).empty();
            $(selectedImg[i]).appendTo(t);

        }




    }
    function setBtLike() {

        btLike.on("click", function () {

            if (editMode) {
                showScreen(3);

            }
            else {
                var count = checkLimit();
                var ImageLimit = mainArr[mainIndex].ImageLimit;
                var text1 = " יש לבחור  ";
                if (ImageLimit != 1) {
                    text1 += ImageLimit + " תמונות ";
                }
                else {
                    text1="יש לבחור תמונה"
                }

                if (count == ImageLimit) {
                    getPic();
                    // $(this).css("background-color", "rgba(250,0,0,0.5)");
                    makeNext();
                }
                else {
                    alert(text1);
                }
            }



        })

    }



    function camera1() {

        var w1 = $("#cameraCon2").width();
        var h1 = $("#cameraCon2").height();

        Webcam.set({
            // live preview size
            width: 480,
            height: 360,

            // device capture size
            //dest_width: 300,
            //dest_height: 400,

            // final cropped size
            crop_width: 300,
            crop_height: 300,

            // format and quality
            image_format: 'jpeg',
            jpeg_quality: 100
        });

        ////Webcam.on('load', function () {
        ////    // library is loaded
        ////});

        Webcam.on('live', function () {
            isCameraBlock = false;
        });



        Webcam.on('error', function (err) {
            askForPer();
            if (err == "NotAllowedError: Permission denied") {
                isCameraBlock = true;
                alert("     יש לתת לאתר הרשאה לצילום. להרשאה: לחצו על איקון המצלמה. האיקון נמצא ליד כתובת האתר");
            }
        });
        Webcam.attach('#my_camera');

        setCameraBt();

        var vid = $("#my_camera").find("video");
        vid.css("right", "-90px");
        vid.css("top", "-30px");
        $('#camRes').hide();
        function setCameraBt() {
            $("#btCamBtCon").hide();
            $("#btCameraSnap").show();
            $("#btCamYes").on("click", function () {
                if (editMode) {
                    showScreen(3);
                }

                else {
                    $('#camRes').show();
                    showExplain(1);
                }
                // showScreen(3);


            })


            $("#btCamNo").on("click", function () {
                $('#camRes').hide();
                $('#camRes').empty();
                $("#btCamBtCon").hide();
                $("#btCameraSnap").show();
            })
            $("#btCameraSnap").on("click", function () {

                if (isCameraBlock == false) {

                    take_snapshot();
                    $("#btCamBtCon").show();
                    $("#btCameraSnap").hide();
                }
                else {
                    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);


                    if (confirm(' להמשיך בלי תמונה לחצו ok להפעלת מצלמה לחצו cancel ובמסך הבחירה לחצו על איקון המצלמה. האיקון נמצא ליד כתובת האתר')) {
                        $("#btCamYes").click();
                        console.log('Thing was saved to the database.');
                    } else {
                        if (isSafari) {
                            camera1();
                        }

                        else {
                            askForPer();

                        }
                        console.log('Thing was not saved to the database.');
                    }
                }
            })
        }



        function take_snapshot() {

            // take snapshot and get image data
            Webcam.snap(function (data_uri) {
                $('#camRes').show();
                $('#camRes').html(
                    '<img src="' + data_uri + '"/>');
                $('#canvasConmainImage').html(
                    '<img src="' + data_uri + '"/>');

                // makeQPreview();
            });


        }



    }

    function askForPer() {
        ////navigator.permissions.query({ name: 'camera' }).then(function (result) {
        ////    console.log(result);
        ////});

        ////navigator.webkitGetUserMedia({ "video": true }, function (stream) {
        //// //   $("#tooltip").hide();
        ////    // Do your thing.
        ////});

        //////navigator.permissions.query({ name: 'camera' })
        //////    .then((permissionObj) => {
        //////        console.log(permissionObj.state);
        //////    })
        //////    .catch((error) => {
        //////        console.log('Got error :', error);
        //////    })
        navigator.getUserMedia({ audio: false, video: true }, function (stream) {
            stream.getTracks().forEach(x => x.stop());
        }, err => console.log(err));

        navigator.permissions.query({ name: 'camera' }).then(res => {
            res.onchange = ((e) => {
                // detecting if the event is a change
                if (e.type === 'change') {
                    // checking what the new permissionStatus state is
                    const newState = e.target.state
                    if (newState === 'denied') {
                        alert('גישה למצלמה נחסמה')
                    } else if (newState === 'granted') {
                        camera1();
                        // alert('We will be together forever!')
                        Webcam.attach('#my_camera');
                    } else {
                        alert('Thanks for reverting things back to normal')
                    }
                }
            })
        })

    }








    function read22() {
        try {
            var path;

            path = host + "mahut2/appMahutData" + dataFolder + "/images/p";
            console.log(path);
            for (let i2 = 0; i2 < mainArr.length; i2++) {

                readAllFilesWeb(path + i2, i2, function () {

                    if (i2 == mainArr.length - 1) {

                        console.log(mainArrImageName)
                        setTimeout(function () {  buildTable(); starTheGame() }, 1000)

                    }
                });

            }

        }
        catch (e) { }

    }



    function readAllFilesWeb(path, index, callback1) {

        $.get(path, function (data) {
            var listArr = [];

            $(data).find("a").attr("href", function (i, val) {
                if (val.match(/\.(jpe?g|png|gif)$/)) {
                    listArr.push(val);
                }
            })

            
            mainArrImageName[index] = listArr;

            callback1()


        })
            .fail(function (xhr, status, error) {
           //     alert("ssss");
            });
    }



    function sendFile(imgStr) {
        
        var myMes = {
            file: imgStr,
            folder: mainId,
            userName: userName,
            userEmail: userEmail,
            action:"reg"


        };
        console.log(myMes);
        var formData = new FormData();

        var a = JSON.stringify({
            myMes
        });

        formData.append("myMes", a);
        // alert(host + '/birthday/fileUploader.ashx');
        $.ajax({
            type: 'post',
            url: 'https://midgam.net/mahut2/fileUploader.ashx',
           //  url: '  https://localhost:44302/mahut2/fileUploader.ashx',

            crossDomain: true,
            cache: false,
            data: formData,
            success: function (status) {
                // alert(1);
                if (status == "1") {

                    alert("לוח ההתבוננות שיצרת נשלח למייל שלך בהצלחה")
                }
                if (status == "2") {

                    alert("הודעה לא נשלחה");

                }

            },
            processData: false,
            contentType: false,
            error: function (ex) {
                console.log(ex)
                alert("משהו השתבש. תמונה לא נשמרה" + ex);
            },
            singleFileUploads: false

        });


    }



    function getGameData(tempId) {
        
        tabId = "clientsMahut";
        $.ajax({
            type: "POST",
            url: host + "mahut2/code.aspx/getData",
            data: JSON.stringify({
                // id: urlParams.id
                id: tempId,
                tab: tabId

            }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: gameDataGood,
            error: function () { alert("Error- Get game data") }
        });
    }

    function gameDataGood(response) {
      
        obj = response.d;
        console.log("222222222222222",obj);
       
        //if (obj.Limit2 >= obj.Limit1) {
        //    alert("לא ניתן להכין לוח. קישור זה סיים את מכסת הלוחות")
        //    return;
        //}
       ;
        try {
            dataFolder = obj.Folder;
        }
        catch  {
            dataFolder = "0";  
        }
        if (dataFolder == null || dataFolder== ""){
         dataFolder = "0";
        }
        sourcePathXml = host + "mahut2/appMahutData" + dataFolder + "/myXml.xml?" + Date.now();
      
        // var e = $(this).parent().data("id");
        if (dataFolder == 0 || dataFolder == 1 || dataFolder == 3) {
            design2();
        }
        if (dataFolder == 2) {
            //kids
        //    $(".imgBoxCon5-2").remove();
           
        }
        else {
           // $(".imgBoxCon5-1").remove();
            $(".txtUseMail").hide();
        }
       
        callXml();

    }


    
})


