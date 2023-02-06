import { ReactElement, createElement, useState } from "react";
import { AqAsyncLoaderContainerProps } from "../typings/AqAsyncLoaderProps";

export function AqAsyncLoader({
    hasLoaded,
    loadedContent,
    loadingContent,
    loadingAction
}: AqAsyncLoaderContainerProps): ReactElement {
    const [actionCalled, setActionCalled] = useState(false);

    const loadingComplete = hasLoaded && hasLoaded.status === "available" && hasLoaded.value;

    if (!actionCalled && loadingAction && loadingAction.canExecute && !loadingAction.isExecuting) {
        loadingAction.execute();
        setActionCalled(true);
    }

    if (loadingComplete) {
        return <div className="aq-async-loaded">{loadedContent}</div>;
    }

    return <div className="aq-async-loading">{loadingContent}</div>;
}