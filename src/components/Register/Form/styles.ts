import { StyleSheet } from "react-native";
import COLORS from "../../../styles/colors";

const styles = StyleSheet.create(
    {   
        container: {
            flex: 1,
            backgroundColor: COLORS.screens.screenBackground,
            alignItems: 'center',
            justifyContent: 'center'
        },
        input: {
            borderWidth: 2,
            width: '90%',
            margin: 30,
            borderRadius: 4,
            borderColor: COLORS.secondaryColor,
            paddingLeft: 10
            
        },
        button: {
            backgroundColor: COLORS.secondaryColor,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 4,
            marginBottom: 10,
            width: '90%',
        },
        buttonText: {
            color: COLORS.button.color,
            fontWeight: '500',
            fontSize: 19
        },
        registerText: {
            color: COLORS.secondaryColor,
            fontSize: 16,
            fontWeight: '500'
        }
    }
)

export default styles;