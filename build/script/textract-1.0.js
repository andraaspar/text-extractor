/// <reference path='../../jquery.d.ts'/>
/// <reference path='../../mathjax.d.ts'/>
var textract;
(function (textract) {
    (function (test) {
        var Main = (function () {
            function Main() {
                this.domReady = false;
                this.mathJaxReady = false;
                jQuery(jQuery.proxy(this.onDOMLoaded, this));
                if ('MathJax' in window) {
                    MathJax.Hub.Register.StartupHook("End", jQuery.proxy(this.onMathJaxReady, this));
                } else {
                    this.mathJaxReady = true;
                    this.initIfReady();
                }
            }
            Main.prototype.onDOMLoaded = function () {
                console.log('DOM ready!');
                this.domReady = true;
                this.initIfReady();
            };

            Main.prototype.onMathJaxReady = function () {
                console.log('MathJax ready!');
                this.mathJaxReady = true;
                this.initIfReady();
            };

            Main.prototype.initIfReady = function () {
                if (this.mathJaxReady && this.domReady) {
                    this.init();
                }
            };

            Main.prototype.init = function () {
                console.log('Init!');
            };
            return Main;
        })();
        test.Main = Main;
    })(textract.test || (textract.test = {}));
    var test = textract.test;
})(textract || (textract = {}));

var textractTestMain = new textract.test.Main();
