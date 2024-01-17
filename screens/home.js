import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import HomeComponents from "../components/HomeComponents";
import Footer from "../components/Footer";

import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  const classNavigator = () => {
    navigation.navigate("Class1");
  };
  const class2Navigator = () => {
    navigation.navigate("Class2");
  };
  const class3Navigator = () => {
    navigation.navigate("Class3");
  };
  const class4Navigator = () => {
    navigation.navigate("Class4");
  };
  const class5Navigator = () => {
    navigation.navigate("Class5");
  };
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require("../assets/img/school-back2.png")}
        style={{ width: "100%" }}
      />
      <ScrollView>
        <View style={{ margin: 20, gap: 8 }}>
          <Text style={{ fontWeight: 700 }}>Pelajaran</Text>
          <HomeComponents
            onPress={classNavigator}
            imagePath={require("../assets/img/Rectangle.png")}
            title="Proyek Sarjana Lanjutan II"
            author="Fatih Ardyov"
            iconPath={require("../assets/img/Rectangle11.png")}
          />
          <HomeComponents
            onPress={class2Navigator}
            imagePath={require("../assets/img/Rectangle1.png")}
            title="Manajemen proyek perangkat lunak"
            author="Dodi Junaidi"
            iconPath={require("../assets/img/Rectangle11.png")}
          />
          <HomeComponents
            onPress={class3Navigator}
            imagePath={require("../assets/img/Rectangle2.png")}
            title="Penambangan data"
            author="M. Rafi Agnil"
            iconPath={require("../assets/img/Rectangle11.png")}
          />
          <HomeComponents
            onPress={class4Navigator}
            imagePath={require("../assets/img/Rectangle3.png")}
            title="Pengembangan Sistem yang Luas"
            author="Rizky Agung Prasetyo"
            iconPath={require("../assets/img/Rectangle11.png")}
          />
          <HomeComponents
            onPress={class5Navigator}
            imagePath={require("../assets/img/Rectangle4.png")}
            title="Pemrograman seluler"
            author="Dodi Junaidi"
            iconPath={require("../assets/img/Rectangle11.png")}
          />
        </View>
      </ScrollView>
      <View style={{ justifyContent: "center" }}>
        <Footer />
      </View>
    </View>
  );
}

