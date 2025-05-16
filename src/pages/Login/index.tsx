import theme from "@/theme";
import { StyleSheet, SafeAreaView, Image, Text } from "react-native";

export default function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("@/assets/logoPetTracking.png")}
        style={{
          width: 200,
          height: 200,
          justifyContent: "center",
          alignSelf: "center",
        }}
      />
      <Text
        style={{
          textAlign: "center",
          fontFamily: theme.fonts.regular,
        }}
      >
        Olá!!
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
