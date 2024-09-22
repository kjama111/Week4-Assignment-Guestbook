// add SQL queries to create table and add dummy data

import { db } from "./server.js";

db.query(`CREATE TABLE panem ( 
ID SERIAL PRIMARY Key,
Name TEXT,
Room VARCHAR(255),
Check_in DATE,
Check_out DATE,
Review TEXT
);`);

db.query(`INSERT INTO panem (Name, Room, Check_in, Check_out, Review)
    VALUES('Samantha', 'Serenity', '2023-04-21', '2023-04-24', 'Beautiful room and scenery with amazing amenities!'),
    ('Motaz', 'Emerald', '2023-01-12', '2023-01-20', 'Great room and superb food. Staff were proffessional and welcoming. Will be coming back')`);
