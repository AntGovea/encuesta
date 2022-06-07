


let url = `http://localhost:8082/api/preguntas/`;

export const addQuestion = async (question) => {
  try {
    let resp = await fetch(`${url}addQuestion`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(question),
    });
    const json = await resp.json();

    return json;
  } catch (err) {
    console.log("addQuestion");
    console.log(err.message);
  }
};
export const getAllQuestions = async () => {
  try {
    let resp = await fetch(`${url}getAll`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
     
    });
    const json = await resp.json();

    return json;
  } catch (err) {
    console.log("getAllQuestions");
    console.log(err.message);
  }
};
