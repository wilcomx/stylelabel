import { Component, ReactNode, createElement } from "react";
import { Text, View } from "react-native";

import { CustomStyle } from "../StyleLabel";
import { flattenStyles } from "../utils/common";

export interface StyleLabelProps {
    label?: string;
    color?: string;
    style: CustomStyle[];
}

const defaultStyle: CustomStyle = {
    container: { },
    label: {
        fontSize: 20
    }
};

export class StyleLabel extends Component<StyleLabelProps> {
    private readonly styles = flattenStyles(defaultStyle, this.props.style);

    render(): ReactNode {
        const { label, color } = this.props;

        this.styles.label.color = color;
        
        return (
            <View style={this.styles.container}>
                <Text style={this.styles.label}>{label}</Text>
            </View>
        );
    }
}
