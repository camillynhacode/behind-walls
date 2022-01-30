import {StyleSheet} from 'react-native';
import COLORS from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.screens.screenBackground,
    alignItems: 'center',
    justifyContent: 'space-around'
},
  image: {
      height: 200,
      width: 250
  },
  text: {
      fontSize: 17,
      fontWeight: '700',
      textAlign: 'center',
      marginTop: 20
  },
  viewImage: {
      alignItems: 'center'
  },
  textDescription: {
    fontSize: 19,
      textAlign: 'center',
      marginTop: 30,
      opacity: 0.8,
  },
  viewButton: {
    justifyContent: 'flex-end',
    width: '90%'

  },

  buttonContinue: {
      borderRadius: 8,
      backgroundColor: COLORS.secondaryColor,
      alignItems: 'center',
      justifyContent: 'center',
      height: 40
  },
  textButton: {
      color: COLORS.button.color,
      fontWeight: '700'
  }
  
});

export default styles;
