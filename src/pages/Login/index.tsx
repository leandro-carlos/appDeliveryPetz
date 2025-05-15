import { StyleSheet, SafeAreaView, Image } from "react-native";

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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
