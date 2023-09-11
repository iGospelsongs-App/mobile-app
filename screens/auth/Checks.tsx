import { StyleSheet, View, Platform, Image, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ScreenHeader from '../../components/ScreenHeader'
import manImg from '../../assets/images/flexing.png'
import { LinearGradient } from 'expo-linear-gradient'
import Checkbox from 'expo-checkbox';
import Button1 from '../../components/Button1'
import { useNavigation } from '@react-navigation/native'

const Checks = ({navigation}) => {
    const [isChecked, setChecked] = useState(false);
    const [newsCheck, setNewsCheck] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.headerCont}>
                    <ScreenHeader title="Create Account" />
                </View>
                <ScrollView>
                <View style={styles.imgWrapper}>
                    <Image source={manImg} style={styles.img} resizeMode='cover' />
                </View>

                <View style={styles.content}>
                    {/* terms check */}
                    <View style={styles.checkField}>
                        <Checkbox
                            style={styles.checkbox}
                            value={isChecked}
                            onValueChange={setChecked}
                            color={isChecked ? '#FF375F' : undefined}
                        />
                        <Text style={styles.agree}>
                            I acknowledge that i have read and agree to {"\n"}
                            <Text style={{ color: '#FF375F' }}>iGospel's Agreement</Text>
                        </Text>
                    </View>

                    {/* news letter check */}
                    <View style={styles.checkField}>
                        <Checkbox
                            style={styles.checkbox}
                            value={newsCheck}
                            onValueChange={setNewsCheck}
                            color={newsCheck ? '#FF375F' : undefined}
                        />
                        <Text style={styles.agree}>
                            Sign up for the latest updates, news and more about your preferred artists.
                            Be among the first to recieve exclusive content.
                        </Text>
                    </View>

                    <View style={styles.info}>
                        <Text style={styles.infoText}>
                            By clicking on the "Sign Up" button, you acknowledge that you've gone through and consent to iGospel's <Text style={{color: 'white'}}>Terms of Use.</Text>
                            {"\n"} {"\n"}

                            Take a moment to go over iGospel's <Text style={{color: 'white'}}>Privacy Policy</Text> for insights into how they gather and utilize your personal data .
                        </Text>

                    </View>
                    <Button1 onPress={() => navigation.navigate('account-success')} title="Proceed" ready={isChecked} />
                </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default Checks

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    wrapper: {
        flex: 1,
        marginTop: Platform.OS === 'android' && 20
    },
    img: {
        width: '100%',
        height: 300
    },
    imgWrapper: {
        marginTop: 10,
        position: 'relative'
    },
    headerCont: {
        paddingHorizontal: 14
    },
    content: {
        marginTop: 50,
        paddingHorizontal: 14,
    },
    agree: {
        color: 'white',
        fontFamily: 'sf-reg',
        fontSize: 16,
    },
    checkField: {
        marginBottom: 26,
        flexDirection: 'row',
        alignItems: 'center'
    },
    checkbox: {
        marginTop: 8,
        marginRight: 8,
        marginBottom: 8
    },
    info: {
        marginBottom: 25
    },
    infoText: {
        color: '#667085',
        fontFamily: 'sf-reg',
        fontSize: 16,
    }
})