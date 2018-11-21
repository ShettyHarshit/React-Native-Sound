import React from 'react';
import { Button, View, Text } from 'react-native';
import _ from 'lodash';
import { global } from '../global';

class MCQ extends React.Component {

    saveAndExit  = () => {
        this.props.navigation.navigate('Questions')
    }

    render() {

        const { navigation } = this.props;
        const questionId = navigation.getParam('id', 'NO-ID');
        const questionTitle = navigation.getParam('text', 'NO-ID');
        const questionOptions = navigation.getParam('options', 'default');
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>{ questionTitle }</Text>
                <Text>Options</Text>
                {_.map(questionOptions,
                    option => {
                        return <Text>{ option }</Text>
                        
                    }
                )}
                <Button
                    title="Save"
                    onPress={() => this.saveAndExit()}
                />


            </View>
        );
    }
}

export default MCQ;
