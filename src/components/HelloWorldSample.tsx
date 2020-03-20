import { Component, ReactNode, createElement } from "react";
import { Text, View } from "react-native";

import { CustomStyle } from "../StyleLabel";
import { flattenStyles } from "../utils/common";

export interface HelloWorldSampleProps {
    sampleText?: string;
    style: CustomStyle[];
}

const defaultStyle: CustomStyle = {
    container: {},
    label: {
        color: "#F6BB42"
    }
};

export class HelloWorldSample extends Component<HelloWorldSampleProps> {
    private readonly styles = flattenStyles(defaultStyle, this.props.style);

    render(): ReactNode {
        return (
            <View style={this.styles.container}>
                <Text style={this.styles.label}>Hello {this.props.sampleText}</Text>
            </View>
        );
    }
}
