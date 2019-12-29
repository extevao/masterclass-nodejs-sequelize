COMANDO SEQUELIZE com yarn

# criar databse 
npx sequelize db:create

# criar migration
npx sequelize migration:create --name=create-users

# rodar migrations
npx sequelize db:migrate

# desfazer a ultima migration
npx sequelize db:migrate:undo
OBS: Não dar rollback em migration da produção, e sim criar uma nova migration corrigindo o problema

    EXEMPLO:
        npx sequelize migration:create --name=add-age-field-to-users






