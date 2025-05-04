import type {TextProps} from "react-native";

export interface IGradientBackgroundViewProps {
    children: React.ReactNode,
    style?: object,
    color: 'light' | 'dark'
}

export type IThemedTextProps = TextProps & {
    lightColor?: string;
    darkColor?: string;
    type?: 'default' | 'title' | 'defaultBold' | 'defaultExtraBold' | 'subtitle' | 'link';
};

export interface IScreenWrapperProps {
    children: React.ReactNode
}