import Text from "../Text";

interface ErrorMessageProps {
	readonly message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
	return (
		<Text style={{ paddingVertical: 4 }} colorText="error">
			{message}
		</Text>
	);
}
