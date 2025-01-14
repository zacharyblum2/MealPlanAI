import { Ionicons } from "@expo/vector-icons";
import { memo } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Menu, MenuOption, MenuOptions, MenuTrigger } from "react-native-popup-menu";
import * as ImagePicker from "expo-image-picker";

type PhotosOption = {
  id: number;
  text: string;
  name: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
};

const photosOptions: PhotosOption[] = [
  {
    id: 1,
    text: "Attach Photos",
    name: "image-outline",
    onPress: async () => {
      try {
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });

        if (!result.canceled) {
          console.log("Selected image:", result.assets[0].uri);
        }
      } catch (error) {
        console.error("Error picking an image:", error);
      }
    },
  },
  {
    id: 2,
    text: "Take Photos",
    name: "camera-outline",
    onPress: () => {
      console.log("Take photos"); // This can navigate to a camera screen or handle ML features
    },
  },
];

const keyExtractor = (item: PhotosOption) => item.id.toString();

const renderItem = ({ item }: { item: PhotosOption }) => {
  return (
    <Block
      text={item.text}
      iconName={item.name}
      onPress={item.onPress}
    />
  );
};

export const PhotosPopup = memo(() => {
  return (
    <Menu>
      <MenuTrigger>
        <Ionicons name="add" size={27} color="black" />
      </MenuTrigger>
      <MenuOptions
        customStyles={{
          optionsContainer: styles.optionsContainer,
          optionsWrapper: styles.optionsWrapper,
        }}
      >
        <FlatList
          data={photosOptions}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          ItemSeparatorComponent={Divider}
        />
      </MenuOptions>
    </Menu>
  );
});

export const Divider = memo(() => {
  return <View style={styles.divider} />;
});

type BlockProps = {
  text: string;
  iconName: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
};

export const Block = memo(({ text, iconName, onPress }: BlockProps) => {
  return (
    <MenuOption
      onSelect={onPress}
      customStyles={{
        optionWrapper: {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        },
      }}
    >
      <Text>{text}</Text>
      <Ionicons name={iconName} size={27} color="black" />
    </MenuOption>
  );
});

const styles = StyleSheet.create({
  optionsContainer: {
    marginTop: -37,
    borderRadius: 6,
  },
  optionsWrapper: {
    boxShadow: "0px 0px 0px 0px",
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#7F8487",
  },
});
