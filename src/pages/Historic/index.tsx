import { Text, StyleSheet, SafeAreaView } from "react-native";

export default function Historic() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Historico</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
