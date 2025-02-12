import {exit} from 'node:process'
import db from '../config/db'

import color from 'colors'

const clearDB = async () =>{
    try{
        await db.sync({force:true})
        console.log(color.yellow.bold('Ing. Los Datos Se Han Eliminado Correctamente'))
        exit(0)
    }catch(error){
        console.log(error)
        exit(1)
    }
}

if(process.argv[2] === '--clear'){
    clearDB()
}
