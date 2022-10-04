import About from "../models/About";

export const getAllAbout = (req, res, next) => {
  try {
    About.find()
      .exec()
      .then((response) => res.status(200).send(response));
  } catch (error) {
    next(error);
  }
};

export const getAboutById = (req, res, next) => {
  try {
    About.findById(req.params.id)
      .exec()
      .then((response) => res.status(200).send(response));
  } catch (error) {
    next(error);
  }
};

export const createAbout = (req, res, next) => {
  try {
    About.create(req.body).then((response) =>
      res.status(201).send(response)
    );
  } catch (error) {
    next(error);
  }
};