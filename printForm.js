const user = sessionStorage.getItem('signer');
const url = 'https://pffm.azurewebsites.net/serviceAgreement'
const uri = `${url}?name=${user}`

fetch(uri)
    .then(response => response.json())
    .then(data => populatePage(data))
    .catch(console.error)

async function populatePage(data) {
    document.getElementById('date').innerHTML = data.date;
    document.getElementById('caregiverName').innerHTML = data.caregiverName
}

const printToPDF = document.getElementById('printToPDF')
printToPDF.addEventListener('click', (e) => {
    //add in a function to print to PDF
})