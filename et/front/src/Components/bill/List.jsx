import { useContext } from 'react';
import Bills from "../../Contexts/Bills";
import Line from './Line';



function List() {

    const { bills } = useContext(Bills);

    return (
        <div className="card m-4">
            <h5 className="card-header">Bills List</h5>
            <div className="card-body">
                <ul className="list-group">
                    {
                        bills?.map(b => <Line key={b.id} bill={b} />)
                    }
                </ul>
            </div>
        </div>

    );
}

export default List;