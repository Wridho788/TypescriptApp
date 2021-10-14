import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import Wellcome from './screens/wellcome';

const App = (): JSX.Element => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View>
				{/* page 1 with style component*/}
				{/* Wellcome page */}
				<Wellcome/>
			</View>
		</SafeAreaView>
	);
};

export default App;
