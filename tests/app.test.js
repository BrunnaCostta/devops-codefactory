const request = require("supertest");
const app = require("../src/app");

describe("CodeFactory API", () => {
  test("deve retornar mensagem da API", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.body.mensagem).toBe("CodeFactory DevOps API funcionando");
  });

  test("deve listar as tarefas", async () => {
    const response = await request(app).get("/tarefas");

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});
