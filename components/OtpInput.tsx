import { View, Text, TextInput, Pressable, Keyboard, StyleSheet } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

const OtpInput = ({ setPinReady, code, setCode, maxLength }) => {
    const arr = new Array(maxLength).fill(0);
    const textInputRef = useRef(null)
    const [inputIsFocused, setInputIsFocused] = useState(false)

    const handleOnPress = () => {
        setInputIsFocused(true);
        Keyboard.dismiss();
        textInputRef?.current?.focus();
    }

    const handleOnBlur = () => {
        setInputIsFocused(false);
    };

    useEffect(() => {
        setPinReady(code.length === maxLength);
        return () => setPinReady(false);
    }, [code])

    const codeDigitInput = (_value: string, index: number) => {
        const emptyInputChar = " ";
        const digit = code[index] || emptyInputChar;
        const isCurrentDigit = index === code.length;
        const isLastDigit = index === maxLength - 1;
        const isCodeFull = code.length === maxLength;
        const isDigitFocused = isCurrentDigit || (isLastDigit && isCodeFull)

        return (
            <View
                key={index}
                style={[styles.inputWrapper, {
                    borderColor: inputIsFocused && isDigitFocused ? 'white' : '#667085'
                }]}
            >
                <Text
                    style={{
                        color: '#667085',
                        fontSize: 45,
                        fontFamily: 'sf-med',
                    }}
                >{digit}</Text>
            </View>
        );
    }


    return (
        <View
            style={styles.inputContainer}
        >
            <Pressable
                onPress={handleOnPress}
                style={styles.cont2}
            >
                {arr.map(codeDigitInput)}
            </Pressable>
            <TextInput
                style={styles.input}
                value={code}
                onChangeText={setCode}
                maxLength={maxLength}
                returnKeyType='done'
                textContentType='oneTimeCode'
                ref={textInputRef}
                onBlur={handleOnBlur}
                autoCapitalize="none"
                keyboardType='number-pad'
            />

        </View>
    )
}

export default OtpInput

const styles = StyleSheet.create({
    inputWrapper: {
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        width: 77,
        height: 77,
        backgroundColor: 'black'
    },
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 12,
        marginBottom: 12,
    },
    cont2: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    input: {
        borderWidth: 1,
        padding: 12,
        width: 1,
        height: 1,
        opacity: 0,
        position: 'absolute'
    }
})