import Stores from "../models/Stores";

export const getAllStores = (req, res, next) => {
  try {
    Stores.find()
      .exec()
      .then((response) => res.status(200).send(response));
  } catch (error) {
    next(error);
  }
};

export const getStoreById = (req, res, next) => {
  try {
    Stores.findById(req.params.id)
      .exec()
      .then((response) => res.status(200).send(response));
  } catch (error) {
    next(error);
  }
};

export const createStore = (req, res, next) => {
  try {
    Stores.create(req.body).then((response) =>
      res.status(201).send(response)
    );
  } catch (error) {
    next(error);
  }
};