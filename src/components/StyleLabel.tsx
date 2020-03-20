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
    render(): ReactNode {
        const { color, label } = this.props;

        const styles = this.getStyles(color);

        return (
            <View style={styles.container}>
                <Text style={styles.label}>{label}</Text>
            </View>
        );
    }

    private getStyles(color : string | undefined): CustomStyle {
        if (color != undefined && color != '') {
            const componentStyle: CustomStyle = {
                container: { },
                label: {
                    color: color
                }
            };
            return flattenStyles(
                flattenStyles(componentStyle, [defaultStyle]),
                 this.props.style
            );    
        }
        return flattenStyles(defaultStyle, this.props.style);
    }
}
