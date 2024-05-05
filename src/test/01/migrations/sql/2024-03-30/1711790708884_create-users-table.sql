CREATE TABLE users(
    id                              INT NOT NULL AUTO_INCREMENT PRIMARY KEY,

    id_user_role                    INT NOT NULL,

    first_name                      varchar(255),
    last_name                       varchar(255),

    deleted_at                      DATETIME,
    is_deleted                      BOOLEAN NOT NULL DEFAULT FALSE,

    created_at                      DATETIME DEFAULT (UTC_TIMESTAMP),
    updated_at                      DATETIME,

    CONSTRAINT users_user_roles_id_user_role_fk
        FOREIGN KEY(id_user_role)
            REFERENCES user_roles(id) ON DELETE CASCADE

);
