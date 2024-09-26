import React from 'react';
import { Text, View } from 'react-native';
import { t } from 'react-native-tailwindcss'; // Import t from react-native-tailwindcss

export default function App() {
  return (
    <View style={[t.flex1, t.itemsCenter, t.justifyCenter]}>
      <Text style={[t.fontBold, t.text5xl, t.textBlue500]}>Hello world</Text>
    </View>
  );
}
