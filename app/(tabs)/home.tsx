import {SafeAreaView, Text, View, StyleSheet} from 'react-native'


export default function HomePage(){
    return(
        <View style={styles.container}>
            <Text>This is Home Page!!!!!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 40
    }
})

