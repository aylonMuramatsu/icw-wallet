import React from 'react';
import { View, Image } from 'react-native';


export default function Avatar(){
  return (
    <View style={styles.Container}>
     <Image 
      style={styles.Avatar} 
      source={{ uri:"https://scontent.fbau4-1.fna.fbcdn.net/v/t1.0-9/49239303_2064826003604623_2950393918170071040_o.jpg?_nc_cat=101&_nc_sid=174925&_nc_eui2=AeHt_TrZlfPd84RqnQl3OuTCUAyOHRnNO41QDI4dGc07jbx-UyxZ0r_T8ywZ2Wa_gtMDhg10jNE7cePdXguF-eXi&_nc_ohc=rXEm19X8Zi4AX-edB0y&_nc_ht=scontent.fbau4-1.fna&oh=066d8fec76cbf983d1fe326365ec1c1f&oe=5F3528A6"}}
      /> 
    </View>
  )
}

const styles = {
  Container: {
    
  },
  Avatar: {
    height: 54,
    width:54,
    borderRadius: 54,
    borderWidth: 4,
    borderColor: '#9C1FA7',
  }
}