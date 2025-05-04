import {GradientBackgroundView} from "@/components/GradientBackgroundView";
import {Image, StyleSheet, Text, TouchableOpacity} from "react-native";
import ButtonIcon from "@/assets/images/elements.png";
import React, {useCallback} from "react";
import {createLogo} from "@/store/logo/logoSlice";
import {useAppDispatch, useAppSelector} from "@/hooks/redux";
import {Colors} from "@/constants/Colors";

export default function CreateButton() {
    const dispatch = useAppDispatch();
    const {loading, prompt} = useAppSelector(state => state?.logo);
    
    const handleCreateLogo = useCallback(() => {
        if(loading !== 'loading' && prompt.trim() !== '')
            dispatch(createLogo());
    }, [dispatch, loading, prompt])
    return(
        <TouchableOpacity disabled={loading === 'loading'} onPress={handleCreateLogo}>
            <GradientBackgroundView
                color='light'
                style={styles.createButton}
            >
                <Text style={styles.createButtonText}>Create</Text>
                <Image source={ButtonIcon} />
            </GradientBackgroundView>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    createButton: {
        height: 56,
        borderRadius: 30,
        marginTop: 24,
        marginBottom: 16,
        overflow: 'hidden',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        // Shadow for iOS
        shadowColor: Colors.dark.background,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        // Elevation for Android
        elevation: 4,
    },
    createButtonText: {
        color: Colors.light.background,
        fontSize: 20,
        fontWeight: '700',
    },
}); 