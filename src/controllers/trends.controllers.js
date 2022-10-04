import Trends from "../models/Trends";

export const getAllTrends = (req, res, next) => {
  try {
    Trends.find()
      .exec()
      .then((response) => res.status(200).send(response));
  } catch (error) {
    next(error);
  }
};

export const getTrendById = (req, res, next) => {
  try {
    Trends.findById(req.params.id)
      .exec()
      .then((response) => res.status(200).send(response));
  } catch (error) {
    next(error);
  }
};

export const createTrend = (req, res, next) => {
  try {
    Trends.create(req.body).then((response) =>
      res.status(201).send(response)
    );
  } catch (error) {
    next(error);
  }
};