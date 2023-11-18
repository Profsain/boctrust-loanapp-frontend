const stopLoanFunc = async (loanId) => { 
    console.log('loanId: ', loanId)
    const stopLoanStatus = 'stopped';

    await fetch(`http://localhost:3030/api/updatecustomer/remita/${loanId}/stoploan`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ stopLoanStatus }),
    })
    .then(response => {
        if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .catch(error => {
        console.error('Error updating loan status:', error.message);
    });
};

export default stopLoanFunc;