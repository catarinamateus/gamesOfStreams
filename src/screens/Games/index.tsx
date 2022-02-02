import React from 'react';

import {Button, SafeAreaView, Text, View} from 'react-native';

import styles from './styles';

import {game_one} from '../../data/games/questions';

import {Theme} from '../../theme';
import {useAppContext} from '../../context';

const Games = (): JSX.Element => {
  const [startCount, setStartCount] = React.useState<number>(5);
  const [counter, setCounter] = React.useState<number>(30);
  const [questionsAnswered, setQuestionsAnswered] = React.useState<number>(0);
  const [correctAnswers, setCorrectAnswers] = React.useState<number>(0);
  const {setTotalPoints, totalPoints} = useAppContext();

  const pointsToWin = 100;

  const totalQuestions = game_one.length;
  const currentRound =
    questionsAnswered === totalQuestions
      ? game_one[0]
      : game_one[questionsAnswered];
  const currentQuestion: string = currentRound.question;
  const currentOptions: string[] = currentRound.options;
  const currentCorrectAnswer: number = currentRound.rightAnswer;

  React.useEffect(() => {
    let timer = setInterval(() => {
      setStartCount(count => {
        const updatedCounter = count - 1;

        if (count === 0) {
          clearInterval(timer);
          return 0;
        }
        return updatedCounter;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  React.useEffect(() => {
    if (startCount === 0) {
      let timer = setInterval(() => {
        setCounter(count => {
          const updatedCounter = count - 1;

          if (count === 0) {
            clearInterval(timer);
            return 0;
          }
          return updatedCounter;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [startCount]);

  React.useEffect(() => {
    if (correctAnswers === totalQuestions) {
      setTotalPoints(totalPoints + pointsToWin);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [correctAnswers, totalPoints, totalQuestions]);

  const onNextQuestion = () => {
    setQuestionsAnswered(number => {
      const updatedCounter = number + 1;
      return updatedCounter;
    });
  };

  const onOptionPress = (index: number) => {
    if (index + 1 === currentCorrectAnswer) {
      setCorrectAnswers(count => count + 1);
    }
    onNextQuestion();
  };

  const renderCountDown = (): JSX.Element => {
    return (
      <View style={styles.main}>
        <Text style={styles.counterText}>{startCount}</Text>
        <Text style={styles.startText}>Get ready!</Text>
        <Text style={styles.startText}>
          You have {counter} seconds to answer {totalQuestions} questions!
        </Text>
      </View>
    );
  };

  const renderGame = (): JSX.Element => {
    return (
      <View style={styles.main}>
        <Text style={styles.counterGame}>{counter}</Text>
        <Text style={styles.questionText}>{currentQuestion}</Text>
        {currentOptions.map((option, index) => (
          <Button
            title={option}
            onPress={() => onOptionPress(index)}
            color={Theme.text}
          />
        ))}
      </View>
    );
  };

  const renderResults = (): JSX.Element => {
    if (correctAnswers === totalQuestions) {
      return (
        <Text style={styles.questionText}>
          Congratulations! You won {pointsToWin} points!
        </Text>
      );
    } else {
      return (
        <Text style={styles.questionText}>
          You got {correctAnswers}/{totalQuestions} correct! Don't worry, next
          time will be better!
        </Text>
      );
    }
  };

  const renderContent = (): JSX.Element => {
    if (startCount > 0) {
      return renderCountDown();
    }
    if (questionsAnswered >= totalQuestions || counter === 0) {
      return renderResults();
    }
    return renderGame();
  };

  return (
    <SafeAreaView style={styles.main}>
      <Text style={styles.gameTitle}>Time Game</Text>
      {renderContent()}
    </SafeAreaView>
  );
};

export default Games;
