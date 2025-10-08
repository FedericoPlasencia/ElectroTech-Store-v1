const data = require('./seed-data.json')
exports.handler = async (event) => {
  try{
    return { statusCode: 200, body: JSON.stringify(data) }
  }catch(err){ return { statusCode:500, body: String(err) } }
}
