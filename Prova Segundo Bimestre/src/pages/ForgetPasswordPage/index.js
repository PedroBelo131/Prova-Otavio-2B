import { Link } from "@react-navigation/native";
import { SafeAreaView, TextInput, StyleSheet, View } from "react-native";

export default function ForgotPasswordPage(){

    return(
      <SafeAreaView style={styles.container}>

            <View style={styles.inputs}>
                <TextInput style={styles.inputEmail} placeholder='Email'/>
                <TextInput style={styles.inputSenha} placeholder='Nova Senha'/>
                <TextInput style={styles.inputSenhaNovamente} placeholder='Digite a senha novamente'/>
            </View>

        <View style={styles.view}>
        <Link style={styles.link} to={{screen: "LoginPage"}}>Voltar ao Login</Link>
        <Link style={styles.link} to={{screen: "DashbordPage"}}>Entrar</Link>
        </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center'
},
txt:{
    color: 'white'
},
link: {
    backgroundColor: 'orange',
    padding: 10,
    fontSize: 23,
    borderRadius: '15px',
    margin: 10
},
view: {
    flexDirection: "row",
    
},
inputs: {
    color : 'white',
    margin: 10,
    borderColor: 'white'
},
inputEmail:{
    color: 'white',
    borderColor: 'white',
},
inputSenha:{
    color: 'white',
    borderColor: 'white'
},
});