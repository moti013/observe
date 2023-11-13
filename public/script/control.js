


try {
    window.plugins.insomnia.keepAwake();
}

catch (err) {

}
Date.now = Date.now || function () { return +new Date; };



var userNum;
//var host = "http://" + location.host + "/";    //local host
//host = "http://192.168.30.89:5000/";

$.getScript(host + "mahut1/scripts/jquery.signalR-2.2.0.min.js")
    .done(function (script, textStatus) {
        s2();
       
    })
    .fail(function (jqxhr, settings, exception) {
        alert("No script load");
    });

var testArrRes = [];
var mainArr = [
    { Screen: "start1", Txt: "התחלה", plan: 3, KidsName: "" },
    { Screen: "start", Txt: "בדיקת משתמש", plan: 3, KidsName: "" },
    { Screen: "name", Txt: "שם הילד", Data: 0 },
    { Screen: "camera", Txt: "מצלמה" },
    { Screen: "question", Txt: "שאלה 1", Data: 0 },
    { Screen: "question", Txt: "שאלה 2", Data: 1 },
    { Screen: "draw", Txt: "ציור", Data: 3 },
    { Screen: "fabric", Txt: "גרירה", Data: 3 },
    { Screen: "priview", Txt: "מבט מוקדם" },
    { Screen: "zip", Txt: "zip" },
    { Screen: "save", Txt: "שמירה" },


    { Screen: "talk", Txt: "דיון - בואו נדבר על זה" },
    { Screen: "end", Txt: "מסך סיום" }

]

var mainNavIndex = 0;
var type = "game";
var qArr = [];
var testArr = [];
var sumArr = [];
var fakeArr = [20, 80];
var sourcePath = host + "mahut1/" + "appMahutData/";//choiseXml.xml?" + Date.now();

var colorUserOff = "rgba(163,6,202,0.3)";
var colorUserOn = "rgba(163,6,202,0.9)";
var userPoint = 0;
var color1 = "#068cca";
var color2 = "blue";
var isConnect = false
var mainQu;
var isTheFirst = false;

var myControl;
plan = "choiseXml0";


function s2() {
    $.getScript(host + "signalr/hubs")
        .done(function (script, textStatus) {
            init0();
           
        })
        .fail(function (jqxhr, settings, exception) {
            alert("bad-signalr");
        });
}

