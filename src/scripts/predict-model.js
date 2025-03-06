import { backendURL } from "./config";
export { predictModel };

const lrModelResult = document.getElementById('lr');
const nbModelResult = document.getElementById('nb');
const rfModelResult = document.getElementById('rf');
const svmModelResult = document.getElementById('svm');

async function predictModel(text) {
    fetch(backendURL + "/api/predict", {
        method: 'POST',
        body: JSON.stringify({ text: text }),
    })   .then((response) => {
        response.json().then((data) => {
            console.log(data);
            lrModelResult.innerText = data.logistic_regression_model === 1 ? 'AI' : 'Human';
            nbModelResult.innerText = data.naive_bayes_model === 1 ? 'AI' : 'Human';
            rfModelResult.innerText = data.random_forest_model === 1 ? 'AI' : 'Human';
            svmModelResult.innerText = data.support_vector_model === 1 ? 'AI' : 'Human';

            lrModelResult.style.color = data.logistic_regression_model === 1 ? 'var(--red)' : 'var(--blue)';
            nbModelResult.style.color = data.naive_bayes_model === 1 ? 'var(--red)' : 'var(--blue)';
            rfModelResult.style.color = data.random_forest_model === 1 ? 'var(--red)' : 'var(--blue)';
            svmModelResult.style.color = data.support_vector_model === 1 ? 'var(--red)' : 'var(--blue)';
        });
        
    }).catch((error) => {
        return error;
    });
    
}