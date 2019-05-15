var keystone = require('keystone');
var Carreer = keystone.list('Carreer');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'carreer';
	locals.formData = req.body || {};
	locals.validationErrors = {};
	locals.enquirySubmitted = false;

	// On POST requests, add the Enquiry item to the database
	view.on('post', { action: 'carreer' }, function (next) {

		var newCarreer = new Carreer.model();
		var updater = newCarreer.getUpdateHandler(req);

		updater.process(req.body, {
			flashErrors: true,
			fields: 'fName, lName, phone, email, linkled',
			errorMessage: 'There was a problem submitting your carreer form:',
		}, function (err) {
			if (err) {
				locals.validationErrors = err.errors;
			} else {
				locals.enquirySubmitted = true;
			}
			next();
		});
	});
	view.render('carreer');
};
