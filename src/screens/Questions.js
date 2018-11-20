import React from 'react';
import { Button, View, Text } from 'react-native';
import _ from 'lodash'; 

class QuestionList extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
        questions: [
            {
                type : 'mcq',
                id: 1,
                text: 'What is the capital of India?',
                image: 'null',
                options: [
                    'Mumbai',
                    'Bangalore',
                    'Chennai',
                    'New Delhi'
                ],
                answer: ''
            },
            {
                type : 'audio',
                id: 2,
                text: 'What are your hobbies?',
                image: 'null',
                options: {
                    maxLength : '30'
                },
                answer: ''
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
                            return <Button
                                title="Answer this question"
                                onPress={() => this.props.navigation.navigate('MCQ',
                                {
                                    text : question.text,
                                    options: question.options        
                                })}
                            />
                        }
                        else if (question.type == 'audio'){
                            return <Button
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
