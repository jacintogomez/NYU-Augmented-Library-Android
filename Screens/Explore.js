import React, {useState} from "react";
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  Button,
  ScrollView,
} from 'react-native';
import ScreenTemplate from "./screenTemplate";
import styles from "./styles/General";


export default function Explore() {
  const [searchQuery, setSearchQuery] = useState('');
  const bords1={borderTopLeftRadius:15,borderBottomLeftRadius:15};
  const bords2={borderTopRightRadius:15,borderBottomRightRadius:15};
  const setHovered=useState(false);
  const isHovered=useState(false);
  const presin=()=>{
    setHovered(true);
  }
  const presout=()=>{
    setHovered(false);
  }
  return(
    <ScreenTemplate contentContainerStyle={styles.scrollView}>
      <ScrollView>
        <Text style={{fontSize:40,alignSelf:'center',padding:20}}>Welcome to NYU Dibner!</Text>
        <View style={{width: 300,alignSelf: 'center'}}>
          <View style={{ flexDirection: 'row', alignItems: 'center' ,margin: 20}}>
            <TextInput
              style={{flex: 1,height: 30,paddingLeft: 7,borderWidth: 1,borderColor: 'gray',...bords1,...styles.searchBar}}
              placeholder="Search..."
              onChangeText={text=>setSearchQuery(text)}
              value={searchQuery}
            ></TextInput>
            <Button title="Search" style={{flex: 1,...bords2}}></Button>
          </View>
        </View>
        <View style={styles.options}>\
          <View style={styles.exploreBox}><Text>Books & More</Text></View>
          <View style={styles.exploreBox}><Text>Articles and Databases</Text></View>
          <View style={styles.exploreBox}><Text>Course Reserve</Text></View>
        </View>
      </ScrollView>
    </ScreenTemplate>
  )
}



