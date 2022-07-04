import React from "react";
import Head from "next/head";
import Wrapper from "../../components/dashboard/Wrapper";
import styles from "../../styles/sass/dashboard.module.scss";

import { MdPeople } from "react-icons/md";

import { BsHourglassSplit } from "react-icons/bs";
import { AiOutlineFileDone } from "react-icons/ai";
import {
  BiHomeSmile,
  BiHistory,
  BiLogOut,
  BiCog,
  BiBookContent,
  BiShoppingBag,
  BiGitPullRequest,
} from "react-icons/bi";

import StatsCard from "../../components/dashboard/StatsCard";
import AppointmentsCard from "../../components/dashboard/AppointmentsCard";
import Notifications from "../../components/dashboard/Notifications";
import Chart from "../../components/dashboard/LineGraphCard";

function Index() {
  return (
    <>
      <Head>
        <title>Dashboard - Agrocist</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Wrapper>
        <div className={styles.container}>
          <h1>Welcome back, Mark </h1>
          <div className={styles.col3}>
            <StatsCard
              icon={<BiBookContent size={35} />}
              number={22}
              title="new orders"
            />

            <StatsCard
              icon={<BsHourglassSplit size={35} />}
              number={10}
              title="pending orders"
            />

            <StatsCard
              icon={<AiOutlineFileDone size={35} />}
              number={694}
              title="completed orders"
            />

            {/* <StatsCard
              // icon={<BiBookContent size={35} />}
              number={"N 2,041,700"}
              title="balance"
            />

            <StatsCard
              icon={<BsHourglassSplit size={35} />}
              number={10}
              title="pending orders"
            />

            <StatsCard
              icon={<AiOutlineFileDone size={35} />}
              number={694}
              title="completed orders"
            /> */}
          </div>

          <div className={styles.stats}>
            <div className="headers">
              <div>
                <p>Balance</p>
                <p>N 2,041,700</p>
              </div>

              <div className="line"></div>

              <div>
                <p>Total earnings</p>
                <p>N 12,041,700</p>
              </div>

              <div className="line"></div>

              <div>
                <p>Total produts</p>
                <p>41,700</p>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default Index;
