import React from 'react';

export const AppContext = React.createContext();
export const AppConsumer = AppContext.Consumer;

export class AppProvider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            answer : []
        };
    }

    setAnswer = (text, id) => {
        let temp = this.state.answer;
        temp[id] = text;
        this.setState({ answer: temp });
    }


    render() {
        return (
            <AppContext.Provider value={{
                answer: this.state.answer,
                setAnswer: this.setAnswer,
            }}>
                {this.props.children}
            </AppContext.Provider>
        );
    }

}
