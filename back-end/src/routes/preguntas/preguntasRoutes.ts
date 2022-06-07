import { controllerEncuesta } from "@controllers/encuesta/encuestaController";
import { Router } from "express";


const encuesta = new controllerEncuesta();

export const router: Router = Router();

router.post("/test", encuesta.test);
router.post("/getAll", encuesta.getPreguntas);
router.post("/add", encuesta.addQuestions);