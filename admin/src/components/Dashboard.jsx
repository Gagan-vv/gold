import React from "react";

const Dashboard = () => {
  return (
    <div className="dash">
      <h1 className="p-head">Dashboard</h1>
      <hr />
      <div className="earning">
        <div className="tile">
          No of Products
          <p className="noo">13235</p>
        </div><div className="tile">
          No of Users
          <p className="noo">1458</p>
        </div><div className="tile">
          No of Orders
          <p className="noo">425</p>
        </div><div className="tile">
          Earning
          <p className="noo">1,00,00,000</p>
        </div>
      </div>

      <div className="earning">
        <div className="tile">
          Total gold used
          <p className="noo">1452gm</p>
        </div><div className="tile">
          Total diamong used
          <p className="noo">1458</p>
        </div><div className="tile">
          Total beads used
          <p className="noo">425</p>
        </div><div className="tile">
          Total wastage
          <p className="noo">14252 gm</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
