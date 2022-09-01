import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import Paper from "@mui/material/Paper";
import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import delete1 from "./delete1.png";

const validationSchema = yup.object({
  firstName: yup.string("Enter your firstName").required("Email is firstName"),
  lastName: yup.string("Enter your lastName").required("Email is lastName"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
});

const BasicForm = () => {
  const [initial, setInitial] = React.useState([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("key"));
    data != null ? setInitial(data) : setInitial([]);
  }, []);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      resetForm({
        firstName: "",
        lastName: "",
        email: "",
      });
      values && initial.push(values);
      localStorage.setItem("key", JSON.stringify(initial));
    },
  });

  function createData(firstName, lastName, email) {
    return { firstName, lastName, email };
  }
  const rows = [
    initial != null &&
      initial.map((e) =>
        createData(`${e.firstName}`, `${e.lastName}`, `${e.email}`)
      ),
  ];

  const deletefunction = (indexToDelete) => {
    let updatedCardData = initial.filter((_, index) => index !== indexToDelete);
    localStorage.setItem("key", JSON.stringify(updatedCardData));
    setInitial(updatedCardData);
  };

  return (
    <div>
      <h1>TODO Form</h1>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="firstName"
          name="firstName"
          label="First Name"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
          style={{ margin: 10 }}
        />
        <TextField
          fullWidth
          id="lastName"
          name="lastName"
          label="Last Name"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
          style={{ margin: 10 }}
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          style={{ margin: 10 }}
        />
        <Button
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          style={{ margin: 10 }}
        >
          Submit
        </Button>
      </form>
      {initial.length > 0 && (
        <div style={{ marginTop: 100, width: "100%" }}>
          <TableContainer component={Paper} sx={{ minWidth: "100%" }}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">First Name</TableCell>
                  <TableCell align="left">Last Name</TableCell>
                  <TableCell align="left">Email</TableCell>
                  <TableCell align="left"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {initial != null &&
                  initial.map((row, index) => (
                    <TableRow key={row.name} key={index}>
                      <TableCell>{row.firstName}</TableCell>
                      <TableCell align="left">{row.lastName}</TableCell>
                      <TableCell align="left">{row.email}</TableCell>
                      <TableCell align="left">
                        <img
                          src={delete1}
                          onClick={() => deletefunction(index)}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </div>
  );
};

export default BasicForm;
