const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
	genres: [
		{
			type: mongoose.Schema.Types.ObjectId,
	
			ref: "Genre",
		}
	],

	title: {
		type: String,

		required: true,

		trim: true
	},

	description: {
		type: String,

		required: true,

		trim: true
	},

	author: {
		type: mongoose.Schema.Types.ObjectId,

		ref: "Author",

		required: true
	},

	owner: {
		type: mongoose.Schema.Types.ObjectId,

		ref: "User",
	},
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;