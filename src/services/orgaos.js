const reqAPITTRANSP = require('./transparencia')
const reqAPI        = require('./api')

const get = async () =>{
    try {
        const aResult = await reqAPITTRANSP('get', '/orgaos-siafi?pagina=1')    
        return aResult;
    } catch (error) {
        console.log(error)        
    }
}

const set = async (orgaos) => {
    console.log(orgaos)
    orgaos.map(async (orgao) =>{        
        try {
            const result = await reqAPI('post', '/orgao', orgao)    
            console.log(result)
        } catch (error) {
            console.log(error)
        }
        
    });
}

async function actions(){
   console.log("get")
   const aOrgaos = await get();     
   console.log("set")
   set(aOrgaos.data)    
}


actions()
