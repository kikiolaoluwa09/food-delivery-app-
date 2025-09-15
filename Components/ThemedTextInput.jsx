import { TextInput , useColorScheme} from 'react-native'
import { Colors } from '../Constants/Colors';


const ThemedTextInput = ({style, ...props}) => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <TextInput 
    style={[{
            backgroundColor: theme.uiBackground,
            color: theme.text,
            padding:10,
            borderRadius: 6,

        }, style]}
        {...props}
    />
  )
}

export default ThemedTextInput

