import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { PhotosPopup } from "@/components/ui/PhotosPopup";

export const HomePage = () => {
  return (
    <SafeAreaView style={styles.parentContainer}>
      <KeyboardAwareScrollView
        style={styles.container}
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={styles.scrollViewContainer}
        enableOnAndroid={true} // Enables for Android as well
      >
        <View style={styles.content}>
          <Text>

          </Text>
        </View>

        {/* Bottom TextInput section */}
        <View style={styles.bottomContainer}>
          <PhotosPopup />
          <TextInput
            style={styles.textInput}
            placeholder="Recipe"
            placeholderTextColor="black"
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: "flex-start", // Ensure content starts from the top
  },
  content: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 20,
  },
  bottomContainer: {
    backgroundColor: "#e3e3e3",
    flexDirection: "row",
    gap: 8,
    borderRadius: 20,
    marginHorizontal: 10,
    alignItems: "center",
    minHeight: 40,
    paddingLeft: 8
  },
  textInput: {
    width: "80%",
    fontSize: 17,
    color: "green",
  },
  cameraButton: {
    padding: 0,
  },
});
