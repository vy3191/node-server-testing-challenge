const carsModals = require('./cars-modals');
const db = require('../data/dbConfig');

beforeEach(async() => {
  await db.seed.run();
});

test('It should get all the cars', async() => {
    const res = await carsModals.findById(1);
    expect(res.make).toBe('NISSAN ALTIMA');
    expect(res.modal).toBe('xnn');
    expect(res.year).toBe('2007');

});
