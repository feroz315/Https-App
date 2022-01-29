
import React from 'react';
import {
 View,
 Text,
 SafeAreaView,
 Image,
 StyleSheet,   
 TouchableOpacity,
 Button,
 Modal,
 TextInput
} from 'react-native';
import COLORS from '../Const/Colors';

import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Cordova from '../assets/images/Cordova.17dfb6be.svg';




class CordovaCard extends React.Component{
    constructor(){
        super()
        this.state={
            show:false,
            show2:false
        }
   
    }
    render(){
       return(
        <SafeAreaView>

        <View style={{ flex:1,}}>
         <TouchableOpacity style={styles.Card} activeOpacity={0.7} onPress={() => {this.setState({show:true})}}>
            <Cordova marginTop={15}/>
            <Text style={{ fontSize:15, color:COLORS.blue }}>Cordova</Text>
            
            <View style={{ flex:0.50,marginTop:10}}>
             <Modal 
             transparent={true} 
             visible={ this.state.show }>
      
              <View style={{flex:1}}>
                <View style={{ backgroundColor:'#FFEAAA',marginTop:240,margin:15, borderRadius:25,flex:1 }}>
                
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'flex-end',marginLeft:20,marginTop:10}}>
              <View>
                <Text style={{ fontSize:16,color:'#040622',padding:2 }}>Hello...</Text>
                <Text style={{ fontSize:26,color:'#040622',fontWeight:'bold'}}>Cordova</Text>
               </View>
               
              <View style={{ marginRight:40}}> 
               <Entypo name="circle-with-cross" size={30} color="red" onPress={() => {this.setState({show:false})}}/>
             </View>      
          </View>                                     
      
              <View style={ styles.Searchinput }>        
                  <View style={ styles.Viewinput }>
                      <TextInput placeholder="username/email" style={styles.input} />
                      <AntDesign name="eyeo" size={20} color="black" style={{ marginRight:10 }}/>
                      </View>
                  </View>         
              
              <View style={ styles.Searchinput }>        
                  <View style={ styles.Viewinput }>
                      <TextInput placeholder="course" style={styles.input} />
                      <AntDesign name="eyeo" size={20} color="black" style={{ marginRight:10 }}/>
                      </View>
                  </View>         
      
             <View style={ styles.Searchinput }>        
                  <View style={ styles.Viewinput }>
                      <TextInput placeholder='password' style={styles.input} />
                      <EvilIcons name="lock" size={24} color="black" style={{ marginRight:10 }}/>
                      </View>
                  </View>         
                  
              <View style={ styles.Searchinput }>        
                  <View style={ styles.Viewinput }>
                      <TextInput placeholder="confirm password" style={styles.input} />
                      <EvilIcons name="lock" size={24} color="black" style={{ marginRight:10 }}/>
                      </View>
                  </View>         
                 
                  <View style={styles.userbtn}>         
                 <TouchableOpacity activeOpacity={0.8}>
                    <Text style={{ color:"#FFEAAA", fontSize:20,}}>Register</Text>
                     </TouchableOpacity>
              </View> 
      
      
                   <View style={{ flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:5,marginRight:10 }}>
                      <Text style={{ fontSize:17 }}>Already have account?</Text>
                      <TouchableOpacity onPress={() => {this.setState({show2:true})}}><Text style={{ fontSize:17,color:'#FF706D',padding:5 }}>Login</Text>
                      </TouchableOpacity>              
                  </View>
                </View>
              </View>   
            </Modal>            
        
</View>



             </TouchableOpacity>
               


    </View>

        </SafeAreaView>
       )      
 }
}

const styles = StyleSheet.create({
    Card:{
        marginTop:10,
        borderWidth:3,
        borderColor:COLORS.light,
        borderRadius:10,
        height:130,
        width:"95%",
        marginLeft:10,
        justifyContent:'center',
        alignItems:'center'         
    },
    Searchinput:{
        flexDirection:'row',
        marginTop:30,
        borderWidth:1,
        borderBottomWidth:1,
        borderRadius:10,
        width:'85%',
        height:55,
        marginLeft:20
    },
    input:{
        borderBottomColor:'#199187',
        marginBottom:10,
        marginTop:20,
        marginLeft:10,
        fontSize:16,
        color:'#000',
        flex:1    
      },
      Viewinput:{
        height:50,
        flexDirection:'row',
        flex:1,
        alignItems:'center',
        borderRadius:10
      },
      userbtn:{
        borderWidth:1,
        height:60,
        width:'85%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:15,
        backgroundColor:'#040622',   
        marginTop:25,
        marginLeft:20
       },     
    
});



export default CordovaCard;