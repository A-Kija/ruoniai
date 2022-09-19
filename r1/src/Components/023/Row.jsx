import { useContext } from "react";
import TreesProvider from "./TreesProvider";

function Row({ t }) {

    const { types, setDeleteData, setModalData } = useContext(TreesProvider);

    const destroy = () => {
        setDeleteData({
            id: t.id
        });
    }

    const edit = () => {
        setModalData({...t});
    }

    return (
        <li className="tree-row">
            <span> {t.title} </span>
            <span> {types.find(tr => tr.id === t.type).type} </span>
            <i>{t.height}m</i>
            <button className="green"onClick={edit}>Edit</button>
            <button className="red" onClick={destroy}>Delete</button>
        </li>
    );

}

export default Row;