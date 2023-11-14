alert("wellcome");

const lang_xml = `<?xml version="1.0" encoding="utf-8"?>
<Items>
	<btStart>
		<heb>התחלה</heb>
		<arb>البداية</arb>
		<eng>Start</eng>
	</btStart>
	<txtName1>
		<heb>מה שמך?</heb>
		<arb>ما اسمك؟</arb>
		<eng>What’s your name?</eng>
	</txtName1>
	<openTextKot>
		<heb>לוח השראה</heb>
		<arb>
			لوح إلهام
		</arb>
		<eng>Inspiration Board</eng>
	</openTextKot>
	<openText>
		<heb>
		בפעילות שלפניכם תיצרו את לוח ההתבוננות האישי שלכם.
		קחו לכם רגע פרטי, פנו את עצמכם מהסחות דעת, אפשר להשמיע מוסיקה נעימה ברקע וכנסו לעולם הפנימי שלכם.
				איך נעשה זאת? | נשאל שאלות שאת התשובות להן נבחר בתמונות.
		התמונות תלויות פרשנות אישית ומייצגות מה שנראה בעינכם.
		תשובותיכם נכונות לרגע הזה.
				שנתחיל?
		</heb>
		<arb>
			لوح إلهام
			ستقومون في الفعالية التالية بتصميم لوح الإلهام الخاص بكم. خذوا لكم لحظة مع أنفسكم،
			حاولوا أن تبتعدوا عن أي شيء من شأنه أن يشغل تفكيركم، ممكن الاستماع لموسيقى لطيفة خلال ذلك وادخلوا عالمكم الداخلي.
			كيف نفعل ذلك؟ سنطرح أسئلة الاجابة عليها ستكون من خلال اختيار صور.
			تحليل الصور شخصي وهي تُمثل ما ترونه أنتم.
			إجاباتكم صحيحة ومناسبة لهذه اللحظة.
						هل نبدأ؟
		</arb>
		<eng>
			In the following activity you will create your own personal observation board. Take a minute for yourself, privately, clear away any distractions, play some soothing music if you like, and enter into your inner world. How will we do this? | We will ask questions, and choose their answer in images. These images are personally interpretative for each of us, represent what you see in your mind’s eye. Your answers are correct for this moment, now. Shall we start?
		</eng>
	</openText>
	<txtEmail1>
		<heb>כתובת הדואר שלך ?</heb>
		<arb>بريدك الالكتروني</arb>
		<eng>
			What’s your email address?
		</eng>
	</txtEmail1>
	<txtEmail2>
		<heb>מעדיף להתקדם בלי מייל</heb>
		<arb>
			أُفضّل التقدم بدون عنوان بريدي الالكتروني
		</arb>
		<eng>I prefer continuing without email
</eng>
	</txtEmail2>
	
	<btContin>
		<heb>המשך</heb>
		<arb>أكمل</arb>
		<eng>
			Next
		</eng>
	</btContin>
	<btCamYes>
		<heb>יצא טוב</heb>
		<arb>الصورة جيدة</arb>
		<eng>
			Good shot
		</eng>
	</btCamYes>
	<btCamNo>
		<heb>צלם שוב</heb>
		<arb>صور مرة أخرى</arb>
		<eng>
			Retake picture
		</eng>
	</btCamNo>
	<btCameraSnap>
		<heb>צלם</heb>
		<arb>التقط صورة</arb>
		<eng>
			Take picture
		</eng>
	</btCameraSnap>
	<nameErr>
		<heb>יש להזין שם </heb>
		<arb>سجل اسمك </arb>
		<eng>
			Please enter your name
		</eng>
	</nameErr>
	<emailErr1>
		<heb>כתובת מייל לא תקינה</heb>
		<arb>عنوان البريد الالكتروني ليس صالحا</arb>
		<eng>
			Your email address is invalid
		</eng>
	</emailErr1>
	<emailErr2>
		<heb>יש להוסיף אי מייל</heb>
		<arb>أضف عنوان البريد الالكتروني</arb>
		<eng>
			Please enter your email
		</eng>
	</emailErr2>

	<noCameraErr>
		<heb>להמשיך בלי תמונה לחצו ok  להפעלת המצלמה לחצו cancel  ובמסך הבחירה לחצו על אייקון המצלמה. האייקון נמצא ליד כתובת האתר</heb>
		<arb>للاستمرار بدون صورة اضغطوا على OK لإلغاء الكاميرا اضغطوا cancel   واختاروا أيقونة الكاميرا في شاشة الاختيار.
			الأيقونة موجودة بجانب عنوان الموقع.</arb>
		<eng>
			To continue without an image, click OK
			To start your camera, click Cancel, and on the selection pane, click the camera icon. The icon is next to the website address

		</eng>
	</noCameraErr>
	<stage1Kot>
		<heb>שלב 1: שאלות</heb>
		<arb>
			المرحلة 1: الأسئلة
		</arb>
		<eng>
			Stage 1: Questions
		</eng>
	</stage1Kot>
	<stage1>
		<heb>
			בכל פעם תוצג שאלה - איך עונים? בתמונות!
						לאחר הופעת השאלה יופיע מסך עם בנק תמונות | עליך לבחור לכל שאלה 2 תמונות.
						איך בוחרים? | באמצעות הקלקה עליהן.
						בחרתם תמונה בטעות? | הקלקה חוזרת על התמונה תבטל את הבחירה.
						הערה חשובה | זיכרו שתוכלו לערוך ולתקן את הלוח בסיום הכנתו!
		</heb>
		<arb>
			في كل مرة سيُطرح سؤال – كيف تجيبون؟ بالصور!
						بعد ظهور السؤال ستظهر شاشة فيها مجموعة صور | عليك اختيار صورتين عن كل سؤال.
						كيف تختارون؟ | بالضغط على الصور.
						اخترتم صورة بالخطأ؟ | اضغطوا ثانية على الصورة لإلغاء ذلك الاختيار.
						ملاحظة هامة | تذكروا أنه يمكنكم تعديل وتصحيح اللوح عند الانتهاء من إعداده!

		</arb>
		<eng>
			A question will be asked – how do you answer? In images!
						After a question is shown, a set of images will appear on screen | For each question, choose two images.
						You chose an image by mistake? | Just click the image again to cancel your selection.
			
			Note | Remember you can always edit and change your board once your done creating it!

		</eng>
	</stage1>

	<stage2Kot>
		<heb>שלב 2: עריכה</heb>
		<arb>
			المرحلة 2: إعداد
		</arb>
		<eng>
			Stage 2: Edit
		</eng>
	</stage2Kot>
	<stage2>
		<heb>
			חשוב שהתוצאה תהיה נהדרת!
						אם היא כזו - לחצו בעמוד הבא על כפתור "סיום".
						אם היא מצריכה דיוק - נחליף תמונות
						להחלפת תמונה - לחצו עליה ובחרו את התמונה המבוקשת.

		</heb>
		<arb>
			مهم أن تكون النتيجة رائعة!
						اذا كانت كذلك – اضغطوا في الصفحة التالية على زر "إنهاء".
						اذا كانت بحاجة للتدقيق أكثر – نبدل الصور
						لتبديل صورة – اضغطوا عليها واختاروا الصورة المطلوبة.
		</arb>
		<eng>
			It’s important that the results be great!
						If it is just perfect – Click Finish on the next screen
			To change an image – Click it, and then chose another

		</eng>
	</stage2>
	
	<txtReady>
		<heb>מוכנים?</heb>
		<arb>
			مستعدون؟
		</arb>
		<eng>
			Ready?
		</eng>
	</txtReady>
	<txtfirstQ>
		<heb>שאלה ראשונה</heb>
		<arb>
			السؤال الأول
		</arb>
		<eng>
			First question
		</eng>
	</txtfirstQ>
	<btLike>
		<heb>
		הבא
		</heb>
		<arb>التالي</arb>
		<eng>
			Continue
		</eng>
	</btLike>
	<txtMoreImg>
		<heb>עוד תמונות</heb>
		<arb>
			مزيد من الصور
		</arb>
		<eng>More images
</eng>
	</txtMoreImg>
	<chooseErr2>
		<heb>יש לבחור 2 תמונות</heb>
		<arb>
			قم باختيار صورتين
		</arb>
		<eng>
			Choose two images
		</eng>
	</chooseErr2>
	<chooseErr1>
		<heb>יש לבחור תמונה</heb>
		<arb>
			قم باختيار صورة واحدة
		</arb>
		<eng>Choose only one image</eng>
	</chooseErr1>

	<kotEdit1>
		<heb>עריכה |</heb>
		<arb>إعداد | </arb>
		<eng>Edit | </eng>
	</kotEdit1>
	<kotEdit2>
		<heb>להחלפת תמונה - לחצו עליה וביחרו את התמונה המבוקשת</heb>
		<arb>لتبديل الصورة – اضغطوا عليها واختاروا الصورة المطلوبة   </arb>
		<eng>
			To change an image – Click it, and then chose another
		</eng>
	
	</kotEdit2>
	<btEnd>
		<heb>שמירה וסיום</heb>
		<arb>
			حفظ وانهاء
		</arb>
		<eng>
			Save and Close
		</eng>
	</btEnd>

	<seeYou>
		<heb>
			נתראה בקרוב
		</heb>
		<arb>
			الى اللقاء قريبًا
		</arb>
		<eng>
			See you soon
		</eng>
	</seeYou>
	<sendErr1>
		<heb>
			לוח ההתבוננות שיצרת נשלח למייל שלך בהצלחה
		</heb>
		<arb>
			"تم ارسال لوح الالهام الذي بنيته الى بريدك الالكتروني بنجاح"
		</arb>
		<eng>
			Your observation board has been successfully sent to your email

		</eng>
	</sendErr1>
	<sendErr2>
		<heb></heb>
		<arb></arb>
		<eng></eng>
	</sendErr2>
	<sendErr3>
		<heb>תמונה לא נשמרה</heb>
		<arb></arb>
		<eng></eng>
	</sendErr3>
	<txtOnlyOne>
		<heb>הפעם ביחרו רק משפט אחד</heb>
		<arb>
			اختاروا جملة واحدة فقط
		</arb>
		<eng>Choose only one </eng>
	</txtOnlyOne>

	
	
	
	

	<txtOpen5>
		<heb>
			
			בדף זה יוצגו כל לוחות ההשראה
						כדי להתמקד בלוח מסוים יש ללחוץ עליו
						כדי לסגור לוח יש ללחוץ עליו שוב
		</heb>
		<arb>
			ستُعرض على هذه الصفحة كل ألواح الإلهام
						للتركيز على لوح ما عليكم الضغط عليه
						لاغلاق لوح ما عليكم الضغط عليه ثانية
		</arb>
		<eng>
			On this page all of the inspiration boards will be presented
						To focus on a board, click it
						To close the bord, click it again
		</eng>
	</txtOpen5>
	<txtKot5>
		<heb>לוחות ההשראה שלנו</heb>
		<arb>
			ألواح الإلهام خاصتنا
		</arb>
		<eng>
			Our Inspiration Board

		</eng>
	</txtKot5>
	<cet>
		<heb>תמונות ההשראה שלנו</heb>
		<arb>
			صورنا الملهمة
		</arb>
		<eng>
			Our inspirational images


		</eng>
	</cet>
	<btZip>
		<heb>הורדת כל התמונות</heb>
		<arb>
			تحميل كل الصور
		</arb>
		<eng>
			Download all images
		</eng>
	</btZip>
	<btErase>
		<heb>מחיקת כל תמונות</heb>
		<arb>
			محو كل الصور
		</arb>
		<eng>
			Delete all images

		</eng>
	</btErase>
	<errErase>
		<heb>פעולה זו תמחק את כל התמונות מלוח זה. האם אתה בטוח שאתה רוצה להמשיך בפעולה?</heb>
		<arb>
			هذه العملية ستؤدي الى محو كل الصور من هذا اللوح. هل أنت متأكد أنك تريد

			أن تستمر بهذه العملية؟
		</arb>
		<eng>
			This action will delete all of the images from this board. Are you sure you want to continue with this action?

		</eng>
	</errErase>
	<noFolder>
		<heb>
		אין תיקייה
		</heb>
		<arb>
			ا يوجد ملف

		</arb>
		<eng>
			There is no folder
		</eng>
	</noFolder>
	<errDelete>
		<heb>כל  התמונות נמחקו</heb>
		<arb>تم حذف جميع الصور</arb>
		<eng>Ok</eng>
	</errDelete>
</Items>`;

