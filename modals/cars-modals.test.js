const carsModals = require('./cars-modals');
const db = require('../data/dbConfig');

beforeEach(async() => {
  await db.seed.run();
});

test('It should get the all the cars in an array', async() => {
   const res = await carsModals.find();
   expect(res).toHaveLength(3);
})
test('It should get the by ID', async() => {
    const res = await carsModals.findById(1);
    expect(res.make).toBe('NISSAN ALTIMA');
    expect(res.modal).toBe('xnn');
    expect(res.year).toBe('2007');

});

test('It should add a new car in Db', async () => {
   const res = await carsModals.add({make:'Maruti', modal:'RX800', year:'2008'});
   expect(res.make).toBe('Maruti');
   expect(res.modal).toBe('RX800');
   expect(res.year).toBe('2008');
});

test('It should update given car modals', async () => {
   const res = await carsModals.modify(1, {make:'Kia', modal:'RX800', year:'2008'})
   expect(res.make).toBe('Kia');
   expect(res.modal).toBe('RX800');
   expect(res.year).toBe('2008');
});

test('It should remove the given car modal', async () => {
   const res = await carsModals.remove(1);
   const removedOne = await db('cars').select();
   expect(removedOne).toHaveLength(2);
})
