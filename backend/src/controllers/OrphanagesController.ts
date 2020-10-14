import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Orphanage from "../models/Orphanage";
import orphanages_view from "../views/orphanages_view";
import * as Yup from "yup";

export default {
  async index(req: Request, resp: Response) {
    const orphanagesRespository = getRepository(Orphanage);

    const orphanages = await orphanagesRespository.find({
      relations: ["images"],
    });

    return resp.json(orphanages_view.renderMany(orphanages));
  },
  async show(req: Request, resp: Response) {
    const { id } = req.params;

    const orphanagesRespository = getRepository(Orphanage);

    const orphanage = await orphanagesRespository.findOneOrFail(id, {
      relations: ["images"],
    });

    return resp.json(orphanages_view.render(orphanage));
  },
  async create(req: Request, resp: Response) {
    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
    } = req.body;

    const reqImages = req.files as Express.Multer.File[];
    const images = reqImages.map((image) => {
      return { path: image.filename };
    });

    const data = {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
      images,
    };

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      about: Yup.string().required().max(300),
      instructions: Yup.string().required(),
      opening_hours: Yup.string().required(),
      open_on_weekends: Yup.boolean().required(),
      images: Yup.array(
        Yup.object().shape({
          path: Yup.string().required(),
        })
      ),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const orphanagesRepository = getRepository(Orphanage);
    const orphanage = orphanagesRepository.create(data);

    await orphanagesRepository.save(orphanage);

    return resp.status(201).json(orphanage);
  },
};
