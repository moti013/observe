


var div10 = $("<div/>")
div10.attr("id", "btSaveDraw");
div10.appendTo($("#screen8"));
div10.addClass("btSaveDrawclass");
div10.text("שמירה");
div10.on("click", function () {

    var canvas2 = document.getElementById("canvas");
    ctx = canvas2.getContext('2d');
   

    // create backing canvas
    var backCanvas = document.createElement('canvas');
    $("#drawDiv1").empty();
    $("#drawDiv1").append($(backCanvas)[0]);

    var w1 = 400;
    var h1 = 300;
    backCanvas.width = w1;// canvas.width;

    backCanvas.height = h1;// canvas.height;
    var backCtx = backCanvas.getContext('2d');

    backCtx.beginPath();
    backCtx.fillStyle = "#ffffff";

    backCtx.fillRect(0, 0, w1, h1);
    // save main canvas contents
    backCtx.drawImage(canvas2, 0, 0, w1, h1);



})
var curColor = "red";
var colArr = ["red", "blue", "pink", "green", "yellow",
    "gray", "coral", "Violet", "cyan", "Brown"];
for (let i = 0; i < colArr.length; i++) {

    var div1 = $("<div/>");
    div1.addClass("btColor");
    div1.css("background", colArr[i]);
    div1.data("color", colArr[i]);
    div1.appendTo($("#colorCon"));
    div1.on("click", function () {
        var t = $(this);
        curColor = t.data("color");
       
    })

}
var drawingApp = (function () {

    "use strict";

    var canvas,
        context,
        canvasWidth = 1200,
        canvasHeight = 800,
        colorPurple = "#cb3594",
        colorGreen = "#659b41",
        colorYellow = "#ffcf33",
        colorBrown = "#986928",
        outlineImage = new Image(),
        crayonImage = new Image(),
        markerImage = new Image(),
        eraserImage = new Image(),
        crayonBackgroundImage = new Image(),
        markerBackgroundImage = new Image(),
        eraserBackgroundImage = new Image(),
        crayonTextureImage = new Image(),
        clickX = [],
        clickY = [],
        clickColor = [],
        clickTool = [],
        clickSize = [],
        clickDrag = [],
        paint = false,
       
        curTool = "crayon",
        curSize = "normal",
        mediumStartX = 18,
        mediumStartY = 19,
        mediumImageWidth = 93,
        mediumImageHeight = 46,
        drawingAreaX = 111,
        drawingAreaY = 11,
        drawingAreaWidth = 267,
        drawingAreaHeight = 200,
        toolHotspotStartY = 23,
        toolHotspotHeight = 38,
        sizeHotspotStartY = 157,
        sizeHotspotHeight = 36,
        totalLoadResources = 8,
        curLoadResNum = 0,
        sizeHotspotWidthObject = {
            huge: 39,
            large: 25,
            normal: 18,
            small: 16
        },

        // Clears the canvas.
        clearCanvas = function () {

            context.clearRect(0, 0, canvasWidth, canvasHeight);
        },

        // Redraws the canvas.
        redraw = function () {
            context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas

            context.strokeStyle = "#df4b26";
            context.lineJoin = "round";
            context.lineWidth = 5;

            for (var i = 0; i < clickX.length; i++) {
                context.beginPath();
                if (clickDrag[i] && i) {
                    context.moveTo(clickX[i - 1], clickY[i - 1]);
                } else {
                    context.moveTo(clickX[i] - 1, clickY[i]);
                }
                context.lineTo(clickX[i], clickY[i]);
                context.closePath();
               context.strokeStyle = clickColor[i];
                context.stroke();
            }
        },

        // Adds a point to the drawing array.
        // @param x
        // @param y
        // @param dragging
        addClick = function (x, y, dragging) {
            clickX.push(x);
            clickY.push(y);
            clickDrag.push(dragging);
           clickColor.push(curColor);
        },

        // Add mouse and touch event listeners to the canvas
        createUserEvents = function () {

            var press = function (e) {

                // Mouse down location
                var sizeHotspotStartX,
                    mouseX = (e.changedTouches ? e.changedTouches[0].pageX : e.pageX) - this.offsetLeft,
                    mouseY = (e.changedTouches ? e.changedTouches[0].pageY : e.pageY) - this.offsetTop;

                if (mouseX < drawingAreaX) { // Left of the drawing area
                    if (mouseX > mediumStartX) {
                        if (mouseY > mediumStartY && mouseY < mediumStartY + mediumImageHeight) {
                            curColor = colorPurple;
                        } else if (mouseY > mediumStartY + mediumImageHeight && mouseY < mediumStartY + mediumImageHeight * 2) {
                            curColor = colorGreen;
                        } else if (mouseY > mediumStartY + mediumImageHeight * 2 && mouseY < mediumStartY + mediumImageHeight * 3) {
                            curColor = colorYellow;
                        } else if (mouseY > mediumStartY + mediumImageHeight * 3 && mouseY < mediumStartY + mediumImageHeight * 4) {
                            curColor = colorBrown;
                        }
                    }
                } else if (mouseX > drawingAreaX + drawingAreaWidth) { // Right of the drawing area

                    if (mouseY > toolHotspotStartY) {
                        if (mouseY > sizeHotspotStartY) {
                            sizeHotspotStartX = drawingAreaX + drawingAreaWidth;
                            if (mouseY < sizeHotspotStartY + sizeHotspotHeight && mouseX > sizeHotspotStartX) {
                                if (mouseX < sizeHotspotStartX + sizeHotspotWidthObject.huge) {
                                    curSize = "huge";
                                } else if (mouseX < sizeHotspotStartX + sizeHotspotWidthObject.large + sizeHotspotWidthObject.huge) {
                                    curSize = "large";
                                } else if (mouseX < sizeHotspotStartX + sizeHotspotWidthObject.normal + sizeHotspotWidthObject.large + sizeHotspotWidthObject.huge) {
                                    curSize = "normal";
                                } else if (mouseX < sizeHotspotStartX + sizeHotspotWidthObject.small + sizeHotspotWidthObject.normal + sizeHotspotWidthObject.large + sizeHotspotWidthObject.huge) {
                                    curSize = "small";
                                }
                            }
                        } else {
                            if (mouseY < toolHotspotStartY + toolHotspotHeight) {
                                curTool = "crayon";
                            } else if (mouseY < toolHotspotStartY + toolHotspotHeight * 2) {
                                curTool = "marker";
                            } else if (mouseY < toolHotspotStartY + toolHotspotHeight * 3) {
                                curTool = "eraser";
                            }
                        }
                    }
                }
                paint = true;
                addClick(mouseX, mouseY, false);
                redraw();
            },

                drag = function (e) {

                    var mouseX = (e.changedTouches ? e.changedTouches[0].pageX : e.pageX) - this.offsetLeft,
                        mouseY = (e.changedTouches ? e.changedTouches[0].pageY : e.pageY) - this.offsetTop;

                    if (paint) {
                        addClick(mouseX, mouseY, true);
                        redraw();
                    }
                    // Prevent the whole page from dragging if on mobile
                    e.preventDefault();
                },

                release = function () {
                    paint = false;
                    redraw();
                },

                cancel = function () {
                    paint = false;
                };

            // Add mouse event listeners to canvas element
            canvas.addEventListener("mousedown", press, false);
            canvas.addEventListener("mousemove", drag, false);
            canvas.addEventListener("mouseup", release);
            canvas.addEventListener("mouseout", cancel, false);

            // Add touch event listeners to canvas element
            canvas.addEventListener("touchstart", press, false);
            canvas.addEventListener("touchmove", drag, false);
            canvas.addEventListener("touchend", release, false);
            canvas.addEventListener("touchcancel", cancel, false);

        },

        // Calls the redraw function after all neccessary resources are loaded.
        resourceLoaded = function () {

            curLoadResNum += 1;
            // if (curLoadResNum === totalLoadResources) {
            redraw();
            createUserEvents();
            // }
        },

        // Creates a canvas element, loads images, adds events, and draws the canvas for the first time.
        init = function () {

            // Create the canvas (Neccessary for IE because it doesn't know what a canvas element is)
            canvas = document.createElement('canvas');
            canvas.setAttribute('width', canvasWidth);
            canvas.setAttribute('height', canvasHeight);
            canvas.setAttribute('id', 'canvas');
            document.getElementById('canvasDiv').appendChild(canvas);
            if (typeof G_vmlCanvasManager !== "undefined") {
                canvas = G_vmlCanvasManager.initElement(canvas);
            }
            context = canvas.getContext("2d"); // Grab the 2d canvas context
            resourceLoaded();
            // Note: The above code is a workaround for IE 8 and lower. Otherwise we could have used:
            //     context = document.getElementById('canvas').getContext("2d");

            // Load images
            //crayonImage.onload = resourceLoaded;
            //crayonImage.src = "images/crayon-outline.png";

            //markerImage.onload = resourceLoaded;
            //markerImage.src = "images/marker-outline.png";

            //eraserImage.onload = resourceLoaded;
            //eraserImage.src = "images/eraser-outline.png";

            //crayonBackgroundImage.onload = resourceLoaded;
            //crayonBackgroundImage.src = "images/crayon-background.png";

            //markerBackgroundImage.onload = resourceLoaded;
            //markerBackgroundImage.src = "images/marker-background.png";

            //eraserBackgroundImage.onload = resourceLoaded;
            //eraserBackgroundImage.src = "images/eraser-background.png";

            //crayonTextureImage.onload = resourceLoaded;
            //crayonTextureImage.src = "images/crayon-texture.png";

            //outlineImage.onload = resourceLoaded;
            //outlineImage.src = "images/watermelon-duck-outline.png";
        };

    return {
        init: init
    };
}());

drawingApp.init();

