const request = require('supertest');
const server = require("./index.js");


describe("Initial tests for index.js", () => {
  test("welcome route", async () => {
    const res = await request(server).get("/");  
   expect(res.statusCode).toBe(200);
   expect(res.type).toBe("application/json");
   expect(res.body.message).toBe("welcome to the application");
  //  expect(res.body.message).toHaveLength(18);
   expect(res.body.message).toMatch(/application/i);
 });
});