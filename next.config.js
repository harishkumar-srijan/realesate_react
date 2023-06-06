module.exports = {
	reactStrictMode: true,
	images: {
		domains: ['bayut-production.s3.eu-central-1.amazonaws.com'],
	},
	rules: [
		{
			test: /\.(png|jpe?g|gif|svg)$/i,
			use: [
				{
					loader: 'file-loader',
				},
			],
		},
	],
};
