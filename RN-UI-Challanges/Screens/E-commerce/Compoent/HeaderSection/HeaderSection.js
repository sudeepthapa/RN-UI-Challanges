import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Header from "./Header/Header";
import ProductImage from "./ProductImage/ProductImage";

const HeaderSection = (props) => {
    return (
        <View style={styles.headerSection}>
            <Header {...props} />
            <ProductImage/>
        </View>
    )
}

export default HeaderSection

const styles = StyleSheet.create({
    headerSection:{
        // marginBottom:30
    }
})
