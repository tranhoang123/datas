var keystone = require('keystone');
var Types = keystone.Field.Types;
var Candidate = keystone.List('Candidate', {
	nocreate: true,
	noedit: true,
});

Candidate.add({
	fName: { type: String, require: true },
	lName: { type: String, require: true },
	phone: { type: Number, require: true },
	email: { type: Types.Email, unique: true },
	linkled: { type: Types.Url, unique: true },
});

Candidate.register();

