import { Component, ReactNode, createElement } from "react";
import { TextStyle, ViewStyle } from "react-native";
import { StyleLabel as StyleLabelWrapper } from "./components/StyleLabel";
import { StyleLabelProps } from "../typings/StyleLabelProps";
import { Style } from "./utils/common";

export interface CustomStyle extends Style {
    container: ViewStyle;
    label: TextStyle;
}

export class StyleLabel extends Component<StyleLabelProps<CustomStyle>> {
    render(): ReactNode {
        const { label, color, style } = this.props;

        return <StyleLabelWrapper 
            color={color?.value}
            label={label?.value}
            style={style} />;
    }
}
