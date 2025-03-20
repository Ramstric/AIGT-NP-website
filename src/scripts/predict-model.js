import { backendURL } from "./config";
export { predictModel };

const lrModelResult = document.getElementById('lr');
const rfModelResult = document.getElementById('rf');
const svmModelResult = document.getElementById('svm');

async function predictModel(text) {
    fetch(backendURL + "/api/predict", {
        method: 'POST',
        body: JSON.stringify({ text: text }),
    })   .then((response) => {
        response.json().then((data) => {
            console.log(data);
            
            /*
            rfModelResult.firstElementChild.innerText = data.LogisticRegression === 1 ? 'AI' : 'Human';

            rfModelResult.firstElementChild.innerText = (data.RandomForest_proba[0]*100).toFixed(2) + '% Human'
            rfModelResult.lastElementChild.innerText = (data.RandomForest_proba[1]*100).toFixed(2) + '% AI'

            svmModelResult.firstElementChild.innerText = data.SVC === 1 ? 'AI' : 'Human';
            svmModelResult.firstElementChild.style.color = data.SVC === 1 ? 'var(--red)' : 'var(--blue)';
            */
            lrModelResult.getElementsByTagName("tr")[0].getElementsByTagName("td")[1].innerText = (data.LogisticRegression_proba[0]*100).toFixed(2) + '%'
            lrModelResult.getElementsByTagName("tr")[1].getElementsByTagName("td")[1].innerText = (data.LogisticRegression_proba[1]*100).toFixed(2) + '%'

            rfModelResult.getElementsByTagName("tr")[0].getElementsByTagName("td")[1].innerText = (data.LogisticRegression_proba[0]*100).toFixed(2) + '%'
            rfModelResult.getElementsByTagName("tr")[1].getElementsByTagName("td")[1].innerText = (data.LogisticRegression_proba[1]*100).toFixed(2) + '%'

            svmModelResult.getElementsByTagName("tr")[0].getElementsByTagName("td")[0].innerText = data.SVC === 1 ? 'AI' : 'Human';
            svmModelResult.getElementsByTagName("tr")[0].getElementsByTagName("td")[0].style.color = data.SVC === 1 ? 'var(--red)' : 'var(--blue)';

        });
        
    }).catch((error) => {
        return error;
    });
    
}