COMANDO SEQUELIZE com yarn

# criar databse 
yarn sequelize db:create

# criar migration
yarn sequelize migration:create --name=create-users

# rodar migrations
yarn sequelize db:migrate

# desfazer a ultima migration
yarn sequelize db:migrate:undo
OBS: Não dar rollback em migration da produção, e sim criar uma nova migration corrigindo o problema

    EXEMPLO:
        yarn sequelize migration:create --name=add-age-field-to-users






