import React, { FC } from "react"
import { View, TextInput, StyleSheet} from "react-native"
import { Ionicons } from "@expo/vector-icons"

interface Props{
    icon: string,
    placeholder: string,
    onChangeText: (text: string) => void;
}


const Input: FC<Props> = (props) =>{
	return (
		<View>
			<View>
				<Ionicons />
			</View>
			<View>
				<TextInput />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	}
})

export default Input