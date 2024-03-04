const md5 = require('md5')

module.exports={
    async beforeCreate(event){
        console.log('beforeCreate isWork!',event.parmas.data)
       // event.params.data.StudentID ='xyz'
       event.params.data.StudentID =md5( event.params.data.StudentID);
    }



}