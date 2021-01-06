import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView} from 'react-native';
import db from '../config';
import firebase from 'firebase'

export default class LoginScreen extends React.Component{
    constructor(){
        super();
        this.state={
     emailId:'',
      firstName:'',
      lastName:'',
     feedback:'',
     rating:'',
     isModalVisible:'false'
    }
          
        }


 showModal = ()=>{
   return(
   <Modal
     animationType="fade"
     transparent={true}
     visible={this.state.isModalVisible}
     >
     <View style={styles.modalContainer}>
       <ScrollView style={{width:'100%'}}>
         <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
         <Text
           style={styles.modalTitle}
           >Registration</Text>
         <TextInput
           style={styles.formTextInput}
           placeholder ={"First Name"}
           maxLength ={8}
           onChangeText={(text)=>{
             this.setState({
               firstName: text
             })
           }}
         />
         <TextInput
           style={styles.formTextInput}
           placeholder ={"Last Name"}
           maxLength ={8}
           onChangeText={(text)=>{
             this.setState({
               lastName: text
             })
           }}
         />
         <TextInput
           style={styles.formTextInput}
           placeholder ={"Feedback"}
           maxLength ={10}
           onChangeText={(text)=>{
             this.setState({
               contact: text
             })
           }}
         />
         <TextInput
           style={styles.formTextInput}
           placeholder ={"Address"}
           multiline = {true}
           onChangeText={(text)=>{
             this.setState({
               address: text
             })
           }}
         />
         <TextInput
           style={styles.formTextInput}
           placeholder ={"Rating"}
          onChangeText={(text)=>{
             this.setState({
               emailId: text
             })
           }}
         />
       
         </KeyboardAvoidingView>
       </ScrollView>
     </View>
   </Modal>
 )
 }
  render(){
     return(
       <View style={styles.container}>
         <View style={{justifyContent: 'center',alignItems: 'center'}}>
 
         </View>
           {
             this.showModal()
           }
         <View style={{justifyContent:'center', alignItems:'center'}}>
           <Text style={styles.title}>MediHelp</Text>
         </View>
         <View>
             </View>
     </View>
     )
   

  
  }  
}
  
 
 
 const styles = StyleSheet.create({
   container:{
    flex:1,
    backgroundColor:'cyan',
    alignItems: 'center',
    justifyContent: 'center'
  },
  profileContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  title :{
    fontSize:65,
    fontWeight:'bold',
    paddingBottom:30,
    color : 'red'
  },
  loginBox:{
    width: 300,
    height: 40,
    borderBottomWidth: 1.5,
    borderColor : 'black',
    fontSize: 20,
    margin:10,
    paddingLeft:10
  },
  KeyboardAvoidingView:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  modalTitle :{
    justifyContent:'center',
    alignSelf:'center',
    fontSize:30,
    color:'orange',
    margin:50
  },
  modalContainer:{
    flex:1,
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"white",
    marginRight:30,
    marginLeft : 30,
    marginTop:80,
    marginBottom:80,
  },
  formTextInput:{
    width:"75%",
    height:35,
    alignSelf:'center',
    borderColor:'grey',
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10
  },
  registerButton:{
    width:200,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1,
    borderRadius:10,
    marginTop:30
  },
  registerButtonText:{
    color:'orange',
    fontSize:15,
    fontWeight:'bold'
  },
  cancelButton:{
    width:200,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    marginTop:5,
  },
 
  button:{
    width:300,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25,
    backgroundColor:"lightgreen",
    shadowColor: "white",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.30,
    shadowRadius: 10.32,
    elevation: 16,
    padding: 10
  },
  buttonText:{
    color:'white',
    fontWeight:'200',
    fontSize:20
  }
 })
 


