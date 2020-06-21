function getresponse(status,data)
{
    return response =   { 
        metadata:{ 
          status:status,
          guid: 'asdasdasd'
        },
        data:{data}
      }
}

module.exports={getresponse};