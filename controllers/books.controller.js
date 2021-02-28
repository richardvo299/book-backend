const Book = require("../models/book");

const createBook = async (req, res) => {
	try {
		const { genres, title, description, author } = req.body;

		const book = new Book({ genres, title, description, author, owner: req.userId });

		await book.save();

		res.status(201).json({
			success: true,

			data: book,

			message: `Book ${book.title} created!`
		});
	} catch (err) {
		res.status(400).json({
			success: false,

			error: err.message
		});
	}
};

const getBooks = async (req, res) => {
	try {
		const books = await Book.find({}).populate("author").populate("genres", "-_id -__v");

		res.status(200).json({
			success: true,

			data: books,

			message: `${books.length} books found!`
		});
	} catch (err) {
		res.status(400).json({
			success: false,

			error: err.message
		});
	}
};

const getSingleBook = async (req, res) => {
	try {
		const book = await Book.findById(req.params.id).populate("author").populate("genres", "-_id -__v");

		res.status(200).json({
			success: true,

			data: book,

			message: `Book ${book.id} found!`
		});
	} catch (err) {
		res.status(400).json({
			success: false,

			error: err.message
		});
	}
};

const updateBook = async (req, res) => {
	try {
		const book = await Book.findByIdAndUpdate(
			req.params.id,

			{ 
				genres: req.body.genres,
				title: req.body.title,
				description: req.body.description,
				author: req.body.author
			},

			{ new: true }
		).populate("author").populate("genres", "-_id -__v");

		res.status(200).json({
			success: true,

			data: book,

			message: `Book ${book.id} updated!`
		});
	} catch (err) {
		res.status(400).json({
			success: false,

			error: err.message
		});
	}
};

const deleteBook = async (req, res) => {
	try {
		const book = await Book.findByIdAndDelete(req.params.id);

		res.status(204).json({
			success: true,

			data: book,

			message: `Deleted book ${book.id}`
		});
	} catch (err) {
		res.status(400).json({
			success: fail,

			error: err.message
		});
	}
};

const getMyBooks = async (req, res) => {
	try {
		const books = await Book.find({ owner: req.userId }).populate("author").populate("genres", "-_id -__v");

		res.status(200).json({
			success: true,

			data: books,

			message: `${books.length} books found!`
		});
	} catch (err) {
		res.status(400).json({
			success: false,

			error: err.message
		});
	}
};

module.exports = {
	createBook,
    getBooks,
    getSingleBook,
    updateBook,
    deleteBook,
	getMyBooks,
};