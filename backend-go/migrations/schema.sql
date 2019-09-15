CREATE DATABASE cookbook_dev;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  nick_name VARCHAR (50) NOT NULL,
  email VARCHAR (50) UNIQUE NOT NULL,
  data JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE recipes (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  title VARCHAR (50) NOT NULL,
  description TEXT DEFAULT NULL,
  data JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO users (nick_name, email) VALUES
  ('user01', 'test@test01.com'),
  ('user02', 'test@test02.com');

INSERT INTO recipes (user_id, title, description) VALUES
  (1, 'Test recipe 01', 'Test recipe 01 description'),
  (1, 'Test recipe 02', 'Test recipe 02 description'),
  (1, 'Test recipe 03', 'Test recipe 03 description'),
  (1, 'Test recipe 04', 'Test recipe 04 description'),
  (1, 'Test recipe 05', 'Test recipe 05 description'),
  (2, 'Test recipe 06', 'Test recipe 06 description'),
  (2, 'Test recipe 07', 'Test recipe 07 description'),
  (2, 'Test recipe 08', 'Test recipe 08 description'),
  (2, 'Test recipe 09', 'Test recipe 09 description');
