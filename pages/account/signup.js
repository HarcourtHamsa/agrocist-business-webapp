import React from "react";
import Head from "next/head";
import Link from "next/link";
import InputElement from "../../components/InputElement";
import SubmitButton from "../../components/SubmitButton";
import styles from "../../styles/sass/signup.module.scss";

function signup() {
  return (
    <>
      <Head>
        <title>Signup - Agrocist</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main className={styles.page}>
        <div className={"container"}>
          <div className={"card"}>
            <h3>Create Your Account</h3>
            <InputElement placeholder="First name" />
            <InputElement placeholder="Last name" />
            <InputElement placeholder="Email address" />

            <div className="flex">
              <InputElement value="+234" />
              <InputElement placeholder="Phone number" />
            </div>
            <InputElement placeholder="Password" />
            {/* <div class="form-group">
              <p>What type of business do you own?</p>

              <div>
                <input
                  type="radio"
                  id="huey"
                  name="drone"
                  value="huey"
                  checked
                />
                <label for="huey">Starter Business</label>
                <br />
              </div>

              <div>
                <input type="radio" id="dewey" name="drone" value="dewey" />
                <label for="dewey">Registered Business</label>
                <br />
              </div>
            </div> */}
            <SubmitButton label="Create My Account" />

            <p>
              Already have an account? <Link href="/account/login">Login</Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default signup;
