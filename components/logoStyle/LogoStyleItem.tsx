import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {Colors} from "@/constants/Colors";
import {ILogoStyle} from "@/types/logo.types";
import {useAppDispatch, useAppSelector} from "@/hooks/redux";
import {changeLogoStyle} from "@/store/logo/logoSlice";

export default function LogoStyleItem({label, icon}: ILogoStyle) {
    const dispatch = useAppDispatch();
    const {logoStyle} = useAppSelector(state => state?.logo);
    return (
        <View style={styles.logoWrapper} key={label}>
            <TouchableOpacity
                style={[styles.logoStyle, logoStyle === label && styles.logoStyleSelected]}
                onPress={() => dispatch(changeLogoStyle(label))}
            >
                <Image style={[styles.icon, logoStyle === label && styles.logoStyleSelected]} source={icon} />
            </TouchableOpacity>
            <Text style={[styles.logoLabel, logoStyle === label && styles.logoLabelSelected]}>{label}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        fontSize: 20,
        lineHeight: 25,
        fontWeight: '700',
        marginBottom: 12,
        marginTop: 8,
    },
    logoWrapper: {
        alignItems: 'center'
    },
    logoStyle: {
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 16,
    },
    logoStyleSelected: {
        borderColor: Colors.light.text,
    },
    logoLabel: {
        color: Colors.light.LIGHT_400,
        fontSize: 13,
        lineHeight: 18,
        marginRight: 16,
        marginTop: 4
    },
    logoLabelSelected: {
        color: Colors.light.text,
    },
    icon: {
        borderWidth: 2,
        borderRadius: 16,
        borderColor: 'transparent',
        width: 90,
        height: 90,
    }
});