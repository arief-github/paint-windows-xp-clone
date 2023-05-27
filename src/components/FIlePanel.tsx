import { saveAs } from "file-saver";
import { useCanvas } from "../context/CanvasContext";
import { getCanvasImage } from "../utils/canvasUtils";

const FilePanel = () => {
    const canvasRef = useCanvas();

    const exportToFile = async () => {
        const file = await getCanvasImage(canvasRef.current);

        if(!file) {
            return
        }

        saveAs(file, "drawing.png");
    }

    return (
        <div className="window file">
            <div className="title-bar">
                <div className="title-bar-text">
                    File
                </div>
            </div>
            <div className="window-body">
                <div className="field-row">
                    <div className="save-button" onClick={exportToFile}>
                        Export
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilePanel;
