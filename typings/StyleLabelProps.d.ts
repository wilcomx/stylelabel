/**
 * This file was generated from StyleLabel.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Team
 */
import { EditableValue } from "mendix";

interface CommonProps<Style> {
    name: string;
    style: Style[];
}

export interface StyleLabelProps<Style> extends CommonProps<Style> {
    label?: EditableValue<string>;
    color?: EditableValue<string>;
}
