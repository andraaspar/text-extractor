/// <reference path='../../jquery.d.ts'/>

module textract.test {
	export class Main {
		constructor() {
			jQuery(jQuery.proxy(this.onDOMLoaded, this));
		}
		
		onDOMLoaded() {
			console.log('Ready!');
		}
	}
}

var textractTestMain = new textract.test.Main();