function init0() {
    var path = host + "mahut1/ass/base0/";

    //if (app) {
    //    path = cordova.file.externalRootDirectory + "appMahutData/base0/";
    //}

    $("#allInject").load(path + "index.html #all", function (responseTxt, statusTxt, xhr) {
        if (statusTxt == "success") {
            console.log($(this).html())
            init1();
        }

        if (statusTxt == "error") {
            alert("Error: " + xhr.status + ": " + xhr.statusText);
        }
    });

}
function init1() {
    $("#controlMainDiv").show();
    $("#clientMainDiv").hide();
   
    showScreen(0);

    makeCloseApps();
    makeRestartGame();
    $(".progClass").hide();
    $("#qScreen1").hide();


    var myStat = $("#myStat");

    //setData();

    $("#btMore").on("click", function () { sendScore(1); })
    $("#btLess").on("click", function () { sendScore(-1); })

    //setting



    setSignalr();
    function setSignalr() {
        myControl = $.connection.appHub;
        $.connection.hub.qs = { 'id': 'admin' };
        $.connection.hub.url = host + "signalr";

        $.connection.hub.disconnected(function () {
            myStat.text("מנותק");
            isConnect = false;
            startConnect();

        });


        myControl.client.broadcastMessageAdmin = function (num1) {
            //  var temp = testArrRes[num1].Num;

            var temp = mainQu.MainRes.ResArr[num1];
            temp += 1;
            mainQu.MainRes.ResArr[num1] = temp;


        }

        myControl.client.adminSendingMes = function (mes, userName) {


            var res = mes.split(',').map(i => !isNaN(parseInt(i)) ? parseInt(i) : i);
            var ob = { userName1: userName, res1: res };
            console.log("log", userName, res)
            sumArr.push(ob);


        }


        myControl.client.updateUserOk = function (num1) {

            
            var t = $(".userBoxClass")[num1];
            $(t).css("background", colorUserOn)



        }

        myControl.client.updateUserName = function (name, userIndex) {


            // var v = findById(userIndex);
            var t = $(".userBoxClass")[userIndex];
            $(t).find(".nameParClass").text(name);

        }
        myControl.client.updateUsersOnlineCount = function (num1) {

            $("#myUserCounter").text(num1);


        }
        setTimeout(function () {

            startConnect();
        }, 1000); //



    }
    myStat.on("click", function () {
        if (isConnect == false) {
            startConnect();
        }
    }
    )

    function refreshUserBox() {
        
        $(".userBoxClass").css("background", colorUserOff)

    }
    function startConnect() {

        $.connection.hub.logging = true;
        $.connection.hub.start({ withCredentials: false }).done(function () {

            myControl.server.joinAdmin("admin");
            myStat.text("מחובר");
            isConnect = true;
            if (isTheFirst == false) {
                showScreen(1);
                makeChoise2();
            }
            myControl.server.getActive("client");
            isTheFirst = true;




        }).fail(function (err) {
            alert(err);
            console.log(err.message);
            setTimeout(function () {
                console.log('מנסה להתחבר מחדש');
                startConnect();
            }, 2000);
        });
    }



    function makeAdminOrder() {
        var arr8 = new Object();
        arr8.action = "new folder";
        arr8.dataInt = 5;
        arr8.dataString = "close"
        var myJSON = JSON.stringify(arr8);
        myControl.server.sendToOrder(myJSON);
    }
    function adminSend(json) {

        myControl.server.send(json, "client");


    }

    function adminSendScreen(json) {


        myControl.server.send(json, "screen");

    }



    function adminSendOnlyToScreen(json) {


        var myJSON = JSON.stringify(json);
        myControl.server.sendScreenRes(myJSON);



    }
    function getRnd(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    function getUsers() {


        myControl.server.update();
    }






    function findById(userId) {
        var boxconArr = $(".userBoxClass");
        for (let i = 0; i < boxconArr.length; i++) {
            var t = $(boxconArr[i]);
            if (t.data("id") == true) {
                return t;

            }
        }
    }


    buildUserBoxs();
    function buildUserBoxs() {
        var btCon = $('#userBoxCon1');
        btCon.empty();
        for (let i = 1; i < 21; i++) {
            var bt = $("<div/>")
            bt.addClass("userBoxClass");
            bt.appendTo(btCon);
            bt.data("id", i - 1);
           bt.css("background", colorUserOff)


            var indexPar = $("<div/>")
            indexPar.addClass("indexParClass");
            indexPar.appendTo(bt);
            indexPar.text(i);

            var namePar = $("<div/>")
            namePar.addClass("nameParClass");
            namePar.appendTo(bt);
            namePar.text("---");
        }
    }
    //------------------------------------------------------------------------------------
    function buildButton() {
        mainArr[0].plan = plan;
        var btCon = $('#btCon');
        btCon.empty();

        for (let i = 0; i < mainArr.length; i++) {
            var bt = $("<div/>")
            bt.addClass("btClass");
            bt.css("background", color1);
            bt.appendTo(btCon);
            bt.data("id", i);
            bt.attr("id", "btr" + i)
            bt.text(mainArr[i].Txt);

            bt.on("click", function () {
                if (mainArr[i].Screen == "start") {
                    makeAdminOrder();
                }
                refreshUserBox();
                $("#theTab > tbody > tr").data("isPresd", false);
                $("#qScreen1").hide();

                var qid = $(this).data("id");
                var myJSON = JSON.stringify(mainArr[qid]);

                $("#theTab > tbody > tr").css("background", color1);
                $("#btCon > .btClass").css("background", color1);
                $(this).css("background", color2);
                //$(".showResAns").hide();
                $('[id*="theResCon"]').css("visibility", "hidden");
                type = mainArr[qid].Screen;

                $("#doitCon").hide();

                adminSend(myJSON);
                // adminSendScreen(myJSON);


            })
        }
    }



    function setData() {


        $.ajax({
            type: "GET",
            url: sourcePath,
            dataType: "xml",
            success: function (xml) {

                setQustionsArr(xml);

            },
            //other code
            error: function (e) {
                alert(e + "The XML File could not be processed correctly.");
            }


        });

        function setQustionsArr(xml) {


            try {
                $(xml).find('group').each(function () {

                    var xml = $(this);
                    var mis = new Object();

                    mis.Id = xml.find('id').html();
                    mis.Qu = xml.find('Qu').text();
                    mis.AnsArr = [];
                    mis.Screen = "questions";
                    xml.find('ans').each(function () {
                        var txt = $(this).text();
                        console.log(txt, mis.AnsArr);
                        mis.AnsArr.push(txt);
                    });

                    qArr.push(mis);

                });



                $("#qScreen1").hide();

            }
            catch (err) {
                alert(err.message)
            }


        }
    }


    function makeCloseApps() {
        var btCloseAll = $("#btCloseAppsId");
        btCloseAll.on("click", function () {
            var a = window.confirm("האם את בטוחה שאת רוצה לסגור את כל האפלקציות אצל המשתמשים?");
            if (a) {
                var arr8 = new Object();
                arr8.Screen = "close";
                arr8.Txt = "close"
                var myJSON = JSON.stringify(arr8);
                adminSend(myJSON);
            }



        })
    }

    function makeRestartGame() {
        var btRestartId = $("#btRestartId");
        btRestartId.on("click", function () {
            var a = window.confirm("פעולה זו תאפס את המשחק , האם אתה בטוח בכך?");
            if (a) {
                var arr8 = new Object();
                arr8.Screen = "startOver";
                arr8.Txt = "startOver"
                var myJSON = JSON.stringify(arr8);
                adminSend(myJSON);
                adminSendScreen(myJSON)

                $("#btr0").click();
            }



        })
    }

    function showScreen(stat) {

        $("[id*='page']").hide();
        $("#page" + stat).show();

    }
    function makeChoise2() {
        console.log("111111111");
        var cCon = $("#page1");


        var conKidName = $("#conChoise21");
        conKidName.hide();
        var cCon100 = $("#conChoise1");
        var arr9 = ["ילדים רגיל", "נוער רגיל", "בני/ות מצווה", "יום הולדת גדולים", "העדפות יחד", "העדפות מבוגרים"];

        for (let i = 0; i < arr9.length; i++) {

            var bt = $("<div/>");
            bt.addClass("btPlan");
            bt.text(arr9[i]);
            bt.appendTo(cCon100);
            bt.attr("id", "btPlan" + i);
            console.log("33333331");
            bt.on("click", function () {

                plan =  i;
                if (plan == 3) {
                    conKidName.show();
                }

                else {
                    cCon.hide();
                }
                //add the plan

                buildButton();
                sourcePath = sourcePath + "choiseXml" + i + ".xml?" + Date.now();

                console.log("33333", "choiseXml" + plan);
                myControl.server.plan("choiseXml" + plan);

                setData();
            });


        }

        $(".btPlan")[0].click();
    }
    //readTextFile2();
    //function readTextFile2() {
    //    try {
    //        var file = host + "/mahut/plan.txt";
    //        console.log(file);
    //        var rawFile = new XMLHttpRequest();
    //        rawFile.open("GET", file, true);
    //        rawFile.onreadystatechange = function () {

    //            if (rawFile.readyState === 4) {

    //                if (rawFile.status === 200 || rawFile.status == 0) {

    //                    var allText = rawFile.responseText;
    //                    console.log(allText);
    //                    if (allText == "choiseXml") {
    //                        $(".mainKot1").html("מהותי<br/><span>נוער</span>");
    //                    }
    //                    if (allText == "choiseXml2") {
    //                        $(".mainKot1").html(" מהותי<br/><span>ילדים</span>");
    //                    }
    //                    sourcePath = sourcePath + allText + ".xml ? " + Date.now();
    //                }
    //            }
    //        }
    //        rawFile.send(null);
    //    }
    //    catch (err) {
    //        // כפתור לבחירה נוער או ילדים
    //    }
    //}


    //-----------------------cookies----------------------------------------
    function readCookie(name) {
        return (name = new RegExp('(?:^|;\\s*)' + ('' + name).replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&') + '=([^;]*)').exec(document.cookie)) && name[1];
    }


    function setCookie(cname, cvalue, minutes) {

        var d = new Date();
        d.setTime(d.getTime() + (minutes * 60 * 1000));
        var expires = "expires=" + d.toGMTString();
        document.cookie = cname + "=" + cvalue + "; " + expires;

    }

    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1);
            if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
        }
        return "";
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


    setBtNav();
    function setBtNav() {
        var btNext = $("#btNext");
        var btBack = $("#btBack");
        var btNextText = $("#btNextTxt");
        var btBackText = $("#btBackTxt");
        
        btNext.on("click", function () {
          
            mainNavIndex += 1;
            if (mainNavIndex > mainArr.length) { mainNavIndex = mainArr.length };
            updateNav();
        })
        btBack.on("click", function () {
          
            mainNavIndex -= 1;
            if (mainNavIndex < 0) { mainNavIndex = 0 };
            updateNav();
        })
    
    
        updateNav();
        
    }
    
    function updateNav() {
      
        var btNext = $("#btNext");
        var btBack = $("#btBack");
        var btNextText = $("#btNextTxt");
        var btBackText = $("#btBackTxt");

        if (mainNavIndex == 0) { btBack.hide(); } else { btBack.show() }
       // $('[id*="theResCon"]').css("visibility", "hidden");
        var nextTemp = mainArr[mainNavIndex];
        var backTemp = mainArr[mainNavIndex-1];
        btNextText.text(nextTemp.Txt);
        btBackText.text(backTemp.Txt);
        updateAction();
    }

    function updateAction() {
        if (mainNavIndex == 0) { return }
        if (mainArr[mainNavIndex].Screen == "start") {
            
            makeAdminOrder();
        }
        refreshUserBox();
       

      
        var myJSON = JSON.stringify(mainArr[mainNavIndex]);
       
        adminSend(myJSON);
    }






}

