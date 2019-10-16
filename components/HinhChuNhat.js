import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

class HinhChuNhat extends Component {
    state = {
       dai: '',
       rong: ''
    }
    handleDai = (text) => {
       this.setState({ dai: text })
    }
    handleRong = (text) => {
       this.setState({ rong: text })
    }
    dientich = (dai, rong) => {
       alert('Chiều dài: ' + dai + ' Chiều Rộng: ' + rong + " Diện tích: " + this.tinhdientich(dai,rong))
    }
    chuvi = (dai, rong) => {
        alert('Chiều dài: ' + dai + ' Chiều Rộng: ' + rong + " Chu vi: " + this.tinhchuvi(dai,rong))
     }
    tinhchuvi = (dai, rong)=> (parseInt(dai)+ parseInt(rong))*2;
    tinhdientich = (dai, rong)=> dai*rong;
    render() {
       return (
          <View style = {styles.container}>
             <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Nhập chiều dài: "
                placeholderTextColor = "#9a73ef"
                //autoCapitalize = "none"
                keyboardType = 'numeric'
                onChangeText = {this.handleDai}/>
             
             <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Nhập chiều rộng: "
                placeholderTextColor = "#9a73ef"
                //autoCapitalize = "none"
                keyboardType = 'numeric'
                onChangeText = {this.handleRong}/>
             
             <TouchableOpacity
                style = {styles.submitButton}
                onPress = {
                   () => this.dientich(this.state.dai, this.state.rong)
                }>
                <Text style = {styles.submitButtonText}> Tính diện tích </Text>
             </TouchableOpacity>

             <TouchableOpacity
                style = {styles.submitButton}
                onPress = {
                   () => this.chuvi(this.state.dai, this.state.rong)
                }>
                <Text style = {styles.submitButtonText}> Tính chu vi </Text>
             </TouchableOpacity>
          </View>
       )
    }
 }
export default HinhChuNhat

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   }
})