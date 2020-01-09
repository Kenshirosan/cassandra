const Model = require('./Model');
const TimeUuid = require('cassandra-driver').types.TimeUuid;

const mappingOptions = {
    models: {
        'Ratings': {
            tables: ['ratings_by_movie_id']
        }
    }
};

class Ratings extends Model {

    constructor(client) {
        super(client, mappingOptions);
        this.ratings = this.forModel('Ratings');
    }

    getAll() {
        const ratings = [];
        return this.ratings.findAll()
            .then(res => {
                res.forEach(r => {
                    if(r.time != null) {
                        r.time = r.time.getDate();
                    }
                    ratings.push(r);
                })
                return ratings;
            })
            .catch(err => console.log(err));
    }
}


module.exports = Ratings;