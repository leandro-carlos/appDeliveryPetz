import { TouchableOpacity, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { ArrowLeft } from "phosphor-react-native";
import Text from "../Text";
import theme from "@/theme";

interface Props {
  readonly hasBack?: boolean;
  readonly textPage?: string;
}

export default function Header({ hasBack = true, textPage }: Props) {
  const navigation = useNavigation();

  function goBack() {
    navigation.goBack();
  }

  return (
    <View
      style={{
        height: 56, // altura padrão de header
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        position: "relative", // permite o botão de voltar ficar absoluto se necessário
      }}
    >
      {hasBack && (
        <TouchableOpacity
          onPress={goBack}
          style={{
            position: "absolute",
            left: 0,
            paddingHorizontal: 16,
          }}
        >
          <ArrowLeft color={theme.colors.black} size={24} />
        </TouchableOpacity>
      )}

      {textPage && (
        <Text
          style={{
            fontSize: 16,
            fontFamily: theme.fonts.bold,
            color: theme.colors.black,
          }}
        >
          {textPage}
        </Text>
      )}
    </View>
  );
}
