const User = require("../models/user");

const createUser = async (req, res) => {
	try {
		const { name, email, password, confirmPassword } = req.body;

		if (!confirmPassword) {
			return res.status(400).json({
			  success: false,
			  message: `please confirm password`,
			});
		  }
		  if (password !== confirmPassword) {
			return res.status(400).json({
			  success: false,
			  message: `password does not match!`,
			});
		  }
	  
		  const user = new User({
			name,
			email,
			password,
		  });
	  
		  await user.save();
	  
		  accessToken = await user.generateToken();
	  
		  res.status(201).json({
			success: true,
			data: user,
			token: accessToken,
			message: `User ${user.name} created!`,
		  });
		} catch (err) {
		  res.status(400).json({
			success: false,
			error: err.message,
		  });
		}
};

const getSingleUser = async (req, res) => {
	try {
	  const user = await User.findById(req.params.id);
  
	  res.status(200).json({
		success: true,
		data: user,
		messages: `User ${user.name} found!`,
	  });
	} catch (err) {
	  res.status(400).json({
		success: false,
		error: err.message,
	  });
	}
  };

const getCurrentUser = async (req, res, next) => {
	const userId = req.userId;
	const user = await User.findById(userId);
	if (!user)
		return res.status(400).json({
			success: false,

			error: "User not found!"
		});
	return res.status(200).json({
		success: true,
		data: user,
		message: "Get current user successfully!"
	});
};

const updateProfile = async (req, res, next) => {
	const userId = req.userId;
	try {
	  const user = await User.findByIdAndUpdate(req.userId, req.body, {
		new: true,
	  });
	  res.status(200).json({
		success: true,
		data: user,
		message: `User ${user.name} updated!`,
	  });
	} catch (err) {
	  res.status(400).json({
		success: false,
		error: err.message,
	  });
	}
  };

module.exports = {
	createUser,
	getSingleUser,
	getCurrentUser,
	updateProfile
}