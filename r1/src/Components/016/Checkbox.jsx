import { useState } from "react";

function Checkbox() {

    const [cb, setCb] = useState();

    return (
        <div className="card m-5">
            <div className="card-body">
                <h5 className="card-title">CHECKBOX</h5>
                <div>
                    <div className="form-check m-4">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                        <label className="form-check-label" HtmlFor="inlineCheckbox1">1</label>
                    </div>
                    <div className="form-check m-4">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                        <label className="form-check-label" HtmlFor="inlineCheckbox2">2</label>
                    </div>
                    <div className="form-check m-4">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                        <label className="form-check-label" HtmlFor="inlineCheckbox3">3 (disabled)</label>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Checkbox;