import React from 'react';
import "./FeatureInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeatureInfo() {
    return (
        <div className="featured">
            <div className="featureItem">
                <span className="featureTitle">
                    Revenue
                </span>
                <div className="featureMoneyContainer">
                    <span className="featureMoney">$2,415</span>
                    <span className="featureMoneyRate">
                        -11.4
                        <ArrowDownward className="featuredIcon negative" />
                    </span>
                </div>
                <span className="featuredSub">Comapared to last month</span>
            </div>
            <div className="featureItem">
                <span className="featureTitle">
                    Sales
                </span>
                <div className="featureMoneyContainer">
                    <span className="featureMoney">$9,005</span>
                    <span className="featureMoneyRate">
                        -21.4
                        <ArrowDownward className="featuredIcon negative" />
                    </span>
                </div>
                <span className="featuredSub">Comapared to last month</span>
            </div>
            <div className="featureItem">
                <span className="featureTitle">
                    Cost
                </span>
                <div className="featureMoneyContainer">
                    <span className="featureMoney">$4,415</span>
                    <span className="featureMoneyRate">
                        +5.4
                        <ArrowUpward className="featuredIcon" />
                    </span>
                </div>
                <span className="featuredSub">Comapared to last month</span>
            </div>
        </div>
    )
}
