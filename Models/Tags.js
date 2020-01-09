const Model = require('./Model');

const mappingOptions = {
    models: {
        'Tags': {
            tables: ['tags_by_movie_id']
        }
    }
};

class Tags extends Model {

    constructor(client) {
        super(client, mappingOptions);
        this.tags = this.forModel('Tags');
    }

    getTags(movieId) {
        return this.tags.find({ movie_id: movieId })
            .then(res => res)
            .catch(e => console.log(e));
    }

    getAll() {
        return this.tags.findAll()
            .then(res => res)
            .catch(err => console.log(err));
    }
}

module.exports = Tags;
