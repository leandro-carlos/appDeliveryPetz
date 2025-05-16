import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import theme from "@/theme";
import { ReactNode } from "react";

interface ScreenContainerProps {
  readonly children: ReactNode;
  readonly scrollEnabled?: boolean;
  readonly centerContent?: boolean;
}

export default function ScreenContainer({
  children,
  scrollEnabled = true,
  centerContent = false,
}: ScreenContainerProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
      >
        {scrollEnabled ? (
          <ScrollView
            contentContainerStyle={[
              styles.content,
              centerContent && styles.centered,
            ]}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            {children}
          </ScrollView>
        ) : (
          <View style={[styles.content, centerContent && styles.centered]}>
            {children}
          </View>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  flex: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.lg,
    gap: theme.spacing.sm,
  },
  centered: {
    justifyContent: "center",
  },
});
