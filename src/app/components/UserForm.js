"use client";
import { addUser } from "../services/user_service";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
export default function UserForm() {
  const userSchema = Yup.object().shape({
    nombre: Yup.string().min(3),
    email: Yup.string().email("Must be valid"),
    phone: Yup.string().min(10),
  });

  return (
    <div>
      <h1>Ingresa un usuario</h1>
      <Formik
        initialValues={{
          nombre: "",
          email: "",
          phone: "",
        }}
        validationSchema={userSchema}
        onSubmit={(values) => {
          // same shape as initial values
          addUser(values)
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col gap-2">
            <Field
              placeholder="nombre"
              name="nombre"
              className="border border-l-black w-[200px]"
            />
            {errors.nombre && touched.nombre ? (
              <div className="bg-red-500 font-bold">{errors.nombre}</div>
            ) : null}
            <Field
              placeholder="correo"
              name="email"
              type="email"
              className="border border-l-black w-[200px]"
            />
            <Field
              placeholder="Telefono"
              name="phone"
              className="border border-l-black w-[200px]"
            />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <button className="bg-blue-500 text-white p-2 mt-2 rounded-md w-[200px]">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
