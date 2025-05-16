import { View } from "react-native";

interface Props {
	readonly size?: number;
}

export default function Spacing({ size }: Props) {
	return <View style={{ height: size ?? 8 }} />;
}
