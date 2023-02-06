import { ReactElement, createElement } from "react";

export function preview(): ReactElement {
    return <div className="aq-async-loading">Loading Content...</div>;
}

export function getPreviewCss(): string {
    return "";
}
