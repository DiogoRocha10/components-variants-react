export default {
	clearMocks: true,

	collectCoverage: true,

	coverageDirectory: "coverage",

	coverageProvider: "v8",

	testEnvironment: "jsdom",
	moduleNameMapper: {
		"\\.(css|less)$": "identity-obj-proxy",
	},
	transform: {
		"^.+\\.(t|j)sx?$": [
			"@swc/jest",
			{
				jsc: {
					parser: {
						syntax: "typescript",
						tsx: true,
						decorators: true,
					},
					keepClassNames: true,
					transform: {
						legacyDecorator: true,
						decoratorMetadata: true,
						react: {
							runtime: "automatic",
						},
					},
				},
				module: {
					type: "es6",
					noInterop: false,
				},
			},
		],
	},
}