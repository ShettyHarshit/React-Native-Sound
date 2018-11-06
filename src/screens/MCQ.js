import React from 'react';
import { Button, View, Text } from 'react-native';
import _ from 'lodash';

class MCQ extends React.Component {

    

    render() {

        const { navigation } = this.props;
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


            </View>
        );
    }
}

export default MCQ;
