import React from 'react'
import {View} from 'react-native'
import {Input, SmallButton} from './common'

const NewPostInput = ({onSubmit, value, onChangeText}) => {
	console.log(value);
	return(
		<View style={{flexDirection:'row', alignItems:'center'}}>
			<Input
				inputText={'Post:'}
				value={value}
				onChangeText={onChangeText}
				placeholder={'Lets party!!!'}
			/>
			<SmallButton text={'+'} onButtonPress={onSubmit}/>
		</View>
	)
}

export default NewPostInput;