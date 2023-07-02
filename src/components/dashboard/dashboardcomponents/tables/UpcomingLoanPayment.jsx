import BocButton from "../../shared/BocButton";
import DashboardHeadline from "../../shared/DashboardHeadline";
import Table from "react-bootstrap/Table";

const UpcomingLoanPayment = () => {
  const style = {
    color: "#145098",
    fontWeight: "bold",
    fontSize: "1.2rem",
  };

  return (
    <div>
      <DashboardHeadline>Upcoming Loan Payment</DashboardHeadline>
      <Table hover responsive="sm">
        <thead>
          <tr style={style}>
            <th>Loan ID</th>
            <th>Next Payment Date</th>
            <th>Status</th>
            <th>Amount to Pay</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1023</td>
            <td>2023-25-03</td>
            <td>
              <BocButton>Due</BocButton>
            </td>
            <td>N21340</td>
            <td>
              <BocButton cursor="pointer" bgcolor="#ecaa00" bradius="18px">
                Pay Now
              </BocButton>
            </td>
          </tr>
          <tr>
            <td>1024</td>
            <td>2023-25-04</td>
            <td>
              <BocButton>Due</BocButton>
            </td>
            <td>N19340</td>
            <td>
              <BocButton cursor="pointer" bgcolor="#ecaa00" bradius="18px">
                Pay Now
              </BocButton>
            </td>
          </tr>
          <tr>
            <td>1030</td>
            <td>2023-25-05</td>
            <td>
              <BocButton>Due</BocButton>
            </td>
            <td>N10340</td>
            <td>
              <BocButton cursor="pointer" bgcolor="#ecaa00" bradius="18px">
                Pay Now
              </BocButton>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default UpcomingLoanPayment;