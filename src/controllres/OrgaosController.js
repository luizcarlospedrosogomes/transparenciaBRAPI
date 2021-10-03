const db = require('../models');
const logger = require('../config/logger');

class OrgaosController{ 

    static async create(req, res){        
        const data = req.body
        try {
            const orgao = await db.Orgaos.create(data);
            logger.info('orgao criado:', orgao);
            return res.status(200).json({msg: 'orgao salvo', ...orgao})      
        } catch (error) {            
            logger.info('erro ao criar', data);
            return res.status(400).json({msg: 'erro ao salvar orgao', data: data, ...error})      
        }
    }

    static async list(req, res){
        return res.status(200).json({msg: 'list'})  
    }

    static async listAll(req, res){
        const orgaos = await db.Orgaos.findAll();        
        return res.status(200).json(orgaos)  
    }
}

module.exports = OrgaosController