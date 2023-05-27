import { useDispatch } from "react-redux";
import { undo, redo } from "../modules/historyIndex/actions";
import { strokesLengthSelector } from '../modules/strokes/selector'
import { useSelector } from "react-redux";

const EditPanel = () => {
    const dispatch = useDispatch();
    const undoLimit = useSelector(strokesLengthSelector);

    const onUndoHandler = ():void => {
        dispatch(undo(undoLimit));
    }

    const onRedoHandler = ():void => {
        dispatch(redo());
    }

    return (
        <div className="window edit">
            <div className="title-bar">
                <div className="title-bar-text">Edit</div>
            </div>
            <div className="window-body">
                <div className="field-row">
                    <button className="button undo" onClick={onUndoHandler}>
                        Undo
                    </button>
                    <button className="button redo" onClick={onRedoHandler}>
                        Redo
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EditPanel;