import { predictModel } from './predict-model.js';

const analyzeButton = document.getElementById('analyze-btn');
const clearButton = document.getElementById('clear-btn');
const textInput = document.getElementById('text-box');
const resultsArea = document.getElementById('results');

analyzeButton.addEventListener('click', async () => {
    if (textInput.value === '') {
    }    else {
        clearButton.hidden = false;
        clearButton.style.display = 'block';
        resultsArea.style.flexShrink = '0';
        resultsArea.style.opacity = '1';
        try {
            await predictModel(textInput.value);
        } catch (error) {
            console.error("Error:", error);
        }
    }
});

clearButton.addEventListener('click', () => {
    textInput.value = '';
    clearButton.hidden = true;
    
    resultsArea.style.flexShrink = '25';
    resultsArea.style.opacity = '0';
});
