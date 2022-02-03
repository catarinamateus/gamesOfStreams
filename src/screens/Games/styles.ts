import {StyleSheet} from 'react-native';
import {Theme} from '../../theme';

const styles = StyleSheet.create({
  main: {
    backgroundColor: Theme.background,
    flex: 1,
    alignItems: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },
  gameTitle: {
    color: Theme.secondaryText,
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 50,
    marginHorizontal: 20,
  },
  startText: {
    color: Theme.text,
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginHorizontal: 20,
    textAlign: 'center',
  },
  questionText: {
    color: Theme.text,
    fontSize: 24,
    fontWeight: 'bold',
    margin: 20,
    textAlign: 'center',
  },
  counterText: {
    color: Theme.text,
    fontSize: 35,
  },
  counterGame: {
    color: Theme.counter.text,
    fontSize: 25,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
});

export default styles;
