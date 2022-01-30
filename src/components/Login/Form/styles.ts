import {StyleSheet} from 'react-native';
import COLORS from '../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.screens.screenBackground,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#000000',
    backgroundColor: COLORS.screens.screenBackground,
    fontSize: 28,
  },
  input: {
    borderWidth: 2,
    width: '90%',
    height: 40,
    marginLeft: 24,
    marginRight: 24,
    marginTop: 22,
    marginBottom: 12,
    borderRadius: 4,
    borderColor: COLORS.secondaryColor,
    paddingLeft: 10,
    backgroundColor: COLORS.screens.screenBackground
  },
  button: {
    backgroundColor: COLORS.secondaryColor,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
    width: '90%',
  },
  buttonText: {
    color: COLORS.button.color,
    fontWeight: '500',
    fontSize: 16,
  },
  registerText: {
    color: '#324F8E',
    fontSize: 16,
  },
  tiny: {
    color: '#939393',
    alignSelf: 'flex-end',
    marginRight: 24,
    marginBottom: 58,
  },
  miniContainer: {
    width: '100%',
    padding: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  normal: {
    color: '#000000',
  },
});

export default styles;
