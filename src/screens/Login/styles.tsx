import { StyleSheet } from "react-native";
import COLORS from "../../styles/colors";

const styles = StyleSheet.create(
    {   
        container: {
            flex: 1,
            backgroundColor: COLORS.screens.screenBackground,
            
        },
        logoText: {
            color: '#fff',
            fontSize: 20,
            textAlign: 'center',
            marginTop: 30
        },
        viewLogo: {
            justifyContent: 'center',
            alignItems: 'center'
        },
        logo: {
            width: 200,
            height: 200
        }
    }
)

export default styles;