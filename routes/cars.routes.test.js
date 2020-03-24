const request = require('supertest');
const server = require('../index.js');
const db = require('../data/dbConfig');

beforeEach(async () => {
  await db.seed.run();
});
test('It should render all cars', async () => {
     const res = await request(server).get("/cars");
     expect(res.statusCode).toBe(200);    
     expect(res.type).toBe("application/json");  
     expect(res.body).toBeDefined();
    //  expect(res.length).toBeGreaterThan(0)
});

test("add cars to list returns 201 and json object", async () => {
  const res = await request(server).post("/cars").send({ modal:'Volksl', make: "VVsl", year:"2019" });
  expect(res.status).toBe(201)
  expect(res.type).toBe("application/json")
  expect(res.body.modal).toBe("Volksl");
});

test("delete a car from the DB", async () => {
  const res = await request(server).remove("/cars/1")
  const cars = await db("cars").find();
  expect(cars.length).toBe(2)
})