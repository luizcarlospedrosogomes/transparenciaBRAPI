const db = require('../models');

class OrgaosController{ 

    static async create(req, res){
        console.log("create")
        const data = req.body
        try {
            const orgao = await db.Orgaos.create(data);
            return res.status(200).json({msg: 'orgao salvo', ...orgao})      
        } catch (error) {            
            return res.status(400).json({msg: 'erro ao salvar orgao', data: data, ...error})      
        }
    }

    static async list(req, res){
        return res.status(200).json({msg: 'list'})  
    }

    static async listAll(req, res){
        return res.status(200).json({msg: 'listAll'})  
    }
}

module.exports = OrgaosController