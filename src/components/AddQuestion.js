import React, { useState } from 'react';

export function AddQuestion({ items, currentIndex }){
    const currentQuestion = items[currentIndex];
    return(
                <div>
                    <h2 className='questionText'>{currentQuestion.text}</h2>
                </div>
    )
}