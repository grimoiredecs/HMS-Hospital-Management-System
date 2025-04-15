CREATE DATABASE IF NOT EXISTS hospital
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE hospital;


CREATE TABLE IF NOT EXISTS patients (
    id BINARY(16) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    age INT,
    gender VARCHAR(20),
    contact_number VARCHAR(50),
    address VARCHAR(255)
);


CREATE TABLE IF NOT EXISTS medical_history (
    patient_id BINARY(16),
    record VARCHAR(255),
    FOREIGN KEY (patient_id) REFERENCES patients(id)
);


-- Sample UUIDs: must be stored as binary(16) using UNHEX(REPLACE(...))
INSERT INTO patients (id, name, age, gender, contact_number, address)
VALUES 
(UNHEX(REPLACE('a1b2c3d4-e5f6-7890-a1b2-c3d4e5f67890', '-', '')), 'Alice Nguyen', 29, 'Female', '0123456789', 'Ho Chi Minh City'),
(UNHEX(REPLACE('123e4567-e89b-12d3-a456-426614174000', '-', '')), 'Bob Tran', 42, 'Male', '0987654321', 'Hanoi'),
(UNHEX(REPLACE('9f8e7d6c-5b4a-3210-9876-543210fedcba', '-', '')), 'Charlie Le', 35, 'Other', '0112233445', 'Da Nang');




INSERT INTO medical_history (patient_id, record)
VALUES
-- Alice
(UNHEX(REPLACE('a1b2c3d4-e5f6-7890-a1b2-c3d4e5f67890', '-', '')), 'Allergic to penicillin'),
(UNHEX(REPLACE('a1b2c3d4-e5f6-7890-a1b2-c3d4e5f67890', '-', '')), 'Treated for dengue fever in 2022'),

-- Bob
(UNHEX(REPLACE('123e4567-e89b-12d3-a456-426614174000', '-', '')), 'Diagnosed with hypertension'),
(UNHEX(REPLACE('123e4567-e89b-12d3-a456-426614174000', '-', '')), 'Annual checkup in 2024'),

-- Charlie
(UNHEX(REPLACE('9f8e7d6c-5b4a-3210-9876-543210fedcba', '-', '')), 'Recovered from knee surgery');



SELECT * FROM medical_history
