interface MathJax {
	Hub: MathJaxHub;
}

interface MathJaxHub {
	Register: MathJaxHubRegister;
}

interface MathJaxHubRegister {
	StartupHook(type: string, fn: Function);
}

declare var MathJax: MathJax;