import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function MyForm() {
  return (
    <>
      <Form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
        }}
      >
        <table border={0}>
          <tr>
            <td>
              <Form.Label>
                <b>Name :</b>
              </Form.Label>
            </td>
            <td>
              <Form.Control type="text" placeholder="Name" />
            </td>
          </tr>
          <tr>
            <td>
              <Form.Label>
                <b>Family name :</b>
              </Form.Label>
            </td>
            <td>
              <Form.Control type="text" placeholder="Family name" />
            </td>
          </tr>
          <tr>
            <td>
              <Form.Label>
                <b>Gender :</b>
              </Form.Label>
            </td>
            <td>
              <Form.Select aria-label="Default select example" >
                <option>Select your gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Form.Select>
            </td>
          </tr>
          <tr>
            <td>
              <Form.Label>
                <b>Email address :</b>
              </Form.Label>
            </td>
            <td>
              <Form.Control type="email" placeholder="name@example.com" />
            </td>
          </tr>
          <tr>
            <td>
              <Form.Label>
                <b>Phone number :</b>
              </Form.Label>
            </td>
            <td>
              <Form.Control type="number" placeholder="Phone number" />
            </td>
          </tr>
        </table>
        <br />
        <Button variant="primary">Validate</Button>
      </Form>
      <br></br>
    </>
  );
}

export default MyForm;
