import genres from '../Data/genres';

function Create() {

    return (
        <div className="card m-4">
            <h5 className="card-header">New Movie</h5>
            <div className="card-body">
                <div className="mb-3">
                    <label className="form-label">Movie Title</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Genre</label>
                    <select className="form-select">
                        {
                            genres.map(g => <option key={g.id} value={g.id}>{g.type}</option>)
                        }
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Movie Year</label>
                    <input type="text" className="form-control" />
                </div>
                <button type="button" className="btn btn-outline-success">Add</button>
            </div>
        </div>
    );
}

export default Create;