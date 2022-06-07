import { Request, Response } from "express";
import { Excecute } from "@helpers/peticionesRedux";

let exe = new Excecute();

export class controllerEncuesta {
  contructor() {}

  test = async (req: Request, res: Response) => {
    try {
      let { opc } = req.body;

      if (opc != null) {
        res
          .status(200)
          .send({ msg: "Consulta exitosa", code: 200,  });
      } else {
        res
          .status(200)
          .send({
            msg: "error de consulta",
            code: 500,
            
          });
      }
    } catch (e) {
      console.log(e);
      res
        .status(200)
        .send({ msg: "error en agregarPregunta", code: 500, descripcion: e });
    }
  };


  getPreguntas = async (req: Request, res: Response) => {
    try {
      
     let results:any;
    let sql="SELECT * FROM pregunta";
     results=await exe.query(sql);

      if (results.validacion) {
        res
          .status(200).send({
             msg: "Consulta exitosa",
              code: 200, 
              data:results.data
            
            });
      } else {
        res
          .status(200)
          .send({
            msg: "error de consulta",
            code: 500,
            descripcion:results.descripcion
            
          });
      }
    } catch (e) {
      console.log(e);
      res
        .status(200)
        .send({ msg: "error en getPreguntas", code: 500, descripcion: e });
    }
  };


  addQuestions = async (req: Request, res: Response) => {
    try {
      
      let{pregunta}=req.body;

     let results:any;
    let sql=`INSERT INTO pregunta (pregunta) VALUES(${pregunta});`;
     results=await exe.query(sql);

      if (results.validacion) {
        res
          .status(200).send({
             msg: "Registro Guardado",
              code: 200, 
              data:results.data
            
            });
      } else {
        res
          .status(200)
          .send({
            msg: "error al guadar pregunta",
            code: 500,
            descripcion:results.descripcion
            
          });
      }
    } catch (e) {
      console.log(e);
      res
        .status(200)
        .send({ msg: "error en getPreguntas", code: 500, descripcion: e });
    }
  };
}
