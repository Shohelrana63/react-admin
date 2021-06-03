import React from 'react'
import Chart from '../components/chart/Chart'
import FeatureInfo from '../components/featureInfo/FeatureInfo'
import "./Home.css";
import { userData } from "../../src/dummyData"
import WidgetSmall from '../components/widgetSmall/WidgetSmall';
import WidgetLarge from '../components/widgetLarge/WidgetLarge';

export default function Home() {
    return (
        <div className="home">
            <FeatureInfo />
            <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
            <div className="homeWidgets">
                <WidgetSmall />
                <WidgetLarge />
            </div>
        </div>
    )
}
