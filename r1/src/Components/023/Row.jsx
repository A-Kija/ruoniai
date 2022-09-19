function Row({t}) {

    return (
            <li className="tree-row">
                <span>{t.title} </span>
                <i>{t.height}m</i>
                <button className="green">Edit</button>
                <button className="red">Delete</button>
            </li>
    );

}

export default Row;