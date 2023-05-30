import React, { useEffect } from "react";
import { useCanvas } from "./context/CanvasContext";

import { setCanvasSize, clearCanvas, drawStroke } from "./utils/canvasUtils";
import { useSelector, useDispatch } from "react-redux";
import { beginStroke, updateStroke } from "./modules/currentStroke/slice";
import { endStroke } from './modules/sharedActions';

import { strokesSelector } from "./modules/strokes/selector";
import { currentStrokeSelector } from './modules/currentStroke/selector'
import { historyIndexSelector } from './modules/historyIndex/selector'

import ColorPanel from "./components/ColorPanel";
import EditPanel from "./components/EditPanel";
import FilePanel from "./components/FIlePanel";

function App() {
  const WIDTH = 1024;
  const HEIGHT = 768;
  const dispatch = useDispatch();

  const canvasRef = useCanvas();

  const getCanvasWithContext = (canvas = canvasRef.current) => {
    return { canvas, context: canvas?.getContext("2d") };
  };

  const currentStroke = useSelector(currentStrokeSelector);
  const historyIndex = useSelector(historyIndexSelector);
  const strokes = useSelector(strokesSelector);
  
  const isDrawing = !!currentStroke.points.length;

  // Draw side effects
  useEffect(() => {
    const { context } = getCanvasWithContext();

    if(!context) {
      return;
    }

    requestAnimationFrame(() => drawStroke(context, currentStroke.points, currentStroke.color))

  }, [currentStroke])

  useEffect(() => {
    const { canvas, context } = getCanvasWithContext();

    if(!canvas || !context) {
      return;
    }

    setCanvasSize(canvas, WIDTH, HEIGHT);

    context.lineJoin = "round";
    context.lineCap = "round";
    context.lineWidth = 5;
    context.strokeStyle = "black";

    clearCanvas(canvas);
  }, []);

  // Redraw side effects
  useEffect(() => {
    const { canvas, context } = getCanvasWithContext();

    if(!context || !canvas) {
      return;
    }

    requestAnimationFrame(() => {
      clearCanvas(canvas);

      strokes
        .slice(0, strokes.length - historyIndex)
        .forEach((stroke) => {
          drawStroke(context, stroke.points, stroke.color)
        })

    })

  }, [historyIndex])

  const startDrawing = ({ nativeEvent } : React.MouseEvent<HTMLCanvasElement> ) => {
    const { offsetX, offsetY } = nativeEvent;
    dispatch(beginStroke({x : offsetX, y: offsetY}));
  };
  
  const endDrawing = () => {
    if(isDrawing) {
      dispatch(endStroke({historyIndex: historyIndex, stroke:  currentStroke}));
    }
  };

  const draw = ({ nativeEvent }: React.MouseEvent<HTMLCanvasElement>) => {
    if(!isDrawing) {
      return;
    }

    const { offsetX, offsetY } = nativeEvent;
    dispatch(updateStroke({x: offsetX, y: offsetY}))
  };

  return (
    <div className="window">
        <div className="title-bar">
          <div className="title-bar-text">Paint Clone XP</div>
          <div className="title-bar-controls">
            <button aria-label="Close" />
          </div>
        </div>
        <FilePanel/>
        <EditPanel/>
        <ColorPanel/>
        <canvas 
          ref={canvasRef} 
          onMouseDown={startDrawing}
          onMouseUp={endDrawing}
          onMouseOut={endDrawing}
          onMouseMove={draw}  
        />
    </div>
  )
}

export default App
