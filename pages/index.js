import Head from 'next/head'
import homeStyles from '../styles/Home.module.css'
import { Row, Col } from "antd";
import DashboardAPIDisplay from '../components/Dashboard/DashboardAPIDisplay';
import DashboardRoomHistoryDisplay from '../components/Dashboard/DashboardRoomHistoryDisplay';
import DashboardAPIDisplayVisits from '../components/Dashboard/DashboardAPIDisplayVisits';
import DashboardPatientHistoryDisplay from '../components/Dashboard/DashboardPatientHistoryDisplay';

export default function Home() {
  return (
    <div className={homeStyles.container}>
      <Head>
        <title>Patient Locator</title>
        <link rel="icon" href="/title.ico" />
      </Head>

      <main className={homeStyles.main}>
        <Row gutter={[6, 6]} align="middle" justify='center'>
          <Col className={homeStyles.grid} xs={20} xl={8}>
            {/* <DashboardAPIDisplayVisits /> */}
          </Col>
          <Col className={homeStyles.grid} xs={20} xl={8}>
            <DashboardRoomHistoryDisplay />
          </Col>
        </Row>
        <Row gutter={[6, 6]} align="middle" justify='center'>
          <Col className={homeStyles.grid} xs={20} xl={8}>
            {/* <DashboardAPIDisplay /> */}
          </Col>
          <Col className={homeStyles.grid} xs={20} xl={8}>
            <DashboardPatientHistoryDisplay />
          </Col>
        </Row>
      </main>
    </div>
  )
}
