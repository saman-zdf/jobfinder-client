import React, { useEffect } from 'react';

const Dashboard = () => {
  const fetchData = async function () {
    try {
      // const res = await fetch('/data.json');
      const res = await fetch('/api/v1');
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return <div>Dashboard Page</div>;
};

export default Dashboard;
