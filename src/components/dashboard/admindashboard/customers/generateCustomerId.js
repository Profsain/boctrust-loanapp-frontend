let customerCount = 0;

const generateCustomerId = () => {
  customerCount++;
  const customerId = `C-${String(customerCount).padStart(6, '0')}`;
  return customerId;
}

export default generateCustomerId;