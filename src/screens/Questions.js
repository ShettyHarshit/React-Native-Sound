import React from 'react';
import { Button, View, Text } from 'react-native';
import _ from 'lodash'; 
import { AppProvider, AppConsumer } from '../../context/appContext';

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
            },
            {
                type: 'mcq',
                id: 3,
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
                type:'sub',
                id:4,
                text: 'Why do you want to join ?',
                answer:''
            }
            
        ] };
        
     }
     
     render() {
         return (
            //  <AppProvider>

                 <AppConsumer>
                     {
                         (context) => (
                             <View style={{
                                 flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                 <Text>Questions</Text>
                                 {/* <Text>{ context.answer }</Text> */}
                                 {_.map(this.state.questions,

                                     question => {
                                         if (question.type == 'mcq') {
                                             return <React.Fragment style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
                                             <Text>{ question.text }</Text>
                                             <Text>{ context.answer[question.id] }</Text>
                                             <Button
                                                 title="Answer this question"
                                                 onPress={() => this.props.navigation.navigate('MCQ',
                                                     {
                                                         id: question.id,
                                                         text: question.text,
                                                         options: question.options
                                                     })}
                                             />
                                             </React.Fragment>
                                         }
                                         else if (question.type == 'audio') {
                                             return <Button
                                                 title="Record this question"
                                                 onPress={() => this.props.navigation.navigate('Record')}
                                             />
                                         }
                                         else if(question.type == 'sub'){
                                             return <Button
                                                title="Answer Subjective question"
                                                onPress= {()=> this.props.navigation.navigate('sub')}
                                             >

                                             </Button>
                                         }
                                     }
                                 )}
                             </View>
                         )
                     }
                     </AppConsumer>
                // </AppProvider>
        );
    }
}

export default QuestionList;
