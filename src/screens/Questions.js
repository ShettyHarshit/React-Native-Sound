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
                answer:''
            },
            {
                type: 'mcq',
                id: 3,
                text: 'If air is called \'green\', \'green\' is called \'red\', \'red\' is called sea, sea is called \'blue\', \'blue\' is called \'water\' and \'water\' is called \'pink\', then what is the color of \'grass\'?',
                image: 'null',
                options: [
                    'Green',
                    'Air',
                    'Red',
                    'Pink'
                ],
                answer: ''
            },
            {
                type:'sub',
                id:4,
                image: 'null',
                text: 'Why do you want to join ?',
                answer:''
            },
            {
                type: 'sub',
                id: 5,
                text: 'What is the use of malloc  ',
                image: 'null',
                answer: '' 
            },
            {
                type : 'audio',
                id: 6,
                image: 'null',
                text: 'Introduce yourself',
                options: {
                    maxLength : '30'
                }
            },
            {
                type : 'mcq',
                id: 7,
                text: 'What is the issue when the accuracy of your model becomes (approximately) 100% ?',
                image: 'null',
                options: [
                    'Overfitting',
                    'Overloading',
                    'Underflow',
                    'Overflow'
                ],
                answer: ''
            },
            {
                type : 'audio',
                id: 8,
                text : 'Why should we hire you ?',
                image : 'null',
                options: {
                    maxLength : '30'
                },
                answer:''
            },
            {
                type : 'sub',
                id : 9,
                text : 'What are your thoughts on Education System of India ?',
                image : 'null',
                answer:''
            },
            {
                type : 'sub',
                id : 10,
                text : 'Do you have any question for us ? List it down below ',
                image:'null',
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
                                                onPress= {()=> this.props.navigation.navigate('sub',{
                                                   id: question.id,
                                                   text: question.text 
                                                })}
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
