import joi from "joi";

export const bookSchema = joi.object({
  name: joi.string().min(2).required(),
});
