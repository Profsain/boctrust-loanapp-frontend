import Table from "react-bootstrap/Table";
import "../../Dashboard.css";
import DashboardHeadline from "../../shared/DashboardHeadline";

const BlogsList = () => {
  const styles = {
    table: {
      // margin: "0 2rem 0 3rem",
    },
    head: {
      color: "#fff",
      fontSize: "1rem",
    },
    booked: {
      color: "#145098",
    },
    completed: {
      color: "#5cc51c",
    },
    withcredit: {
      color: "#f64f4f",
    },
    withdisbursement: {
      color: "#ecaa00",
    },
  };
  return (
    <div className="ListSec">
      <DashboardHeadline
        height="72px"
        mspacer="2rem 0 -4rem -1rem"
        bgcolor="#145098"
      ></DashboardHeadline>
      <div style={styles.table}>
        <Table hover responsive="sm">
          <thead style={styles.head}>
            <tr>
              <th>Title</th>
              <th>Content</th>
              <th>Category</th>
              <th>Date Posted</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Budget your way to success</td>
              <td>
                Budgeting sounds like a boring strategy used by our parents. For
                a long time, budgeting was considered the way to manage money
                because it helped people keep track of where their finances were
                going.
              </td>
              <td>SME Advisory</td>
              <td>29-03-2023</td>
              <td style={styles.completed}>Active</td>
              <td>
                <select name="action" id="action">
                  <option value="">Action</option>
                  <option value="">Edit</option>
                  <option value="">Delete</option>
                  <option value="">Re-post</option>
                </select>
              </td>
            </tr>

            <tr>
              <td>Cash is King</td>
              <td>
                If you understand and follow the basic principle of “Cash is
                King” you can change your life forever. Your life will be less
                stressful financially and you will be taking your first major
                step toward “financial peace of mind”.
              </td>
              <td>Personal Finance</td>
              <td>15-05-2023</td>
              <td style={styles.completed}>Active</td>
              <td>
                <select name="action" id="action">
                  <option value="">Action</option>
                  <option value="">Edit</option>
                  <option value="">Delete</option>
                  <option value="">Re-post</option>
                </select>
              </td>
            </tr>

            <tr>
              <td>The Impact of Microfinance on Women&apos;s Empowerment</td>
              <td>
                Microfinance has been instrumental in empowering women and
                advancing gender equality. This blog sheds light on how
                microfinance initiatives have transformed the lives of women
                entrepreneurs
              </td>
              <td>SME Advisory</td>
              <td>29-04-2023</td>
              <td style={styles.completed}>Active</td>
              <td>
                <select name="action" id="action">
                  <option value="">Action</option>
                  <option value="">Edit</option>
                  <option value="">Delete</option>
                  <option value="">Re-post</option>
                </select>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default BlogsList;
