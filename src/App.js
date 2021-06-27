import React from 'react';
import questions from './api';
import AccordionItem from './AccordianItem';

const App = () => {
    return (
        <>
            <div id = 'container'>
                <div className = 'accordion'>
                    <h2 className = 'header'>React Interview Questions</h2>
                    <div id = 'items'>
                        {
                            questions.map((currElement) => {
                                return <AccordionItem 
                                        quest = {currElement.quest}
                                        key = {currElement.id}
                                        ans = {currElement.ans}
                                />
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;