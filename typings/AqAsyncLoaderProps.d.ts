/**
 * This file was generated from AqAsyncLoader.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { ComponentType, CSSProperties, ReactNode } from "react";
import { ActionValue, DynamicValue } from "mendix";

export interface AqAsyncLoaderContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    hasLoaded: DynamicValue<boolean>;
    loadingContent?: ReactNode;
    loadedContent?: ReactNode;
    loadingAction?: ActionValue;
}

export interface AqAsyncLoaderPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    hasLoaded: string;
    loadingContent: { widgetCount: number; renderer: ComponentType<{ caption?: string }> };
    loadedContent: { widgetCount: number; renderer: ComponentType<{ caption?: string }> };
    loadingAction: {} | null;
}
