function getresponse(code,message,data,paging)
{
    return response =   { 
        data:data,
        status:{
          code: code,
          message:message
        },
        paging:paging
      }
}

module.exports={getresponse};