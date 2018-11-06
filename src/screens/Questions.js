import React from 'react';
import { Button, View, Text } from 'react-native';
import _ from 'lodash'; 

class QuestionList extends React.Component {

    constructor(props) {
        super(props);
        this.state = { questions: [
            {
                type : 'mcq',
                id: 1,
                text: 'What is the capita of India?',
                image: 'null',
                options: [
                    'Mumbai',
                    'Bangalore',
                    'Chennai',
                    'New Delhi'
                ]
            },
            {
                type : 'audio',
                id: 2,
                text: 'What are your hobbies?',
                image: 'null',
                options: {
                    maxLength : '30'
                }
            }
        ] };

     }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Questions</Text>
                {_.map(this.state.questions, 
                    question => {
                        if(question.type == 'mcq'){
                            <Button
                                title="Answer this question"
                                onPress={() => this.props.navigation.navigate('Record',
                                {
                                    text : question.text,
                                    options: question.options        
                                })}
                            />
                        }
                        else if (question.type == 'audio'){
                            <Button
                                title="Record this question"
                                onPress={() => this.props.navigation.navigate('Record')}
                            />
                        }
                    }
                )}


            </View>
        );
    }
}

export default QuestionList;
