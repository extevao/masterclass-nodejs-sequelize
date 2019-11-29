const User = require('../database/models/User')
const { Op } = require('sequelize')

module.exports = {
    async show(req, res) {
        //Encontrar todos usuário que tem email que termina com @rocketseat.com.br
        //Desses usuário eu quero buscar todos que moram na rua "Rua Guilherme Gembala"
        //Desses usuário eu quero buscar as tecnologias que começam com React

        const users = await User.findAll({
            attributes: [ 'name', 'email' ],
            where: {
                email: {
                    [Op.like]: '%@rocketseat.com.br'
                }
            },
            include: [
                { association: 'addresses', where: { street: 'Rua Guilherme Gembala' } },
                {
                    association: 'techs',
                    required: false,
                    where: {
                       name: {
                            [Op.like]: 'React%'
                       }
                    }
                }
            ]
        })

        return res.json(users)
    }
}
