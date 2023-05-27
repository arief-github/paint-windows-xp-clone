import {
    createContext,
    PropsWithChildren,
    useRef,
    RefObject,
    useContext
} from 'react';

const CanvasContext = createContext<RefObject<HTMLCanvasElement>>( {} as RefObject<HTMLCanvasElement>);

const CanvasProvider = ({
    children
}: PropsWithChildren<{}>)=> {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    return (
        <CanvasContext.Provider value={canvasRef}>
            {children}
        </CanvasContext.Provider>
    )
}

const useCanvas = () => useContext(CanvasContext);

export {
    useCanvas,
    CanvasContext,
    CanvasProvider
}