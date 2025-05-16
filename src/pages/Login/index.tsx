import { useAuthContext } from "@/context/AuthContext";
import Button from "@/library/Button";
import Input from "@/library/Input";
import ScreenContainer from "@/library/ScreenContainer";
import Text from "@/library/Text";
import theme from "@/theme";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Image, TouchableOpacity } from "react-native";

export default function Login() {
  const navigation = useNavigation();

  const handleNavigateToRegister = () => {
    navigation.navigate("Register");
  };

  const handleNavigateToHome = () => {
    login();
  };

  const { login } = useAuthContext();

  return (
    <ScreenContainer>
      <Image
        source={require("@/assets/logoPetTracking.png")}
        style={{
          width: 200,
          height: 200,
          justifyContent: "center",
          alignSelf: "center",
        }}
      />
      <Text>Login</Text>

      <Input
        label="Email ou Telefone"
        placeholder="example@example.com"
        keyboardType="email-address"
        autoComplete="email"
      />

      <Input
        label="Senha"
        secureTextEntry
        placeholder="••••••••"
        autoComplete="password"
      />

      <TouchableOpacity>
        <Text>Esqueci minha senha</Text>
      </TouchableOpacity>

      <Button title="Entrar" onPress={handleNavigateToHome} />

      <TouchableOpacity onPress={handleNavigateToRegister}>
        <Text>Não tem uma conta? Crie agora!</Text>
      </TouchableOpacity>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: theme.spacing.md,
  },
});
