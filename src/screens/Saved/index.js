import React, { Component, useState  } from 'react';
import { View, Image, FlatList, ImageBackground, Text, TouchableOpacity, Alert } from 'react-native';
import data from '../../assets/data/';
import { SafeAreaView } from 'react-native-safe-area-context';


const Saved=()=>{  return (
  <SafeAreaView style={{flex:1}}>
    <FlatList style={{flexGrow:1}}
      vertical={true} 
      showsVerticalScrollIndicator={false} 
      data={data}
      renderItem={ ({ item }) => (
        <ImageBackground 
          source={item.image}
          style={{
          width: 400, height: 450,
          margin:10
          }}>
          <Text style={{color: "white", fontSize: 42, textAlign: "center", backgroundColor: "#000000c0"}}>
            {item.name}
          </Text>
          <Text style={{color: "white", fontSize: 16, textAlign: "center", backgroundColor: "#000000c0"}}>
             {item.bio}
          </Text>
          <TouchableOpacity style={{alignItems: "center", backgroundColor: "#000000c0"}} 
          onPress={()=> Alert.alert("unsaved")
            
          } 
          activeOpacity={0.7}>
            <Text style={{color: "white", fontSize: 16, textAlign: "center"}}>unsave</Text>
          </TouchableOpacity>
        </ImageBackground>
      )}
    />
  </SafeAreaView>
  )
}
export default Saved;