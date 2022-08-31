import { useState } from 'react';
import rand from '../../Functions/rand';

const d = {A: false, B: true, C: true, D: false};

function Checkbox() {

    const [cb, setCb] = useState(d);

    const checking = e => {
        const v = e.target.value;
        setCb(c => ({...c, [v]: !c[v]}));
    }

    const reset = () => {
        setCb(d);
    }

    const random = () => {
        setCb({
            A: !rand(0, 1),
            B: !rand(0, 1),
            C: !rand(0, 1),
            D: !rand(0, 1)
        });
    }

    return (
        <div className="card m-5">
            <div className="card-body">
                <h5 className="card-title">CHECKBOX</h5>
                <div>
                    <div className="form-check m-4">
                        <input onChange={checking} className="form-check-input" type="checkbox" id="_1" value="A" checked={cb.A}/>
                        <label className="form-check-label mt-2" htmlFor="_1">Raidė A</label>
                    </div>
                    <div className="form-check m-4">
                        <input onChange={checking} className="form-check-input" type="checkbox" id="_2" value="B" checked={cb.B} />
                        <label className="form-check-label mt-2" htmlFor="_2">Raidė B</label>
                    </div>
                    <div className="form-check m-4">
                        <input onChange={checking} className="form-check-input" type="checkbox" id="_3" value="C" checked={cb.C} />
                        <label className="form-check-label mt-2" htmlFor="_3">Raidė C</label>
                    </div>
                    <div className="form-check m-4">
                        <input onChange={checking} className="form-check-input" type="checkbox" id="_4" value="D" checked={cb.D} />
                        <label className="form-check-label mt-2" htmlFor="_4">Raidė D</label>
                    </div>
                    <button type="button" onClick={reset} class="btn btn-outline-info m-1">Reset</button>
                    <button type="button" onClick={random} class="btn btn-outline-warning m-1">Random</button>
                </div>
            </div>
        </div>
    );
}

export default Checkbox;