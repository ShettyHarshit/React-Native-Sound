import React from 'react';
import { Button, View, Text, TextInput, StyleSheet } from 'react-native';
import _ from 'lodash';
import { AppProvider, AppConsumer } from '../../context/appContext';

class sub extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            answer:"" 
        }
    }
    render() {
        
        const { navigation } = this.props;
        const questionId = navigation.getParam('id', 'NO-ID');
        const questionTitle = navigation.getParam('text', 'NO-ID');
        return (
            // <AppProvider>
                
                <AppConsumer>
                {
                    (context) => (
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text>{questionTitle}</Text>
                        <Text>Answer:</Text>
                        <TextInput style={styles.input} 
                            onChangeText={(text) => this.setState({answer:text})}
                        />
                        
                            <Button
                            title="Save"
                            onPress={() => {
                                context.setAnswer(this.state.answer, questionId);
                            }}
                            
                            />
                        <Text>{ context.answer[questionId] }</Text>
                            
                            
                            </View>   
                            )
                        }
                    </AppConsumer>
                // </AppProvider>
                    );
                }
    
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      borderColor: '#000000',
      borderWidth: 1,
      width : 250,
      margin : 10
   },
  })


export default sub;