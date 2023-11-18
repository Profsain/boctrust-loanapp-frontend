const updateSalaryHistory = async (customerId, data, remitaStatus="pending", loanStatus="pending", disbursementDetails={}) => {
  
     // update customer data with remita details
      const remitaData = {
        isRemitaCheck: true,
        remitaStatus: remitaStatus,
        loanStatus: loanStatus,
        remitaDetails: data,  
        disbursementDetails: disbursementDetails
  };
  
      await fetch(
        `http://localhost:3030/api/updatecustomer/remita/${customerId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(remitaData),
        }
      );
}

export  default updateSalaryHistory;