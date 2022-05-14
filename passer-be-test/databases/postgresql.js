const { newDb } = require('pg-mem');

const postgresql = newDb();

// create mock data
postgresql.public.none(`create table users(pk_user integer, name text, status boolean);
                
                insert into users values (123, 'Juan', true);
                create table transaction(pk_transaction integer, fk_user integer, description text, amount float);
                
                alter table users add constraint pk_user primary key(pk_user);
                
                alter table transaction add constraint fk_user foreign key(fk_user) references users(pk_user) 
                on delete cascade on update cascade;
                
                insert into transaction values (123, 123, 'Descripción de la transacción', 456);`
                );



module.exports = {
    postgresql
}