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
    <>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {hasBack && (
          <TouchableOpacity onPress={goBack}>
            <ArrowLeft style={{ flex: 1 }} />
          </TouchableOpacity>
        )}
      </View>
      {textPage && (
        <Text
          style={{
            textAlign: "center",
            alignSelf: "center",
            position: "absolute",
            color: theme.colors.black,
          }}
        >
          {textPage}
        </Text>
      )}
    </>
  );
}
