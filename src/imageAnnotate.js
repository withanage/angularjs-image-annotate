angular.module('nimbleworks.imageAnnotate', []).directive('nimImageAnnotate', function () {
    var canvas, clear, context, currentX, currentY, directive, draw, getMousePosition, lineCol, lineWidth, mouseIsDown, oldX, oldY;
    getMousePosition = function (evt) {
        return {
            x: evt.pageX - canvas.offsetLeft,
            y: evt.pageY - canvas.offsetTop
        };
    };
    draw = function (evt) {
        if (!mouseIsDown) {
            currentX = null;
            currentY = null;
            return;
        }
        if (!currentX || !currentY) {
            currentX = getMousePosition(evt).x;
            currentY = getMousePosition(evt).y;
        }
        oldX = currentX;
        oldY = currentY;
        currentX = getMousePosition(evt).x;
        currentY = getMousePosition(evt).y;
        context.beginPath();
        context.moveTo(oldX, oldY);
        context.lineTo(currentX, currentY);
        context.strokeStyle = lineCol;
        context.lineJoin = 'round';
        context.lineCap = 'round';
        context.lineWidth = lineWidth;
        context.stroke();
        context.closePath();
    };
    clear = function () {
        context.clearRect(0, 0, canvas.width, canvas.height);
        return false;
    };
    directive = {
        restrict: 'E',
        replace: true,
        scope: {
            ngModel: '=',
            src: '@',
            width: '@',
            height: '@',
            lineOpacity: '@'
        },
        template: '<div><div style="background: url({{ src }}); width: {{ width }}px; height: {{ height }}px; cursor: crosshair;"><canvas width="{{ width }}" height="{{ height }}" style="opacity: {{ lineOpacity }}"></canvas></div><br /><div><button ng-click="clear()">Clear</button></div></div>',
        compile: function (element, attributes) {
            attributes.lineOpacity = attributes.lineOpacity || '.33';
            attributes.lineCol = attributes.lineCol || 'rgba(255, 255, 0, 1)';
            attributes.lineWidth = attributes.lineWidth || 20;
            return function (scope, element) {
                var $canvas;
                lineCol = attributes.lineCol;
                lineWidth = attributes.lineWidth;
                canvas = element.find('canvas')[0];
                context = canvas.getContext('2d');
                $canvas = angular.element(canvas);
                $canvas.on('mousedown', function () {
                    mouseIsDown = true;
                });
                $canvas.on('mouseup', function () {
                    mouseIsDown = false;
                    scope.ngModel = canvas.toDataURL();
                });
                $canvas.on('mousemove', function (evt) {
                    draw(evt);
                });
                scope.clear = clear;
            }
        }
    };
    return directive;
});