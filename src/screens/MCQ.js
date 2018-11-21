import React from 'react';
import { Button, View, Text } from 'react-native';
import _ from 'lodash';
import CheckBox from 'react-native-check-box'
import '../global.js';

class MCQ extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isChecked : false
            }
        }


    saveAndExit  = (id, ans) => {
        // global.answer = ans;
        this.props.navigation.navigate('Questions')
    }

    render() {

        const { navigation } = this.props;
        const questionId = navigation.getParam('id', 'NO-ID');
        const questionTitle = navigation.getParam('text', 'NO-ID');
        const questionOptions = navigation.getParam('options', 'default');
        let answer = '';
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>{ questionTitle }</Text>
                <Text>Options</Text>
                {_.map(questionOptions,
                    option => {
                        return <React.Fragment>
                            <CheckBox
                                style={{ width : 170 }}
                                onClick={() => {
                                    this.setState({
                                        isChecked: !this.state.isChecked
                                    });
                                    answer = { option }
                                }}
                                isChecked={this.state.isChecked}
                                leftText={ option }
                                
                            />
                        </React.Fragment>
                        
                    }
                )}
                <Button
                    title="Save"
                    onPress={() => this.saveAndExit(questionId, answer)}
                />


            </View>
        );
    }
}

export default MCQ;
