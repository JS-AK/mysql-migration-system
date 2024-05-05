CREATE TABLE user_roles(
    id                              INT NOT NULL AUTO_INCREMENT PRIMARY KEY,

    title                           varchar(255) UNIQUE,

    created_at                      DATETIME DEFAULT (UTC_TIMESTAMP),
    updated_at                      DATETIME

);
