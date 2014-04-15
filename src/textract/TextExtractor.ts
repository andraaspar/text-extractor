/// <reference path='NodeRange.ts'/>

module textract {
	export class TextExtractor {
		private jQuery: JQuery;

		private text = '';
		private nodeRanges: NodeRange[];

		constructor(jq: JQuery) {
			this.jQuery = jq;

			this.collectText(jq[0]);
		}

		collectText(parent: Node): void {
			if (parent.nodeType == 3) {
				this.processNode(parent);
			} else {
				for (var i = 0; i < parent.childNodes.length; i++) {
					this.collectText(parent.childNodes[i]);
				}
			}
		}

		processNode(node: Node): NodeRange {
			var srcText = node.textContent;
			if (typeof srcText !== 'string') srcText = <string>node['innerText']; // IE8

			var resultText = srcText.replace(/\s+/g, ' ').replace(/^\s+/, '').replace(/\s+$/, '');

			if (resultText) {
				var result = new NodeRange();
				result.startIndex = this.text.length;
				result.endIndex = result.startIndex + resultText.length;
				result.textNode = node;
				
				this.text += resultText;
			} else {
				var result: NodeRange = null;
			}
			return result;
		}
		
		getRangeByNode(node: Node): NodeRange {
			for (var i = 0, n = this.nodeRanges.length; i < n; i++) {
				var nodeRange = this.nodeRanges[i];
				if (nodeRange.textNode === node) return nodeRange;
			}
			return null;
		}
	}
}