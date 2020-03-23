
exports.seed = async function(knex) {
     await knex('cars').truncate();
     await knex('cars').insert([
       {make:'NISSAN ALTIMA', modal:'xnn', year:'2007'},
       {make:'HONAD CRV', modal:'GEX', year: '1997'},
       {make:'TOYOTA', modal: 'znc', year:'1990'}
     ])
};
