import React from 'react';
import {
 View,
 Text,
 SafeAreaView,
 StyleSheet,   
 ScrollView
} from 'react-native';

import COLORS from '../Const/Colors';

import FultterCards from '../Cards/Fultter';
import NativeCard from '../Cards/NativeCard';
import NativeiOSCard from '../Cards/NativeiOS';
import ReactCard from '../Cards/ReactNative';
import CordovaCard from '../Cards/Cordova';
import IonicCard from '../Cards/Ionic';
import Log from '../assets/images/Logo.svg';

class Home extends React.Component {
    constructor(){
    super()
    }

    render(){
        return(
            <SafeAreaView style={{ flex:1,backgroundColor:COLORS.white, }}>
              <ScrollView>
              
                <View style={styles.header}>
                <Log marginTop={20} marginLeft={15}/>
                     </View>
                    <View style={styles.contain}>
                    <View>
                        <Text style={{ fontSize:46, color:COLORS.blue }}>CI/CD for</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize:46, color:COLORS.blue }}>mobile</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize:46, color:COLORS.blue }}>that matches</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize:46, color:COLORS.blue }}>your needs</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize:16, color:COLORS.blue }}>Select the type of project you are</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize:16, color:COLORS.blue }}>working with and get started now!</Text>
                    </View>
                </View> 
                
                
                <View style={{ flexDirection:'column',justifyContent:'center',marginTop:15,padding:5 }}>
             <View style={{ marginBottom:15 }}>
                    <FultterCards />
                </View>

                <View style={{ marginBottom:10 }}>
                    <NativeCard />
                    </View>
                    
                <View style={{ marginBottom:10 }}>
                    <NativeiOSCard />
                    </View>
   
                <View style={{ marginBottom:10 }}>
                    <ReactCard />
                    </View>
                <View style={{ marginBottom:10 }}>
                    <CordovaCard />
                    </View>
                <View style={{ marginBottom:10 }}>
                    <IonicCard />
                    </View>
              </View>
            </ScrollView>
                 </SafeAreaView>
        )      
 }
}

const styles = StyleSheet.create({
    header:{
        flex:1,
        backgroundColor:COLORS.light,  
        },

    contain:{
        flex:0.45,
        justifyContent:'center',
        alignItems:'center',
        marginTop:30      
    },
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
});



export default Home;