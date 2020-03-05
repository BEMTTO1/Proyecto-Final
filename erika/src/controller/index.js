const { Pool } = require('pg');

var Singleton = (function () {
    var instance;
    function createInstace() {
        const pool = new Pool({
            host: 'ec2-54-197-34-207.compute-1.amazonaws.com',
            database: 'd7t3n9qcoaguf1',
            user: 'atonwcglihwdyc',
            password: '4be27e580e4b004a70b729bf41391f0b33b2710b4f117f58b0a672944ed24d04',
            port: 5432,
            ssl: {
                rejectUnauthorized: false
            }
        
        });
        return pool;
    }

    return {
        getInstance: function(){
            if(!instance){
                instance=createInstace();
            }
            return instance;
        }
    };

})();



module.exports = Singleton.getInstance();