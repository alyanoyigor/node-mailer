const nodemailer = require('nodemailer');
const { data } = require('./pass');

const sentEmail = (array) => {
	const transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: data[0].email,
			pass: data[0].pass,
		},
		tls: {
			rejectUnauthorized: false,
		},
	});

	const mailOptions = {
		from: 'email',
		to: array.join(','),
		subject: '',
		text: '',
		html: '',
		attachments: [],
	};

	transporter.sendMail(mailOptions, (err, info) => {
		if (err) {
			console.log(err);
		} else {
			console.log(`Email sent to ${mailOptions.to}`);
		}
	});
};

sentEmail([]);
