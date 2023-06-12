import { SafeAreaView, Text, StyleSheet, Image, ImageBackground } from "react-native";

const image = {uri: 'https://pbs.twimg.com/profile_images/1664209935243137024/kHjoZ7hT_400x400.jpg'};

export default function DashbordPage(){


    return(
        <ImageBackground source={image} resizeMode="center" style={styles.image}>
      <SafeAreaView style={styles.container}>
        
        <Text style={styles.txt}>Bem Vindo de Volta</Text>

        

      </SafeAreaView>
      </ImageBackground>
    );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
},
txt:{
    color: 'black',
    fontSize: 50
},
image: {
  flex: 1,
  justifyContent: 'center',
}
});