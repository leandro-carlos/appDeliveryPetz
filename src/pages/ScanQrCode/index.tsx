import { Text, StyleSheet, SafeAreaView } from "react-native";

export default function ScanQrCode() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>ScanQrCode</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
