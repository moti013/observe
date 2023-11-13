

var app = document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1;
Date.now = Date.now || function () { return +new Date; };

var host = "https://" + location.host + "/";    //local hos
var serverHost = "https://elearning.mahuti.co.il/";
//var serverHost = host; //localhost
var listArr = [];
var userId = "0000";

var instanceId;
var canChoose = true;
var langObj;
var mainTable = "clientmahut";
var isElearning  = false;


var xxx = " data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iNTEycHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48cGF0aCBkPSJNNDQzLjYsMzg3LjFMMzEyLjQsMjU1LjRsMTMxLjUtMTMwYzUuNC01LjQsNS40LTE0LjIsMC0xOS42bC0zNy40LTM3LjZjLTIuNi0yLjYtNi4xLTQtOS44LTRjLTMuNywwLTcuMiwxLjUtOS44LDQgIEwyNTYsMTk3LjhMMTI0LjksNjguM2MtMi42LTIuNi02LjEtNC05LjgtNGMtMy43LDAtNy4yLDEuNS05LjgsNEw2OCwxMDUuOWMtNS40LDUuNC01LjQsMTQuMiwwLDE5LjZsMTMxLjUsMTMwTDY4LjQsMzg3LjEgIGMtMi42LDIuNi00LjEsNi4xLTQuMSw5LjhjMCwzLjcsMS40LDcuMiw0LjEsOS44bDM3LjQsMzcuNmMyLjcsMi43LDYuMiw0LjEsOS44LDQuMWMzLjUsMCw3LjEtMS4zLDkuOC00LjFMMjU2LDMxMy4xbDEzMC43LDEzMS4xICBjMi43LDIuNyw2LjIsNC4xLDkuOCw0LjFjMy41LDAsNy4xLTEuMyw5LjgtNC4xbDM3LjQtMzcuNmMyLjYtMi42LDQuMS02LjEsNC4xLTkuOEM0NDcuNywzOTMuMiw0NDYuMiwzODkuNyw0NDMuNiwzODcuMXoiLz48L3N2Zz4 =";

