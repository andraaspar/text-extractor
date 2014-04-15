/// <reference path='../../jquery.d.ts'/>
/// <reference path='../../mathjax.d.ts'/>
/// <reference path='../TextExtractor.ts'/>

module textract.test {
	export class Main {
		private domReady = false;
		private mathJaxReady = false;

		constructor() {
			jQuery(jQuery.proxy(this.onDOMLoaded, this));
			if ('MathJax' in window) {
				MathJax.Hub.Register.StartupHook("End", jQuery.proxy(this.onMathJaxReady, this));
			} else {
				this.mathJaxReady = true;
				this.initIfReady();
			}
		}

		onDOMLoaded(): void {
			console.log('DOM ready!');
			this.domReady = true;
			this.initIfReady();
		}

		onMathJaxReady(): void {
			console.log('MathJax ready!');
			this.mathJaxReady = true;
			this.initIfReady();
		}

		initIfReady(): void {
			if (this.mathJaxReady && this.domReady) {
				this.init();
			}
		}

		init(): void {
			console.log('Init!');
		}
	}
}

var textractTestMain = new textract.test.Main();
