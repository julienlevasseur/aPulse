export default {
	interval			: 15, // Interval in minutes between each pulse
	nDataPoints			: 90, // Number of datapoints to display on the dashboard
	responseTimeGood	: 300, // In milliseconds, this and below will be green
	responseTimeWarning	: 600, // In milliseconds, above this will be red
	timeout				: 5000, // In milliseconds, requests will be aborted above this
	verbose				: true, // Whether or not to output pulse messages in the console
	readableStatusJson	: true, // Format status.json to be human readable
	logsMaxDatapoints	: 200, // Maximum datapoints history to keep (per endpoint)
	telegram			: { // optional, tokens to send notifications through telegram
		botToken	: '', // Contact @BotFather on telegram to create a bot
		chatId		: '',// Send a message to the bot, then visit https://api.telegram.org/bot<token>/getUpdates to get the chatId
	},
	slack				: { // optional, tokens to send notifications through slack
		botToken	 : '',
		channelId	: '',
	},
	discord				: { // optional, tokens to send notifications through discord
		webhookUrl	: '',
	},
	twilio				: { // optional, tokens to send notifications through twilio (SMS)
		accountSid		: '',
		accountToken	: '',
		toNumber		: '',
		twilioNumber	: '',
	},
	sendgrid				: { // optional, tokens to send notifications through sendgrid (Email)
		apiKey			: '',
		toEmail			: '',
		toFromEmail		: '',
	},
	consecutiveErrorsNotify			: 1, // After how many consecutive Errors events should we send a notification
	consecutiveHighLatencyNotify	: 3, // After how many consecutive High latency events should we send a notification
	sites				: [ // List of sites to monitor
		{
			id				: 'julienlevasseurwebsite', // optional
			name			: 'www.julienlevasseur.ca',
			endpoints		: [ // Each site is a bunch of endpoints that can be tested
				{
					id				: 'homepage', // optional
					name			: 'Homepage', // optional
					link			: 'https://www.julienlevasseur.ca', // optional, for notifications and dashboard only, [defaults to endpoint.url], can be disabled by setting it to false
					url				: 'https://www.julienlevasseur.ca', // required
					request			: { // optional, fetch options
						method: 'GET',
					},
					mustFind		: 'Julien Levasseur', // optional, String | Array | Regex | Function | AsyncFunction
					mustNotFind		: /Page not found/i, // optional, String | Array | Regex | Function | AsyncFunction
					customCheck		: async (content, response)=>{return true;}, // optional, Function | AsyncFunction -> Run your own custom checks return false in case of errors
					validStatus		: [200], // optional, Which http status should be considered non errors [defaults to 200-299]
				}
			]
		},
		{
			id				: 'traefik', // optional
			name			: 'traefik.julienlevasseur.ca',
			endpoints		: [ // Each site is a bunch of endpoints that can be tested
				{
					id				: 'dashboard', // optional
					name			: 'Dashboard', // optional
					link			: 'https://www.julienlevasseur.ca', // optional, for notifications and dashboard only, [defaults to endpoint.url], can be disabled by setting it to false
					url				: 'https://www.julienlevasseur.ca', // required
					request			: { // optional, fetch options
						method: 'GET',
					},
					mustFind		: 'Julien Levasseur', // optional, String | Array | Regex | Function | AsyncFunction
					mustNotFind		: /Page not found/i, // optional, String | Array | Regex | Function | AsyncFunction
					customCheck		: async (content, response)=>{return true;}, // optional, Function | AsyncFunction -> Run your own custom checks return false in case of errors
					validStatus		: [200], // optional, Which http status should be considered non errors [defaults to 200-299]
				}
			]
		},
		{
			id				: 'consul_aws', // optional
			name			: 'consul-aws.julienlevasseur.ca',
			endpoints		: [ // Each site is a bunch of endpoints that can be tested
				{
					id				: 'dashboard', // optional
					name			: 'Dashboard', // optional
					link			: 'https://consul-aws.julienlevasseur.ca', // optional, for notifications and dashboard only, [defaults to endpoint.url], can be disabled by setting it to false
					url				: 'https://consul-aws.julienlevasseur.ca/ui/aws/services', // required
					request			: { // optional, fetch options
						method: 'GET',
					},
					mustFind		: 'Services', // optional, String | Array | Regex | Function | AsyncFunction
					mustNotFind		: /Page not found/i, // optional, String | Array | Regex | Function | AsyncFunction
					customCheck		: async (content, response)=>{return true;}, // optional, Function | AsyncFunction -> Run your own custom checks return false in case of errors
					validStatus		: [200], // optional, Which http status should be considered non errors [defaults to 200-299]
				}
			]
		}
	],
};