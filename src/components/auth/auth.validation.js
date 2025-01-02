import Joi from "joi";
const registerUser = Joi.object({
  name: Joi.string().min(2).max(15).required().messages({
    "string.empty": "Name is not empty",
    "any.required": "Name is required",
    "string.min": "Name must be a 2 characters",
    "string.max": "Name must be a 15 characters",
  }),
  email: Joi.string().email().required().messages({
    "string.email": "Invalid email format",
    "any.required": "Email is required",
  }),
  password: Joi.string().min(6).max(10).required().messages({
    "string.empty": "Password can't be empty",
    "any.required": "Password is required",
    "string.min": "Password must be a 6 min characters",
    "string.max": "Password must be a max 10 characters",
  }),
});
const loginUser = Joi.object({
  email: Joi.string().email().required().messages({
    "string.email": "invalid email format",
    "any.required": "Email is required",
  }),
  password: Joi.string().required().messages({
    "string.empty": "Password can't be empty",
    "any.required": "Password is required",
  }),
});

const resetPassword = Joi.object({
  currentPassword: Joi.string().required().messages({
    "string.empty": "currentPassword can't be empty",
    "any.required": "currentPassword is required",
  }),
  newPassword: Joi.string().required().messages({
    "string.empty": "newPassword can't be empty",
    "any.required": "newPassword is required",
  }),
  confirmPassword: Joi.string().required().messages({
    "string.empty": "confirmPassword can't be empty",
    "any.reqired": "confirmPassword is required",
  }),
});
export default {
  registerUser,
  loginUser,
  resetPassword,
};
