import React from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import { t } from 'react-native-tailwindcss';
import { StyleSheet, Dimensions } from 'react-native';

// Get screen dimensions to set button width based on the screen width
const { width: screenWidth } = Dimensions.get('window');

const NetflixScreen = () => {
  return (
    <SafeAreaView style={[t.flex1, t.bgBlack]}>
      <StatusBar barStyle="light-content" />
      
      {/* Logo and Privacy/Sign In */}
      <View style={[t.flexRow, t.justifyBetween, t.pX4, t.pT4]}>
        <Text style={[t.textWhite, t.textXl, t.fontBold]}>NETFLIX</Text>
        <View style={[t.flexRow]}>
          <Text style={[t.textWhite, t.mR4, t.mT1]}>Privacy</Text>
          <Text style={[t.textWhite, t.mT1]}>Sign In</Text>
        </View>
      </View>

      {/* Content */}
      <View style={[t.flex1, t.justifyCenter, t.itemsCenter]}>
        <Text style={[t.textWhite, styles.customBigText]}>
          Unlimited movies, TV shows, and more.
        </Text>
        <Text style={[t.textWhite, t.textBase, styles.customSmallText, t.mT4]}>
          Watch anywhere. Cancel anytime.
        </Text>
        <Text style={[t.textWhite, t.textBase, styles.customSmallText, t.mT1]}>
          Tap the link below to sign up.
        </Text>
      </View>

      {/* Get Started Button */}
      <View style={[t.itemsCenter, t.pB8]}>
        <TouchableOpacity
          style={[
            styles.customButton, // Custom button style for width and alignment
            t.bgRed600,
            t.pY3, // Adjust padding to match the design
            t.roundedFull,
          ]}
        >
          <Text style={[t.textWhite, t.textLg, styles.customButtonText]}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  customBigText: {
    fontSize: 32, // Kích thước font 32px
    fontWeight: '500', // Độ dày font 500
    textAlign: 'center', // Canh giữa
  },
  customSmallText: {
    fontSize: 18, // Kích thước font 18px
    fontWeight: '500', // Độ dày font 500
    textAlign: 'center', // Canh giữa
  },
  customButton: {
    width: screenWidth * 0.9, // Button width covers 90% of the screen width
    alignItems: 'center', // Center text inside the button
  },
  customButtonText: {
    fontWeight: 'bold', // Bold text for the button
    fontSize: 18, // Slightly larger text
  },
});

export default NetflixScreen;
