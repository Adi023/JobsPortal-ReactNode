var mysql= require('mysql2')

var connection=mysql.createConnection({
    "host":"localhost",
    "user":"root",
    "password":"mysql",
    "database":"jobsportal"
})
module.exports=connection