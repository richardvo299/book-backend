const Genre = require("../models/genre");

const createGenre = async (req, res) => {
	try {
		const { name } = req.body;

		const genre = new Genre({ name });

		await genre.save();

		res.status(201).json({
			success: true,

			data: genre,

			message: `Genre ${genre.name} created!`
		});
	} catch (err) {
		res.status(400).json({
			success: false,

			error: err.message
		});
	}
};

const getAllGenres = async (req, res) => {
	const genres = await Genre.find();
	res.json(genres);
}

const getSingleGenre = async (req, res) => {
	try {
		const genre = await Genre.findById(req.params.id);

		res.status(200).json({
			success: true,

			data: genre,

			message: `Genre ${genre.id} found!`
		});
	} catch (err) {
		res.status(400).json({
			success: false,

			error: err.message
		});
	}
};

const updateGenre = async (req, res) => {
	try {
		const genre = await Genre.findByIdAndUpdate(
			req.params.id,

			{ name: req.body.name },

			{ new: true }
		);

		res.status(200).json({
			success: true,

			data: genre,

			message: `Genre ${genre.id} updated!`
		});
	} catch (err) {
		res.status(400).json({
			success: false,

			error: err.message
		});
	}
};

const deleteGenre = async (req, res) => {
	try {
		const genre = await Genre.findByIdAndDelete(req.params.id);

		res.status(204).json({
			success: true,

			data: genre,

			message: `Deleted genre ${genre.id}`
		});
	} catch (err) {
		res.status(400).json({
			success: fail,

			error: err.message
		});
	}
};

module.exports = {
	createGenre,
    getAllGenres,
	getSingleGenre,
	updateGenre,
	deleteGenre,
};