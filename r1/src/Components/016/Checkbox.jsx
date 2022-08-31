import { useState } from "react";

function Checkbox() {

    const [cb, setCb] = useState();

    return (
        <div className="card m-5">
            <div className="card-body">
                <h5 className="card-title">CHECKBOX</h5>
                <div>
                    <div className="form-check m-4">
                        <input className="form-check-input" type="checkbox" id="_1" value="A" />
                        <label className="form-check-label mt-2" htmlFor="_1">Raidė A</label>
                    </div>
                    <div className="form-check m-4">
                        <input className="form-check-input" type="checkbox" id="_2" value="B" />
                        <label className="form-check-label mt-2" htmlFor="_2">Raidė B</label>
                    </div>
                    <div className="form-check m-4">
                        <input className="form-check-input" type="checkbox" id="_3" value="C" />
                        <label className="form-check-label mt-2" htmlFor="_3">Raidė C</label>
                    </div>
                    <div className="form-check m-4">
                        <input className="form-check-input" type="checkbox" id="_4" value="D" />
                        <label className="form-check-label mt-2" htmlFor="_4">Raidė D</label>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Checkbox;