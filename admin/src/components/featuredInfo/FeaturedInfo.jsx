import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">New Students</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">115</span>
          {/* <span className="featuredMoneyRate">
            -11.4 <ArrowDownward  className="featuredIcon negative"/>
          </span> */}
        </div>
        <span className="featuredSub">This Month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Registerd Students</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">870</span>
          {/* <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative"/>
          </span> */}
        </div>
        <span className="featuredSub">All Time</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Registered Teachers</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">41</span>
          {/* <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon"/>
          </span> */}
        </div>
        <span className="featuredSub">All Time</span>
      </div>
    </div>
  );
}
