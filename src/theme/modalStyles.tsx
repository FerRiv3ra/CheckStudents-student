import {StyleSheet} from 'react-native';

export const modalStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
  },
  modalView: {
    margin: 20,
    borderRadius: 20,
    padding: 35,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginTop: 15,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
  icon: {
    color: '#FFF',
    marginHorizontal: 5,
  },
  title: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
});