$("#instanceChooserScreen").hide();
$(document).ready(function () {
 
   
    
    $("#instanceChooserScreen").hide();
    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
    var tt = 'type'.toLowerCase()
    userId = getParameterByName(tt);
    
    if (userId == null) {
        //sourcePathXml = "ass/mainXml" + foo + ".xml?" + Date.now();

        userId = "0000";
    }
    if (host.includes("elearning")) {
        $("#instanceChooserScreen").hide();
        mainTable = "clientsmahut";
        userId = getParameterByName(tt);
        isElearning  = true;
        console.log("elearning");
    }

    try {
        if (MahutiAppData.current_user_id != null || MahutiAppData.current_user_id != "") {
            
            isElearning = false;
            $("#btErase").hide();
            mainTable = "observemembership"
            console.log("observemembership");
            userId = MahutiAppData.current_user_id;
           // instanceId = getParameterByName(instanceId);
            console.log("xxxxxxxxxxxxxxxxxxx",instanceId);
            showInstanceChooser();
            // instance_id: '326', membership_id: '4982', trans_num: 'mpwoo_or5129pr5036lvl4982', membership_title: 'מתבוננים יחד - פעילות אונליין לכיתה', created_at: '2022-01-25 09:33:39'


        }
    }
    catch (e) {}
    if (host.includes("localhost")) {
        //$("#instanceChooserScreen").hide();
        //mainTable = "clientsmahut";
        //mainId = getParameterByName(tt);
       // makefakeId();
       // showInstanceChooser();

    }
    function makefakeId(){
        MahutiAppData = {};
       
        MahutiAppData.current_display_name = "dd"
        MahutiAppData.current_first_name = "עובד688"
        MahutiAppData.current_last_name = "עכשיו"
        MahutiAppData.current_user_email = "eli+688@goodnet.org"
        MahutiAppData.current_user_id = "323"
        MahutiAppData.logout_url = "https://www.mahuti.co.il/wp-login.php?action=logout&_wpnonce=8d85aecb82&redirect_to=/login"
        MahutiAppData.membership_id = 4982,
            MahutiAppData.memberships = [
                { instance_id: '126', membership_id: '4982', trans_num: 'mpwoo_or5129pr5036lvl4982', membership_title: 'מתבוננים יחד - פעילות אונליין לכיתה', created_at: '2022-01-25 09:33:39' },
                { instance_id: '127', membership_id: '4982', trans_num: 'mpwoo_or5129pr5036lvl4982', membership_title: 'מתבוננים יחד - פעילות אונליין לכיתה', created_at: '2022-01-25 09:33:39' },
                { instance_id: '128', membership_id: '5982', trans_num: 'mpwoo_or5129pr5036lvl5982', membership_title: 'מתבוננים יחד - פעילות אונליין לכיתה', created_at: '2022-01-25 09:33:39' }
            ]
    }
    function showInstanceChooser() {
        $("#main").hide();
        $("#instanceChooserScreen").show();
        $("#screen-1").hide();
        var mainCon = $("#stor3");
        mainCon.empty();
        for (var i = 0; i < MahutiAppData.memberships.length; i++) {
            var instance = MahutiAppData.memberships[i];
            
          
            var div = $("<div/>");
            div.addClass("instanceCss");
            div.text(instance.membership_title + "  " + instance.instance_id);
            div.data("instance", instance.instance_id);
            div.appendTo(mainCon);
            div.on("click", function () {
                var t = $(this).data("instance");
                $("#instanceChooserScreen").hide();
                instanceId = t;
                getGameData();
                
            })
        }
    }
    //let passWord = prompt("סיסמה");
    //passWord = passWord.trim();
   // passWord = "0000";
   // $("body").css("overflow-y", "scroll");

    //mainId = "319506";
    
    if (isElearning) {
        
        getGameData();
    }
    $("#screen100").hide();
    $("#screen200").show();
    $("#screen100").css("position", "fixed");
    $("#screen200").css("position", "fixed");
    $("#btGo55").on("click", function () {
        $("#screen100").hide();
        $("#screen200").hide();
    })

    function design2() {

        $(".bt9").css("background", "#94ac8d");

        //$(".imgBox").css("border-color", "#94ac8d");
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

    
    function starTheGame() {
        
        var str2 = host + "apps/observe/index.html?type=" + userId + "&instance=" + instanceId;

        if (isElearning) {
            str2 = host + "apps/observe/index.html?type=" + userId;
        }

        $("#frameLink2").val(str2);
        if (isElearning) {
            readAllFilesWeb();
        }

    }

    function cssLang() {
        if (obj.Lang == "arb") {
            var t = $("#logo").css("background-image");
            t = t.replace("logo1", "logo1-arb");
            $("#logo").css("background-image", t)

          
          

            var fonts = $("*");
            $("body * :not('.material-icons')").css("font-family", "arabic");
           

         
        }





        if (obj.Lang == "eng") {

            var t = $("#logo").css("background-image");
            t = t.replace("logo1", "logo1-eng");
            $("#logo").css("background-image", t)

            $(".tempName ").css("letter-spacing", '0');
            $("body").css("direction", "ltr");

            var ar = $("*");
            for (var i = 0; i < ar.length; i++) {
                var temp = $(ar[i]);
                var t = temp.css("font-size");
                t = t.replace("px", "");
                t = parseInt(t) / 1.2;
                if (t < 16) { t = 16 };
                temp.css("font-size", t + "px");
                if (temp.css('text-align') == 'right') {
                    temp.css('text-align', "left")
                }

                $("#btGoCon").css("direction", "rtl");
              //  $(".btContin").css("font-size", 14 + "px");
            }
            
            //var arr=("*").css("font-size"));

        }
    }

    function makeBig(img1) {
        var img = $("</img>");
        var img = img1.clone();
        $("#screen100").show();
        // $("#screen100").css("dispaly", "flex");
        $("#con4").empty();
        img.appendTo($("#con4"));

    }

    $("#close").on("click", function () {
        $("#screen100").hide();

    })
    $("#screen100").on("click", function () {
        $("#screen100").hide();

    })

    function makeDives() {
        var mainCon = $("#theCon");
        mainCon.empty();


        for (let i = 0; i < listArr.length; i++) {
            var scr = $("#screen100");
            var boxCon = $("<div/>");
            boxCon.addClass("boxCon8");
            boxCon.appendTo(mainCon);
            boxCon.on("click", function () {

                makeBig($(this).find("img"));



            })
            var img = $("<img/>");
            var tempSrc = listArr[i].replace("mahuti.co.il", "elearning.mahuti.co.il");
            console.log("cccccccccccccccc",listArr[i], tempSrc);
            img.attr("src", tempSrc);
            img.appendTo(boxCon);
        }

    }

    function readAllFilesWeb() {
    
        getAllFilesInFolder(function () {
            makeDives();
        });

    }
    function getAllFilesInFolder(callback) {
      
        game = "mahut";
        var str = userId;
        if (isElearning) { str = userId }

        else { str = userId + "/" + instanceId }
        $.ajax({
            type: "POST",
            url: serverHost + "apps/observe/code.aspx/getAllFilesInFolder",
            data: JSON.stringify({

                id: str


            }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {

                listArr = response.d;
                console.log("11111111", listArr)
                callback();
               

            },
            error: function (e) { alert(e.message + "AllFilesInFolder- Get zip data") }
        });
    }
    if (isElearning == false)
    { $("#btLogout").show(); } else { $("#btLogout").hide() }
    $("#btLogout").on("click", function () {

        window.location.href = MahutiAppData.logout_url;

    });
    
    $("#btHome").on("click", function () {
        console.log("ddd");
        $("#instanceChooserScreen").show();
        $("#main").hide();
        $("#instanceChooserScreen").css("display", "flex");
    });
    $("#btErase").on("click", function () {
        var str = langObj.errErase.trim();
        var a = ask(str);
        if (a) {
         //   var b = ask("רק לוודא שלא נלחץ בטעות. לחיצה על כפתור ok תמחק את כל התמונות מהלוח. האם להמשיך בפעולה זו?")
            var b = (str);
            if (b) { clearAll() }
        }

    })

    $("#closePop").on("click", function () {
        $("#pop1").hide();
       


    })
    $("#btZip").on("click", function () {
        // makeZip();
        
        var t = serverHost + "apps/observe/code.aspx/makeTheZip?member=observe&id=" + userId + "/" + instanceId+ "&game=" + "aaa"
        if (isElearning) {
           t= serverHost + "apps/observe/code.aspx/makeTheZip?member=observe&id=" + userId + "&game=" + "aaa"
        }
       
        window.open(t);
        return;

    })
    $("#btShare").on("click", function () {
        $("#pop1").show();

    });
    //$("#btRefresh").on("click", function () {
    //    getGameData();

    //});
    
    $("#frameLinkBt2").on("click", function () {
        var str = $("#frameLink2").val();
     
        window.open(
            str,
            '_blank' // <- This is what makes it open in a new window.
        );
    });
    $("#frameLinkBtCopy2").on("click", function () {
        //$("#frameLink").
        copyToClip($("#frameLink2")[0]);
    });
    function copyToClip(bt) {
        /* Get the text field */
        var copyText = bt;//document.getElementById("myInput");

        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /* For mobile devices */

        /* Copy the text inside the text field */
        document.execCommand("copy");

        /* Alert the copied text */

    }
    function ask(str) {
        if (confirm(str)) {
            return true;
        } else {
            return false;
        }
    }

    function clearAll() {

        var myMes = {
            file: "0000",
            userId: userId,
            userName: "0000",
            userEmail: "0000",
            action: "clear",
            lang:"heb"


        };
        var a = JSON.stringify({
            myMes
        });

        var data = JSON.stringify({
            obj: a,
             table: mainTable
        });

       
        $.ajax({
            type: 'post',
            //url: host+"mahut2/fileUploader.ashx",
            url: serverHost + "apps/observe/code.aspx/getClientData",
            data: data,
            dataType: 'json',
            contentType: "application/json; charset=utf-8"
        }).done(function (status) {
              status = status.d;
              
                if (status == "1") {

                    alert(langObj.errDelete)
                    location.reload(true);
                }
                if (status == "3") {

                    alert("Error. Can not delete");

                }

        
        }).fail(function (jqXHR, textStatus) {
           
           alert("בעיה במחיקת התמונות")
            

        });
    }

    function getGameData() {

        var tempId = userId;
        var conStr = serverHost + "apps/observe/code.aspx/getObserveMemberShip";
        if ( isElearning==false ) {

            tempId = userId + "*" + instanceId;
        }
        else {
            conStr = serverHost + "apps/observe/code.aspx/getData";
        }

        console.log(tempId, mainTable);
        $.ajax({
            type: "POST",
            url: conStr,
            data: JSON.stringify({
                // id: urlParams.id
                id: tempId,
                tab: mainTable

            }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: gameDataGood,
            error: function () { alert("Error- Get game data") }
        });
    }

    function gameDataGood(response) {

        obj = response.d;
        console.log("22222224444422222", obj);

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
        if (dataFolder == null || dataFolder == "") {
            dataFolder = "0";
        }
        sourcePathXml = host + "observe/appMahutData/appMahutData" + dataFolder + "/myXml.xml?" + Date.now();

        
        // var e = $(this).parent().data("id");
        if (dataFolder == 0 || dataFolder == 1 || dataFolder == 3) {
            design2();
        }
        if (dataFolder == 2) {

        }
        else {
            // $(".imgBoxCon5-1").remove();
            $(".txtUseMail").hide();
        }

        
        callXmlLang();
        $("#screen-1").hide();
        $("#main").show();
        starTheGame();
        readAllFilesWeb();

    }


    function makeZip() {

        getAllFilesInFolder(function () {
            zipGood()

        })
     
    }

    function zipGood() {
        var urls2 = listArr.filter(function (item) {
           
                return item.trim();
            
        });
        var zip = new JSZip();
        var count = 0;
        var zipFilename = "zipFilename.zip";
        urls2.forEach(function (url) {
            var filename = "photo";
            console.log(url);
            // loading a file and add it in a zip file
            JSZipUtils.getBinaryContent(url, function (err, data) {
                if (err) {

                   //  throw err; // or handle the error
                }

                zip.file(filename + count + ".jpg", data, { binary: true });
                count++;
                if (count == urls2.length) {
                    zip.generateAsync({ type: 'blob' }).then(function (content) {
                        saveAs(content, zipFilename);
                    });
                }
            });
        });
    }
    function download(loc) {
        //  sendFile2(imgString);
        var a = document.createElement('a');
        a.href = loc;
        a.download = "mahuti.zip";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }


    function callXmlLang() {
    
        var sor = host + "apps/observe/appMahutData/lang.xml?" + Date.now()
        console.log("cccccccccccccc",sor);
        $.ajax({
            type: "GET",
            url: sor,
            dataType: "xml",
            success: function (xml) {

                setLangArr(xml);
              


            },
            //other code
            error: function (e) {
                alert(e + "The XML File could not be processed correctly.");
            }


        });
    }
    function setLangArr(xml) {


        langObj = new Object();
        var langarr1 = ["heb", "arb","eng"];
        try {

            for (let i = 0; i < langarr1.length; i++) {
                var heb = new Object();
                var langName = langarr1[i];
                
                heb.btContin = $(xml).find("btContin").find(langName).text().trim();
                heb.txtOpen5 = $(xml).find("txtOpen5").find(langName).text().trim();
                heb.txtKot5 = $(xml).find("txtKot5").find(langName).text().trim();
                heb.cet = $(xml).find("cet").find(langName).text().trim();
                heb.btZip = $(xml).find("btZip").find(langName).text().trim();
                heb.btErase = $(xml).find("btErase").find(langName).text().trim();
                heb.errErase = $(xml).find("errErase").find(langName).text().trim();
                heb.noFolder = $(xml).find("noFolder").find(langName).text().trim();
               
                heb.errDelete = $(xml).find("errDelete").find(langName).text().trim();
                
                langObj[langName] = heb;
            }

            
            langObj = langObj[obj.Lang];
            console.log(langObj);
            $("#txtOpen5").html(langObj.txtOpen5);
            $("#txtKot5").text(langObj.txtKot5);
            $("#cet").text(langObj.cet);
           // $("#btZip").text(langObj.btZip);
            $("#btZip").prop('title', langObj.btZip)
            //$("#btErase").text(langObj.btErase);
            $("#btErase").prop('title', langObj.btErase)
            $("#btGo55").text(langObj.btContin);
         
            cssLang();
           

        }
        catch (err) {
            alert(err.message)
        }


    }

   
})