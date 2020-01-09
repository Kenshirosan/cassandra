const Model = require('./Model');

const mappingOptions = {
    models: {
        'Movies': {
            tables: ['movies_by_id']
        }
    }
};

class Movies extends Model {

    constructor(client) {
        super(client, mappingOptions);
        this.movie = this.forModel('Movies');
        this.table = mappingOptions.models.Movies.tables;
    }

    getMovie(id) {
        return this.movie.get({movie_id: id})
            .then(res => res)
            .catch(e => console.error(e));
    }

    getAll() {
        return this.movie.findAll()
            .then(res => res)
            .catch(err => console.error(err));
    }

    async getRowsWithLimit(client, limit) {
        const query = `SELECT * FROM movies_by_id LIMIT ?`;

        return await client.execute(query, [limit], { prepare: true });
    }
}

module.exports = Movies;