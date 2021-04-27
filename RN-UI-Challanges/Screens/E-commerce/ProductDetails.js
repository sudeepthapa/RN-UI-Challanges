import React from 'react'
import { StyleSheet, View } from 'react-native'
import HeaderSection from "./Compoent/HeaderSection/HeaderSection";
import DetailSection from "./Compoent/DetailSection/DetailSection";

const ProductDetails = (props) => {
    return (
        <View style={styles.productDetails}>
            <HeaderSection {...props}/>
            <DetailSection />
        </View>
    )
}

export default ProductDetails

const styles = StyleSheet.create({
    productDetails: {
        flex:1,
    }
})
