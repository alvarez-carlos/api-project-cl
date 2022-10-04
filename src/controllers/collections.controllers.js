import Collection from "../models/Collection";

export const getAllCollections = (req, res, next) => {
  try {
    Collection.find()
      .exec()
      .then((response) => res.status(200).send(response));
  } catch (error) {
    next(error);
  }
};

export const getCollectionById = (req, res, next) => {
  try {
    Collection.findById(req.params.id)
      .exec()
      .then((response) => res.status(200).send(response));
  } catch (error) {
    next(error);
  }
};

export const createCollection = (req, res, next) => {
  try {
    Collection.create(req.body).then((response) =>
      res.status(201).send(response)
    );
  } catch (error) {
    next(error);
  }
};