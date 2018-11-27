import React from 'react';
import { Button, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import QuestionList from './src/screens/Questions.js';
import MCQ from './src/screens/MCQ';
import AudioExample from './src/screens/Record'
import { AppProvider } from './context/appContext.js';

class HomeScreen extends React.Component {
  render() {
    return (
    <AppProvider>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate('Details')}
          />
          <Button
            title="Questions"
            onPress={() => this.props.navigation.navigate('Questions')}
          />
        </View>
    </AppProvider>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>React Native</Text>
      </View>
    );
  }
}

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
    Questions: {
      screen: QuestionList,
    },
    MCQ : {
      screen: MCQ,
    },
    Record : {
      screen: AudioExample,
    }
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <AppProvider>
      <RootStack />
    </AppProvider>;
  }
}