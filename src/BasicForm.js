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
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./actions/index";

const validationSchema = yup.object({
  firstname: yup.string("Enter your firstname").required("Email is firstname"),
  lastname: yup.string("Enter your lastname").required("Email is lastname"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
});

const BasicForm = () => {
  const [initial, setInitial] = React.useState([]);

  const myState = useSelector((state) => state.todoReducers);
  console.log("mystate", myState);
  console.log("initialinitial", initial);
  const dispatch = useDispatch();
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("key"));
    data != null ? setInitial(data) : setInitial([]);
  }, []);

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      resetForm({
        firstname: "",
        lastname: "",
        email: "",
      });
      values && initial.push(values);
      localStorage.setItem("key", JSON.stringify(initial));
    },
  });

  function createData(firstname, lastname, email) {
    return { firstname, lastname, email };
  }
  const rows = [
    initial != null &&
      initial.map((e) =>
        createData(`${e.firstname}`, `${e.lastname}`, `${e.email}`)
      ),
  ];

  const deletefunction = (indexToDelete) => {
    let updatedCardData = initial.filter((_, index) => index !== indexToDelete);
    localStorage.setItem("key", JSON.stringify(updatedCardData));
    setInitial(updatedCardData);
  };

  return (
    <div>
      <h1>TODO</h1>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="firstname"
          name="firstname"
          label="First Name"
          value={formik.values.firstname}
          onChange={formik.handleChange}
          error={formik.touched.firstname && Boolean(formik.errors.firstname)}
          helperText={formik.touched.firstname && formik.errors.firstname}
          style={{ margin: 10 }}
        />
        <TextField
          fullWidth
          id="lastname"
          name="lastname"
          label="Last Name"
          value={formik.values.lastname}
          onChange={formik.handleChange}
          error={formik.touched.lastname && Boolean(formik.errors.lastname)}
          helperText={formik.touched.lastname && formik.errors.lastname}
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
          onClick={() => dispatch(addTodo(initial))}
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
                      <TableCell>{row.firstname}</TableCell>
                      <TableCell align="left">{row.lastname}</TableCell>
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
