import React from 'react';
import { Button, View, Text } from 'react-native';

class QuestionList extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Questions</Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
                <Button
                    title="Go to Record"
                    onPress={() => this.props.navigation.navigate('Record')}
                />
            </View>
        );
    }
}

export default QuestionList;
