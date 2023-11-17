import {StyleSheet} from 'react-native';

import {heightScale} from '../helpers/scale';

const globalStyles = StyleSheet.create({
  //Colors
  primary: {
    backgroundColor: '#2DD4BF',
  },
  cancel: {
    backgroundColor: '#FF7D63',
  },
  white: {
    backgroundColor: '#FFFFFF',
  },
  black: {
    backgroundColor: '#000000',
  },
  gray: {
    backgroundColor: '#BBBBBB',
  },
  //Components
  container: {
    paddingVertical: heightScale(25),
    marginTop: heightScale(25),
  },
  dateContainer: {
    borderRadius: 5,
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  formContainer: {
    marginTop: 5,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    flex: 1,
    paddingHorizontal: 20,
  },
  view: {
    marginHorizontal: 30,
    marginBottom: 15,
  },
  button: {
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 5,
  },
  textBtn: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: '700',
    fontSize: 16,
  },
  input: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
  },
  label: {
    marginBottom: 5,
    marginTop: 15,
    fontSize: 16,
    fontWeight: '600',
  },
  txtWelcome: {
    marginTop: 30,
    fontSize: 24,
    textTransform: 'uppercase',
    fontWeight: '600',
    textAlign: 'center',
  },
  signUp: {
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnSignUp: {
    padding: 10,
    color: '#2dd4bf',
    fontWeight: 'bold',
  },
  btnViewPass: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10,
    position: 'absolute',
    right: 0,
  },
  camView: {
    minWidth: '100%',
    height: '70%',
  },
  // Single
  flex: {
    flex: 1,
  },
  center: {
    justifyContent: 'center',
  },
  mid: {
    alignItems: 'center',
  },
  icon: {
    alignSelf: 'center',
  },
  textCenter: {
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  ads: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
});

export default globalStyles;