const my_xml = `<?xml version="1.0" encoding="utf-8"?>


<Items>

	<heb>
		<kot>| 	התבוננות מבוגרים - אנשי חינוך</kot>
		<group id="0">

			<qu>מהם הערכים שמנחים אותי?</qu>
			<qu1>ערכים מנחים</qu1>
		</group >


		<group id="1">

			<qu>
				במה הייתי רוצה להעשיר
				את חיי?
			</qu>

			<qu1>להעשיר <![CDATA[<br/>]]>את חיי</qu1>
		</group >
		
		
		<group id="2">

			<qu>
				לו יכולתי להעניק לעצמי כל דבר, הייתי מעניק/ה...
			</qu>
			<qu1>מתנה לעצמי</qu1>
		</group >


		<group id="3">

			<qu>על מה אני מודה?</qu>

			<qu1>הודיה</qu1>
		</group >
		
		
		<group id="4">

			<qu>מה מעורר בי השראה ומוטיבציה?  </qu>
			<qu1>מעורר השראה ומוטיבציה</qu1>
		</group >



		
		<group id="5">

			<qu>רגע של הצלחה בחיי</qu>
			<qu1>רגע של הצלחה</qu1>
		</group >
		


	</heb>
	<arb>

		<kot>Educators | 	</kot>
		
	
		<group id="0">

			<qu>
				ما هي نقاط القوة التي تميزني كفرد في سلك التربية والتعليم؟
			</qu>
			<qu1>
				نقاط قوتي
			</qu1>
		</group >
		<group id="1">

			<qu>
				ما الذي أحبه في مهنتي؟
			</qu>
			<qu1>أحب   في    <![CDATA[<br/>]]>   مهنتي</qu1>
		</group >
		<group id="2">

			<qu>
				ما هي القيم التي توجهني؟
			</qu>
			<qu1>
				قيم موجهة
			</qu1>
		</group >
		<group id="3">

			<qu>
				بماذا كنت أريد أن أُثري حياتي؟

			</qu>

			<qu1>
				إثراء حياتي
			</qu1>
		</group >
		<group id="4">

			<qu>
				ما هي وجهة النظر الخاصة التي أسهم بها للعمل الجماعي؟


			</qu>
			<qu1>وجهة نظر للمجموعة</qu1>
		</group >
		<group id="5">

			<qu>
				لو أمكنني أن أعطي نفسي أي شيء، لكنت أختار...

			</qu>
			<qu1>
				هدية لنفسي
			</qu1>
		</group >
	</arb>
</Items>`;
var test1 = "1";
var mode = "user";
var app = document.URL.indexOf("http://") === -1 && document.URL.indexOf("https://") === -1;
Date.now =
  Date.now ||
  function () {
    return +new Date();
  };
