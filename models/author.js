const mongoose = require("mongoose");

const authorSchema = mongoose.Schema({
	name: {
		type: String,

		required: true,

		trim: true,

		unique: true
	}
});

const Author = mongoose.model("Author", authorSchema);

module.exports = Author;