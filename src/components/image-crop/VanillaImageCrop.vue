<template>
     <div class="table">
            <div class="tableRow">
                <div class="tableCell box">
                    <canvas @mousedown="onMouseDown" id="panel" width="380" height="380"></canvas>
                </div>
                <div class="tableCell box">
                    <img src="" id="croppedImage">
                </div>
            </div>
         <button class="button" @click="initialize">Run Init</button>
     </div>
</template>

<script>
    export default{
        data: function () {
            return {
                ctx: null,
                image: null,
                click: false,
                downPointX: 0,
                downPointY: 0,
                lastPointY: 0,
                hoverBoxSize: 0,
                cropedFile: null,
                resize: false,
                canvasBackgroundColor: '#FFFFFF',
            }
        },
        created: function() {
        },
        methods: {
            initialize: function () {
                this.ctx = document.getElementById('panel').getContext("2d");
                console.log(this.ctx);
                var imageUploader = document.getElementById('imageLoader');
                this.initCanvas();
                //document.getElementById("cropBttn").onclick = this.cropImage.bind(this);
            },
            initCanvas: function () {
                var self = this;
                this.image = new Image();
                this.image.setAttribute('crossOrigin', 'anonymous'); //optional,  it is needed only if your image is not avalible on same domain.
                this.image.src = "http://icodingclub.github.io/imagecropper/steve-jobs.jpg";
                this.image.onload = function () {
                    self.ctx.canvas.width = self.image.width;
                    self.ctx.canvas.height = self.image.height;
                    self.reDrawCanvas();
                    self.initEventsOnCanvas();
                };
            },
            reDrawCanvas: function() {
                this.clearCanvas();
                this.drawImage();
                this.drawSelRect();
                this.drawResizerBox();
            },
            clearCanvas: function() {
                this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
                this.ctx.fillStyle = this.canvasBackgroundColor;
                this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
            },
            drawImage: function() {
                this.ctx.drawImage(this.image, 0, 0);
            },
            drawSelRect: function() {
                this.ctx.strokeStyle = '#000000';
                this.ctx.lineWidth = 1;
                this.ctx.strokeRect(this.downPointX, this.downPointY, (this.lastPointX - this.downPointX), (this.lastPointY - this.downPointY));
            },
            drawResizerBox: function() {
                var centerPointX = (this.lastPointX + this.downPointX) / 2;
                var centerPointY = (this.lastPointY + this.downPointY) / 2;
                this.ctx.fillStyle = '#000000';
                this.ctx.lineWidth = 1;
                this.ctx.fillRect(centerPointX - this.hoverBoxSize, this.downPointY - this.hoverBoxSize, this.hoverBoxSize * 2, this.hoverBoxSize * 2);
                this.ctx.fillRect(this.lastPointX - this.hoverBoxSize, centerPointY - this.hoverBoxSize, this.hoverBoxSize * 2, this.hoverBoxSize * 2);
                this.ctx.fillRect(centerPointX - this.hoverBoxSize, this.lastPointY - this.hoverBoxSize, this.hoverBoxSize * 2, this.hoverBoxSize * 2);
                this.ctx.fillRect(this.downPointX - this.hoverBoxSize, centerPointY - this.hoverBoxSize, this.hoverBoxSize * 2, this.hoverBoxSize * 2);
            },
            initEventsOnCanvas: function() {
                this.ctx.canvas.onmousedown = this.onMouseDown;
                this.ctx.canvas.onmouseup = this.onMouseUp;
            },
            onMouseDown: function(e) {
                var loc = this.windowToCanvas(e.clientX, e.clientY);
                e.preventDefault();
                this.click = true;
                if (!this.resize) {
                    this.ctx.canvas.onmousemove = this.onMouseMove;
                    this.downPointX = loc.x;
                    this.downPointY = loc.y;
                    this.lastPointX = loc.x;
                    this.lastPointY = loc.y;
                }
            },
            onMouseUp: function(e) {
                e.preventDefault();
                this.ctx.canvas.onmousemove = this.onImageResize;
                this.click = false;
            },
            onMouseMove: function(e) {
                e.preventDefault();
                if (this.click) {
                    var loc = this.windowToCanvas(e.clientX, e.clientY);
                    this.lastPointX = loc.x;
                    this.lastPointY = loc.y;
                    this.reDrawCanvas();
                }
            },
            windowToCanvas: function(x, y) {
                var canvas = this.ctx.canvas,
                    bbox = canvas.getBoundingClientRect();
                return {
                    x: x - bbox.left * (canvas.width / bbox.width),
                    y: y - bbox.top * (canvas.height / bbox.height)
                };
            },

        }
    }
</script>

<style>
    .table {
        display: table;
        border-collapse: separate;
        border-spacing: 10px 50px;
    }
    .tableRow {
        display: table-row;
    }
    .tableCell {
        display: table-cell;
        vertical-align: top;
    }
</style>