var storage = window.localStorage;
var userIndex = 0;
var mainTable = "clinetmahut";
var imageArray = [];
var selectedObjArr;
var currentChangeImageIndex;
var qs = location.pathname;
qs = qs.trim();
var mainIndex = 0;
// var host = "https://" + location.host + "/"; //local hos
var host = location.protocol + "//" + location.host + "/"; //local hos
console.log(host);
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
var isElearning = false;

var colArr = ["red", "blue", "pink", "green", "yellow", "gray", "coral", "Violet", "cyan", "Brown", "Navy", "olive", "SkyBlue"];

var numArr = ["ראשונה", "שניה", "שלישית", "רביעית", "חמישית", "שישית"];

var tap = 0;

var senArr = [];
var chosenSen = 0;
var isCameraBlock = true;
var waitingTime = 3000;

var mainTable = "clientmahutnew";
var mainId;
var instanceId;
var canChoose = true;
var scale;
var langObj;

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  url = url.toLowerCase();
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
var tt = "type".toLowerCase();
mainId = getParameterByName(tt);
try {
  var t2 = "instance".toLowerCase();
  instanceId = getParameterByName(t2);
} catch (e) {}

var sourcePathXml;

$(document).ready(function () {
  //document.addEventListener('touchmove', function (e) {
  //    e.preventDefault();
  //}, { passive: false });

  $("input").on("keypress", function (event) {
    if (event.keyCode == 13) {
      $("input").blur();
    }
  });
  $("input").on("blur", function () {
    setTimeout(function () {
      window.scrollTo(0, 0);
    }, 100);
  });
  var arr1 = [];

  function design2() {
    $("#boxCon8").css("border-color", "#94ac8d");
    $("#tatKot").css("color", "#E6DFCB");
    $(".imgBox").css("border-color", "#94ac8d");
    $("div").each(function () {
      if ($(this).css("background-image") != "none") {
        var t = $(this).css("background-image");
        var b = $(this).attr("id");
        // bg = t.replace('url(', '').replace(')', '').replace(/\"/gi, "");
        t = t.replace("/images/", "/images/images2/");
        $(this).css("background-image", t);
      }
    });
  }

  function cssLang() {
    if (obj.Lang == "arb") {
      var t = $("#logoCon1").css("background-image");
      t = t.replace("logo1", "logo1-arb");
      $("#logoCon1").css("background-image", t);

      var t2 = $("#logo4").css("background-image");
      t2 = t2.replace("logo4", "logo4-arb");
      $("#logo4").css("background-image", t2);

      var t3 = $("#boxCon8").css("background-image");
      t3 = t3.replace("bg3", "bg3-arb");
      $("#boxCon8").css("background-image", t3);

      var fonts = $("*");
      $("body *").addClass("portLang");
      $(".tempName ").css("letter-spacing", "0");
      $(".tempName ").css("line-height", "34px");
    }
    if (obj.Lang == "eng") {
      $("body *").addClass("portLangEng");
      var t = $("#logoCon1").css("background-image");
      t = t.replace("logo1", "logo1-eng");
      $("#logoCon1").css("background-image", t);

      var t2 = $("#logo4").css("background-image");
      t2 = t2.replace("logo4", "logo4-eng");
      $("#logo4").css("background-image", t2);

      var t3 = $("#boxCon8").css("background-image");
      t3 = t3.replace("bg3", "bg3-eng");
      $("#boxCon8").css("background-image", t3);
      $(".tempName ").css("letter-spacing", "0");
      $("body").css("direction", "ltr");
      $("#cameraCon2").css("direction", "rtl");

      var ar = $("*");
      for (var i = 0; i < ar.length; i++) {
        var temp = $(ar[i]);
        var t = temp.css("font-size");
        t = t.replace("px", "");
        t = parseInt(t) / 1.2;
        if (t < 14) {
          t = 14;
        }
        //if (t > 22) {
        temp.css("font-size", t + "px");
        //}
        if (temp.css("text-align") == "right") {
          temp.css("text-align", "left");
        }

        $("#btGoCon").css("direction", "rtl");
        // $(".btContin").css("font-size", 14 + "px");
      }

      //var arr=("*").css("font-size"));
      $("#txt4").css("top", "520px");
      $("#txt4").css("left", "1340px");
      $("#txt5").css("left", "1020px");
      $("#txt5").css("top", "800px");
    }
  }
  //mainId = "319506";

  var maxWidth = $("#boxCon8").width();
  var maxHeight = $("#boxCon8").height();
  addBtCloseRotate();
  function addBtCloseRotate() {
    try {
      var con = $("#screen100");
      var div = $("<div/>");
      // div.addClass("bt");
      div.text("סגירה");
      div.css({
        background: "white",
        padding: "20px 30px",
        position: "absolute",
        bottom: "20px",
        left: "20px",
        "font-size": "30px",
        color: "black",
      });
      div.on("click", function () {
        $("#screen100").hide();
      });
      //div.attr("id", "block" + temp.Id);
      div.appendTo(con);
    } catch (e) {
      alert(e.message);
    }

    //div.data("id", temp.Id);
  }
  $(window).resize(function (evt) {
    setSize();
  });
  function iOS() {
    return (
      ["iPhone"].includes(navigator.platform) ||
      // iPad on iOS 13 detection
      (navigator.userAgent.includes("Mac") && "ontouchend" in document)
    );
  }
  function setSize() {
    setTimeout(function () {
      var iPhone = iOS();
      if (iPhone) {
        document.body.height = window.innerHeight;
        $("body").css("height", window.innerHeight + "px");
        $(window).scrollTop(0);
      }
    }, 500);

    var maxWidth = $("#boxCon8").innerWidth();
    var maxHeight = $("#boxCon8").innerHeight();
    var $window = $(window);
    var width = $("#canvasCon").innerWidth();
    var height = $("#canvasCon").innerHeight();
    var scale;

    // early exit
    if (height >= width - 100) {
      $("#screen100").show();
      $("#screen100").css("display", "flex");
      console.log("1000000000");
      return;
    } else {
      $("#screen100").hide();
    }
    $("#screen100").hide();
    // = height / (maxHeight);

    scale = Math.min(width / (maxWidth + 200), height / (maxHeight + 350));

    $("#boxCon8").css({ zoom: scale });
    if (height < 600) {
      var maxWidth2 = $("#cameraCon").width();
      var maxHeight2 = $("#cameraCon").height();
      scale = Math.min(width / maxWidth2, height / (maxHeight2 + 300));

      $("#cameraCon").css({ zoom: scale });
      $("#cameraBorder").css({ zoom: scale });
    } else {
      $("#cameraCon").css({ zoom: 1 });
      $("#cameraBorder").css({ zoom: 1 });
    }
    setTimeout(function () {
      window.scrollTo(0, 0);
    }, 600);
  }

  window.scrollTo(0, 0);
  $("body").scrollTop(0);
  var btLike = $("#btLike");
  var mesCon = $("#mesCon");

  //  $("#btEnd").hide();

  //----------- setting----------------------------------
  $("#btDoneReflect").hide();

  setBtLike();

  function starTheGame() {
    showScreen(0);

    setSize();
    // editMode = true;
    //mainIndex = 5;
    //makeQ();
    //editMode = true;
    //makeQ();
    // showExplain(1);
    //   camera1();
    //   showScreen(4);
    // showScreen(3);
    // makeQPreview()
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
      $("#camRes").hide();
      $("#camRes").empty();
      $("#btCamBtCon").hide();
      $("#btCameraSnap").show();
      showScreen(4);
    }
  });

  $("#btEnd").on("click", function () {
    //  $('#boxCon8').css({ 'zoom': 1 });
    //setTimeout(function () {
    saveToImageMain();
    $("#btEnd").off("click");
    // }, 1000)

    var type10 = "Hashraha  end " + mainId + "  " + obj.Folder;
    // gtag('event', 'click', { 'event_category': type10, 'event_label': 'conversion' });
    //  showExplain(4);
  });

  $("#btStart").on("click", function () {
    //showScreen(1);
    showExplain(0);
    var type10 = "Hashraha  start  " + mainId + "  " + obj.Folder;
    // gtag('event', 'click', { 'event_category': type10, 'event_label': 'conversion' });
  });
  $("#btEx0").on("click", function () {
    //camera

    showScreen(1);
  });

  $("#btEx1").on("click", function () {
    //camera

    showScreen(4);
  });

  $("#q10").on("click", function () {
    isHelp = true;
    showExplain(1);
  });

  $("#btEx2").on("click", function () {
    //bg select
    //  showScreen(3);
    if (isHelp) {
      showScreen(2);
    } else {
      makeQPreview();
    }
  });
  var isHelp = false;
  $("#btEx3").on("click", function () {
    //bg select
    showScreen(3);
  });

  //$("#btEx4").on("click", function () {
  //    //bg select
  //    showScreen(3);

  //})

  $("#btBgNext").on("click", function () {
    //bg select
    showExplain(2);
  });

  $("#btName").on("click", function (e) {
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

      camera1();
      showScreen(4);
    } else {
      // showMes("יש להזין שם");
      alert(langObj.nameErr);
    }
  });
  //makebgCon();

  function checkMail() {
    var t = $("#txtEmail").val();
    if (t.length > 0) {
      userEmail = $.trim(t);
      if (validateEmail(userEmail)) {
        return true;
      } else {
        alert(langObj.emailErr1);
        return false;
      }
    } else {
      alert(langObj.emailErr2);
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
      });
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
    var str = langObj.seeYou;
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
        setTimeout(function () {
          makeQ();
        }, waitingTime);
      }, 2000);
    } else {
      $("#per2").show();
      $("#per1").hide();
      $("#per2").show();
      $("#per1").fadeOut(300);
      $("#per2").removeClass("fade");
      $("#per2").addClass("fade");
      setTimeout(function () {
        makeQ();
      }, waitingTime);
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
    var t3 = y + t2 * 2;
    //tempCon.scrollLeft()
    c.animate(
      {
        scrollLeft: t3,
      },
      "slow"
    );
  });
  $("#btGo2").on("click", function () {
    var c = $("#boxConId" + mainIndex);
    var y = c.scrollLeft();
    var t2 = c.find(".box1").width();
    var t3 = y - t2 * 2;
    var t = $(".conBox").width();
    c.animate(
      {
        scrollLeft: t3,
      },
      "slow"
    );
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
    } else {
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
      $("#cover1").hide();
    } else {
      $("#logo4").show();
      $("#cover1").show();
    }
    if (stat == 0) {
      $("#logo4").hide();
    }

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
    } catch (e) {}

    return false;
  }

  //   function callXml() {
  //     console.log("--------------------------", sourcePathXml);

  //     $.ajax({
  //       type: "GET",
  //       url: sourcePathXml,
  //       dataType: "xml",
  //       success: function (xml) {
  //         console.log(xml);
  //         setMainArr(xml);
  //       },
  //       //other code
  //       error: function (e) {
  //         alert(e + "The XML File could not be processed correctly.");
  //       },
  //     });
  //   }
  function setMainArr() {
    var xml = my_xml;
    mainArr = [];
    try {
      $(xml)
        .find(obj.Lang)
        .find("group")
        .each(function (index) {
          var xml = $(this);
          var mis = new Object();

          mis.Id = xml.attr("id");

          mis.Qu = xml.find("qu").text().trim();
          mis.Qu1 = xml.find("qu1").text().trim();
          mis.ImageLimit = 2;
          var theLimit = xml.find("limit").text();

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

          mis.Text1 = xml.find("text1").text();
          //console.log(mis);
          mainArr.push(mis);
        });

      console.log("0000000000000000000000000000", mainArr);
      var str6 = $(xml).find(obj.Lang).find("kot").text().trim();

      $("#takKot").text(str6);

      read22();
    } catch (err) {
      alert(err.message);
    }
  }

  //   function callXmlLang() {
  //     var sor = host + "appMahutData/lang.xml?" + Date.now();
  //     $.ajax({
  //       type: "GET",
  //       url: sor,
  //       dataType: "xml",
  //       success: function (xml) {
  //         setLangArr(xml);
  //       },
  //       //other code
  //       error: function (e) {
  //         alert(e + "The XML File could not be processed correctly.");
  //       },
  //     });
  //   }
  function setLangArr() {
    var xml = lang_xml;
    langObj = new Object();
    var langarr1 = ["heb", "arb", "eng"];
    try {
      for (let i = 0; i < langarr1.length; i++) {
        var heb = new Object();
        var langName = langarr1[i];

        heb.btStart = $(xml).find("btStart").find(langName).text().trim();
        heb.txtName1 = $(xml).find("txtName1").find(langName).text().trim();
        heb.txtEmail1 = $(xml).find("txtEmail1").find(langName).text().trim();
        heb.txtEmail2 = $(xml).find("txtEmail2").find(langName).text().trim();
        heb.btContin = $(xml).find("btContin").find(langName).text().trim();

        heb.btCamYes = $(xml).find("btCamYes").find(langName).text().trim();
        heb.btCamNo = $(xml).find("btCamNo").find(langName).text().trim();
        heb.btCameraSnap = $(xml).find("btCameraSnap").find(langName).text().trim();
        heb.noCameraErr = $(xml).find("noCameraErr").find(langName).text().trim();

        heb.stage1Kot = $(xml).find("stage1Kot").find(langName).text().trim();
        heb.stage1 = $(xml).find("stage1").find(langName).text().trim();

        heb.stage2Kot = $(xml).find("stage2Kot").find(langName).text().trim();
        heb.stage2 = $(xml).find("stage2").find(langName).text().trim();

        heb.chooseErr2 = $(xml).find("chooseErr2").find(langName).text().trim();
        heb.chooseErr1 = $(xml).find("chooseErr1").find(langName).text().trim();

        heb.txtReady = $(xml).find("txtReady").find(langName).text().trim();
        heb.txtfirstQ = $(xml).find("txtfirstQ").find(langName).text().trim();

        heb.kotEdit1 = $(xml).find("kotEdit1").find(langName).text().trim();
        heb.kotEdit2 = $(xml).find("kotEdit2").find(langName).text().trim();
        heb.btEnd = $(xml).find("btEnd").find(langName).text().trim();
        heb.btLike = $(xml).find("btLike").find(langName).text().trim();

        heb.txtMoreImg = $(xml).find("txtMoreImg").find(langName).text().trim();

        heb.txtOnlyOne = $(xml).find("txtOnlyOne").find(langName).text().trim();

        heb.seeYou = $(xml).find("seeYou").find(langName).text().trim();

        heb.sendErr1 = $(xml).find("sendErr1").find(langName).text().trim();
        heb.sendErr2 = $(xml).find("sendErr3").find(langName).text().trim();
        heb.sendErr3 = $(xml).find("sendErr3").find(langName).text().trim();

        heb.openText = $(xml).find("openText").find(langName).text().trim();
        heb.openTextKot = $(xml).find("openTextKot").find(langName).text().trim();

        heb.nameErr = $(xml).find("nameErr").find(langName).text().trim();
        heb.emailErr1 = $(xml).find("emailErr1").find(langName).text().trim();
        heb.emailErr2 = $(xml).find("emailErr2").find(langName).text().trim();
        langObj[langName] = heb;
      }
      langObj = langObj[obj.Lang];

      $("#btStart").text(langObj.btStart);
      $("#txtName1").text(langObj.txtName1);
      $("#txtEmail1").text(langObj.txtEmail1);
      $("#txtEmail2").text(langObj.txtEmail2);
      $(".btContin").text(langObj.btContin);

      $("#txtOnlyOne").text(langObj.txtOnlyOne);
      $("#txtOnlyOne2").text(langObj.txtOnlyOne);

      $("#btCamYes").text(langObj.btCamYes);
      $("#btCamNo").text(langObj.btCamNo);
      $("#btCameraSnap").text(langObj.btCameraSnap);

      $("#stage1Kot").text(langObj.stage1Kot);
      $("#stage1").html(langObj.stage1);
      $("#stage2Kot").text(langObj.stage2Kot);
      $("#stage2").html(langObj.stage2);
      $("#txtMoreImg").html(langObj.txtMoreImg);

      $("#txtfirstQ").text(langObj.txtfirstQ);
      $("#txtReady ").text(langObj.txtReady);

      $("#kotEdit1").text(langObj.kotEdit1);
      $("#kotEdit2").text(langObj.kotEdit2);
      $("#btEnd").text(langObj.btEnd);
      $("#btLike").html(langObj.btLike);

      $("#openText").html(langObj.openText);
      $("#openTextKot").html(langObj.openTextKot);

      console.log("ססססססססססססס", langObj);

      cssLang();
    } catch (err) {
      alert(err.message);
    }
  }
  function reset_animation(el) {
    el.css("animation", "none");
    el.css("animation", "null");
  }

  var imgString;
  var imgStr;
  function saveToImageMain() {
    $("#loader").css("display", "flex");
    var t = $("#boxCon8");

    $("#boxCon8").css("position", "fixed");
    $("#boxCon8").css("left", "0");
    $("#boxCon8").css("top", "0");

    window.scrollTo(0, 0);
    setTimeout(function () {
      html2canvas(t[0], {
        scrollY: 0,
        width: 1920,
        height: 1080,
        scale: 1,
        scrollX: 0,

        letterRendering: true,

        useCORS: true,
      }).then((canvas) => {
        imgString = canvas.toDataURL("image/jpeg");

        // // sendFile2(imgString);

        //var a = document.createElement('a');
        //a.href = imgString;
        //a.download = "image.png";
        //document.body.appendChild(a);
        //a.click();
        //document.body.removeChild(a);

        imgStr = imgString.replace(/^data:image\/jpeg;base64,/, "");
        makeFinal();
        download10();
        // sendFile(imgStr);
        // $('#boxCon8').css({ 'zoom': scale });
      });
    }, 1000);

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
    ctx.drawImage(img, 0, 0, img.width, img.height, centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
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
            } else {
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

        var img = new Image();
        var imgPath = mainArrImageName[i][i2];

        img.src = imgPath;

        $(img).appendTo(box1);
        img.onload = function () {
          imageArray.push(this);
        };
        img.onerror = function (e) {
          console.log(e.message);
        };

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
      });
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
      } else {
        var count = checkLimit();
        var ImageLimit = mainArr[mainIndex].ImageLimit;
        var chooseTextErr = langObj.chooseErr2;
        if (ImageLimit != 1) {
          // chooseTextErr += ImageLimit + " תמונות ";
          // chooseTextErr
        } else {
          chooseTextErr = langObj.chooseErr1;
        }

        if (count == ImageLimit) {
          getPic();
          // $(this).css("background-color", "rgba(250,0,0,0.5)");
          makeNext();
        } else {
          alert(chooseTextErr);
        }
      }
    });
  }

  function camera1() {
    //  'user' -front
    // "environment"-rear
    $("#btCon1").hide();
    $("#snapCon1").show();

    $("#my_camera").removeAttr("style");
    const webcamElement = document.getElementById("webcam");
    const canvasElement = document.getElementById("canvas");
    const snapSoundElement = document.getElementById("snapSound");
    try {
      webcam = new Webcam(webcamElement, mode, canvasElement, snapSoundElement);

      webcam
        .start()
        .then((result) => {
          isCameraBlock = false;
          console.log("webcam started");
          //var vid = $("#my_camera").find("video");
        })
        .catch((err) => {
          isCameraBlock = true;
          askForPer();
          //alert(err);
          // console.log(arr);
        });
    } catch (e) {
      alert(e.message);
    }
    $("#camRes").hide();
    setCameraBt();

    $("#camRes").hide();
    function setCameraBt() {
      $("#btCamBtCon").hide();
      $("#btCameraSnap").show();
      $("#btCamYes").on("click", function () {
        if (editMode) {
          showScreen(3);
        } else {
          $("#camRes").show();
          showExplain(1);
        }
        // showScreen(3);
      });

      $("#btCamNo").on("click", function () {
        $("#camRes").hide();
        $("#camRes").empty();
        $("#btCamBtCon").hide();
        $("#btCameraSnap").show();
      });
      $("#btCameraSnap").on("click", function () {
        if (isCameraBlock == false) {
          snap3();
          $("#btCamBtCon").show();
          $("#btCameraSnap").hide();
        } else {
          if (confirm(langObj.noCameraErr)) {
            $("#btCamYes").click();
            console.log("Thing was saved to the database.");
          } else {
            askForPer();

            console.log("Thing was not saved to the database.");
          }
        }
      });
    }

    function snap3() {
      var video = $("video")[0];
      var w = video.videoWidth;
      var h = video.videoHeight;

      var canvas = document.createElement("canvas");

      canvas.width = 300;
      canvas.height = 300;
      canvas.style.zIndex = 8;

      var body = document.getElementsByTagName("body")[0];
      //body.appendChild(canvas);

      var context = canvas.getContext("2d");
      if (mode == "user") {
        context.drawImage(video, (w - 300) / 2, (h - 300) / 2, 300, 300, 0, 0, 300, 300);
      }

      imgString = canvas.toDataURL("image/jpeg");
      userImage = imgString.replace(/^data:image\/jpeg;base64,/, "");
      $("#camRes").show();
      $("#camRes").html('<img src="' + imgString + '"/>');
      $("#canvasConmainImage").html('<img src="' + imgString + '"/>');
      $("#camRes").show();
    }
  }

  function askForPer() {
    navigator.getUserMedia(
      { audio: false, video: true },
      function (stream) {
        stream.getTracks().forEach((x) => x.stop());
      },
      (err) => console.log(err)
    );

    navigator.permissions.query({ name: "camera" }).then((res) => {
      res.onchange = (e) => {
        // detecting if the event is a change
        if (e.type === "change") {
          // checking what the new permissionStatus state is
          const newState = e.target.state;
          if (newState === "denied") {
            alert("גישה למצלמה נחסמה");
          } else if (newState === "granted") {
            camera1();
            // alert('We will be together forever!')
          } else {
            alert("Thanks for reverting things back to normal");
          }
        }
      };
    });
  }

  function read22() {
    try {
      var path;

      path = host + "appMahutData/appMahutData" + obj.Folder + "/images/p";

      for (let i2 = 0; i2 < mainArr.length; i2++) {
        var path2 = path + i2;
        // -חוזקות -תלמדים ונוער
        if (obj.Lang == "arb" && (obj.Folder == 2 || obj.Folder == 4) && (i2 == 5 || i2 == 2)) {
          path2 = path2 + "-" + obj.Lang;
        }

        // ערכים אנשי חינוך
        if (obj.Lang == "arb" && obj.Folder == 0 && i2 == 2) {
          path2 = path2 + "-" + obj.Lang;
        }

        console.log("111", path2);
        readAllFilesWeb(path2, i2, function () {
          console.log(path + i2);
          if (i2 == mainArr.length - 1) {
            setTimeout(function () {
              buildTable();
              starTheGame();
            }, 2000);
          }
        });
      }
    } catch (e) {
      console.log("xxxxxxxxxxxxx" + e.message);
    }
  }

  function readAllFilesWeb(path, index, callback1) {
    var listArr = [];
    for (i = 1; i < 25; i++) {
      var str = path + "/" + i + ".jpg";
      listArr.push(str);
    }
    mainArrImageName[index] = listArr;
    console.log(listArr);
    callback1();
    //$.get(path, function (data) {
    //    var listArr = [];

    //    $(data).find("a").attr("href", function (i, val) {
    //        if (val.match(/\.(jpe?g|png|gif)$/)) {
    //            listArr.push(val);
    //        }
    //    })

    //    mainArrImageName[index] = listArr;
    //    console.log(listArr);
    //    callback1()

    //})
    //    .fail(function (xhr, status, error) {
    //            alert("ssss");
    //    });
  }

  function download10() {
    $("#loader").css("display", "none");
    console.log(imgString);
    var blob = new Blob([imgString], { type: "data:image/jpeg;base64" });
    try {
      saveAs(imgString, "image.jpeg");
    } catch (e) {
      console.log("000000000000000", e);
    }
    // }, 1000)
  }

  var obj = new Object();
  gameDataGood();

  function gameDataGood() {
    obj.Folder = 0;
    obj.Lang = "heb";
    $(".txtUseMail").hide();
    $("#mail2").hide();
    // sourcePathXml = host + "appMahutData/appMahutData" + obj.Folder + "/myXml.xml?";
    // callXml();
    setMainArr();
    setLangArr();
    // callXmlLang();
  }
});
