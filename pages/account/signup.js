import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import InputElement from "../../components/InputElement";
import SubmitButton from "../../components/SubmitButton";
import styles from "../../styles/sass/signup.module.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useFormik, Field } from "formik";
import helpers from "../../helpers/helpers";
import { useRouter } from "next/router";

function Signup() {
  const [isLoading, setIsLoading] = useState(false);
  const Router = useRouter();

  const notify = (type, msg) => toast(msg, { type: type, theme: "dark" });

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      phonenumber: "",
      email: "",
      password: "",
      address: "",
      accounttype: "",
    },

    onSubmit: async (values) => {
      const fullname = values.firstname + values.lastname;

      const data = {
        fullname,
        phonenumber: values.phonenumber,
        email: values.email,
        address: values.address,
        password: values.password,
      };

      values.fullname = fullname;

      try {
        setIsLoading(true);
        const res = await helpers.register(data, values.accounttype);
        console.log("res", res);

        if (res.data.success) {
          notify("sucess", "Verification code sent to your email");
          Router.push(
            {
              pathname: "/account/verify",
              query: {
                email: values.email,
              },
            },
            "/account/verify"
          );
        }

        if (res.response.status == 400 || 422) {
          notify("error", "Account already exists");
          return;
        }
      } catch (error) {
        console.log("ERROR", error);
      } finally {
        // hide loader
        setIsLoading(false);
      }
    },
  });

  return (
    <>
      <Head>
        <title>Signup - Agrocist</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main className={styles.page}>
        <ToastContainer position="top-center" hideProgressBar={true} />

        <form className={"container"} onSubmit={formik.handleSubmit}>
          <div className={"card"}>
            <h3>Create Your Account</h3>
            <InputElement
              placeholder="First name"
              type="text"
              name="firstname"
              onChange={formik.handleChange}
              value={formik.values.firstname}
            />
            <InputElement
              placeholder="Last name"
              name="lastname"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.lastname}
            />
            <InputElement
              placeholder="Email address"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />

            <InputElement
              placeholder="Address"
              name="address"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.address}
            />

            <div className="flex">
              <InputElement readOnly value="+234" />
              <InputElement
                placeholder="Phone number"
                name="phonenumber"
                onChange={formik.handleChange}
                value={formik.values.phonenumber}
              />
            </div>
            <InputElement
              placeholder="Password"
              type="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <div className="form-group">
              <p style={{ textAlign: "left" }}>
                What type of business do you own?
              </p>

              <div>
                <input
                  type="radio"
                  id="distributor"
                  name="accounttype"
                  onChange={formik.handleChange}
                  value={"distributor"}
                />
                <label htmlFor="distributor">Distributor</label>
                <br />
              </div>

              <div>
                <input
                  type="radio"
                  id="retailer"
                  value="retailer"
                  name="accounttype"
                  onChange={formik.handleChange}
                />
                <label htmlFor="retailer">Retailer</label>
                <br />
              </div>
            </div>
            <SubmitButton
              label={isLoading ? "Loading..." : "Create My Account"}
            />

            <p>
              Already have an account? <Link href="/account/login">Login</Link>
            </p>
          </div>
        </form>
      </main>
    </>
  );
}

export default Signup;
