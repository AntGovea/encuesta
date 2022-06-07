import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export const Formulario = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={4}></Col>
          <Col sm={4}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>1. Selecciona el estado donde vives:</Form.Label>
                <select>
                  <option value={1}>Guanajuato</option>
                </select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>2. Selecciona el municipio donde vives:</Form.Label>
                <select>
                  <option value={1}>Leon</option>
                </select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="text">
                <Form.Label>3. Fecha de Nacimiento</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="text">
                <Form.Label>4. Sexo:</Form.Label>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="Masculino"
                />
                <Form.Check type="switch" id="custom-switch" label="Femenino" />
               
              </Form.Group>

              <Form.Group className="mb-3" controlId="text">
                <Form.Label>5. Carrera:</Form.Label>
                <select>
                  <option value={1}>IDGS</option>
                  <option value={2}>IDGS2</option>
                  <option value={3}>IDGS3</option>
                </select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="text">
                <Form.Label>
                  6. Cuatrimestre en el que te encontrabas cuando inició la
                  pandemia:
                </Form.Label>
                <select>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                </select>
               
              </Form.Group>
              <Form.Group className="mb-3" controlId="text">
                <Form.Label>7. Cuatrimestre Actual:</Form.Label>
                <select>
                  <option value={7}>7</option>
                  <option value={8}>8</option>
                  <option value={9}>9</option>
                  <option value={10}>10</option>
                  <option value={11}>11</option>
                </select>
               
              </Form.Group>
              <Form.Group className="mb-3" controlId="text">
                <Form.Label>
                  8. Durante el confinamiento ¿disponías de un espacio
                  específico de trabajo en tu casa (cuarto de trabajo, estancia
                  o despacho)?
                </Form.Label>
                <select>
                  <option value={"si"}>si</option>
                  <option value={"no"}>no</option>
                  <option value={"Era compartido"}>Era compartido</option>
                </select>
               
              </Form.Group>
              <Form.Group className="mb-3" controlId="text">
                <Form.Label>
                  9. ¿En tu casa contaban con internet al inicio de la pandemia?
                </Form.Label>
                <select>
                  <option value={"si"}>si</option>
                  <option value={"no"}>no</option>
                </select>
               
              </Form.Group>
              <Form.Group className="mb-3" controlId="text">
                <Form.Label>
                  9. ¿En tu casa contaban con internet al inicio de la pandemia?
                </Form.Label>
                <select>
                  <option value={"si"}>si</option>
                  <option value={"no"}>no</option>
                </select>
               
              </Form.Group>
              <Form.Group className="mb-3" controlId="text">
                <Form.Label>
                  10. ¿Cuánto se paga por el internet que usas?
                </Form.Label>
                <select>
                  <option value={"50 a 100 pesos"}>• 50 a100 pesos</option>
                  <option value={"101 a 300 pesos"}>• 101 a 300 pesos</option>
                  <option value={"301 a 500 pesos"}>• 301 a 500 pesos</option>
                  <option value={"501 o más"}>• 501 o más</option>
                </select>
               
              </Form.Group>
              <Form.Group className="mb-3" controlId="text">
                <Form.Label>
                11.	¿Qué tipo de dispositivo utilizabas con mayor frecuencia para tus clases en línea?
                </Form.Label>
                <select>
                  <option value={"Computadora"}>•	Computadora</option>
                  <option value={"Tablet"}>•	Tablet</option>
                  <option value={"Celular"}>•	Celular</option>
                  <option value={"Televisión"}>•	Televisión</option>
                
                </select>
               
              </Form.Group>
              <Form.Group className="mb-3" controlId="text">
                <Form.Label>
                12.	¿Tuviste la necesidad de comprar algún dispositivo para poder tomar las clases en línea?
                </Form.Label>
                <select>
                <option value={"si"}>si</option>
                  <option value={"no"}>no</option>
                </select>
               
              </Form.Group>
              <Form.Group className="mb-3" controlId="text">
                <Form.Label>
                13.	¿En cuál de los siguientes medios entregabas trabajos, actividades escolares? (Selección Múltiple)
                </Form.Label>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="•	Vía correo electrónico"
                />
                 <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="•	Plataformas como classroom, teams, etc."
                />
                 <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="•	Grupos de WhatsApp"
                />
                 <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="•	Ninguno"
                />
                 <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="Masculino"
                />
              </Form.Group>
             
              <Form.Group className="mb-3" controlId="text">
                <Form.Label>
                14.	¿Qué tan complicado fue el manejar las plataformas?
                </Form.Label>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="• Mucho"
                />
                 <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="•	Regular"
                />
                 <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="•	Poco"
                />
                 <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="•	Muy poco"
                />
               
              </Form.Group>
              <Form.Group className="mb-3" controlId="text">
                <Form.Label>
                15.	¿Qué sistemas on-line utilizaban los profesores para evaluarte? (Selección Múltiple)
                </Form.Label>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="•	Examen oral"
                />
                 <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="•	Examen en línea"
                />
                 <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="•	Prueba escrita abierta"
                />
                 <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="•	Elaboración de trabajos, proyectos, casos"
                />
               
              </Form.Group>


              <Form.Group className="mb-3" controlId="text">
                <Form.Label>
                16.	Señala los dos sistemas de evaluación on-line que MEJOR valoras (Selección Múltiple)
                </Form.Label>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="•	Examen oral"
                />
                 <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="•	Examen en línea"
                />
                 <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="•	Prueba escrita abierta"
                />
                 <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="•	Elaboración de trabajos, proyectos, casos"
                />
               
              </Form.Group>

              <Form.Group className="mb-3" controlId="text">
                <Form.Label>
                17.	Señala los dos sistemas de evaluación on-line que PEOR valoras (Selección Múltiple)
                </Form.Label>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="•	Examen oral"
                />
                 <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="•	Examen en línea"
                />
                 <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="•	Prueba escrita abierta"
                />
                 <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="•	Elaboración de trabajos, proyectos, casos"
                />
               
              </Form.Group>

              <Form.Group className="mb-3" controlId="text">
                <Form.Label>
                18.	¿Qué dificultades llegaste a tener durante tus evaluaciones on-line? (Selección Múltiple)
                </Form.Label>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="•	Problemas de conexión"
                />
                 <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="•	Dificultad para preguntar dudas durante el examen"
                  />
                 <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="•	Nervios adicionales por la incertidumbre ante la evaluación online"
                  />
                 <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="•	Excesiva carga de trabajo"
                />
                 <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="•	Exámenes escritos a resolver en tiempo reducido"
                />
                 <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="•	Coincidencia de entregar de trabajos de distintas asignaturas"
                />
               
              </Form.Group>


              <Form.Group className="mb-3" controlId="text">
                <Form.Label>
                19.	¿Qué tan cómodo/a te sentías con las clases virtuales?
                </Form.Label>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="• Mucho"
                />
                 <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="•	Regular"
                />
                 <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="•	Poco"
                />
                 <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="•	Muy poco"
                />
               
              </Form.Group>
              <Form.Group className="mb-3" controlId="text">
                <Form.Label>
                20.	¿Qué tan fácil era poder aclarar una duda con algún maestro? 
                </Form.Label>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="• Mucho"
                />
                 <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="•	Regular"
                />
                 <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="•	Poco"
                />
                 <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="•	Muy poco"
                />
               
              </Form.Group>
              <Form.Group className="mb-3" controlId="text">
                <Form.Label>
                21.	¿Qué tan fácil fue la comprensión de los temas?
                </Form.Label>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="• Mucho"
                />
                 <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="•	Regular"
                />
                 <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="•	Poco"
                />
                 <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="•	Muy poco"
                />
               
              </Form.Group>


              <Form.Group className="mb-3" controlId="text">
                <Form.Label>
                22.	¿Cuánto tiempo le dedicabas, de lunes a viernes, a las actividades de aprendizaje (clases, hacer tareas, estudiar, lectura)?
                </Form.Label>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="•	De 3 a 4 horas"
                />
                 <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="•	De 5 a 6 horas"
                />
                 <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="•	De 6 a 7 horas"
                />
                 <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="•	Más de 7 horas"
                />
                
               
              </Form.Group>
              <Form.Group className="mb-3" controlId="text">
                <Form.Label>
                23.	Durante el tiempo de las clases a distancia, crees que aprendiste…
                </Form.Label>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="•	Más que si hubiera ido a clase"
                />
                 <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="•	Igual que si hubiera ido a clase"
                />
                 <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="•	Menos que si hubiera ido a clase"
                />
    
              </Form.Group>

              <Form.Group className="mb-3" controlId="text">
                <Form.Label>
                24.	¿Extrañabas convivir con tus maestros?
                </Form.Label>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="• Mucho"
                />
                 <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="•	Regular"
                />
                 <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="•	Poco"
                />
                 <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="•	Muy poco"
                />
               
              </Form.Group>


              <Form.Group className="mb-3" controlId="text">
                <Form.Label>
                25.	¿Extrañabas convivir con tus compañeros?
                </Form.Label>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="• Mucho"
                />
                 <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="•	Regular"
                />
                 <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="•	Poco"
                />
                 <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="•	Muy poco"
                />
               
              </Form.Group>
              <Form.Group className="mb-3" controlId="text">
                <Form.Label>
                26.	¿Extrañabas asistir a la universidad?
                </Form.Label>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="• Mucho"
                />
                 <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="•	Regular"
                />
                 <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="•	Poco"
                />
                 <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="•	Muy poco"
                />
               
              </Form.Group>

             
              <Form.Group className="mb-3" controlId="text">
                <Form.Label>
                27.	¿En algún momento te llegaste a sentir agredido en clases virtuales por tus compañeros o compañeras?
                </Form.Label>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="• Mucho"
                />
                 <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="•	Regular"
                />
                 <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="•	Poco"
                />
                 <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="•	Muy poco"
                />
               
              </Form.Group>

              
              <Form.Group className="mb-3" controlId="text">
                <Form.Label>
                28.	Durante el confinamiento, qué actividades tuviste que compatibilizar (Respuesta Múltiple)
                </Form.Label>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="•	Estudio"
                />
                 <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="•	Trabajo"
                />
                 <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="•	Apoyo en casa"
                />
                 <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="•	Cuidado de menores/mayores"
                />
                 <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="•	Otros"
                />
               
               
              </Form.Group>



              <Form.Group className="mb-3" controlId="text">
                <Form.Label>
                29.	¿Preferirías continuar tus estudios en modalidad virtual?
                </Form.Label>
                <select>
                  <option value={"si"}>si</option>
                  <option value={"no"}>no</option>
                </select>
               
              </Form.Group>


              <Form.Group className="mb-3" controlId="text">
                <Form.Label>
              30.	Qué aspectos positivos y negativos destacarías de tu trabajo on line durante el confinamiento.
                </Form.Label>
                <Form.Control type="text" placeholder="" />
               
              </Form.Group>


              <Button variant="primary" type="submit">
                Enviar
              </Button>
            </Form>
          </Col>
          <Col sm={4}></Col>
        </Row>
      </Container>
    </div>
  );
};
