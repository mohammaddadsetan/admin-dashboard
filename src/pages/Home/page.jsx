import React from "react";
import TitleElement from "../../components/layout/main/dashboard/home/TitleElement";
import summery from "../../data/summery";
import SummeryCard from "../../components/layout/main/dashboard/home/SummeryCard";
import Chart from "../../components/layout/main/dashboard/home/Chart";

import { useNavigate } from "react-router";
import ProductsTable from "../../components/layout/main/dashboard/home/Table/ProductsTable";
import QuickOverView from "../../components/layout/main/dashboard/home/QuickOverView/QuickOverView";
import useTitle from "../../hooks/useTitle";
function page() {
  useTitle("صفحه اصلی");

  const navigate = useNavigate();
  const Button = () => {
    return (
      <button
        onClick={() => navigate("/products")}
        className="primary-bg px-4 py-2"
      >
        ایجاد محصول
      </button>
    );
  };

  return (
    <div className="flex flex-col gap-5">
      <TitleElement title={"داشبورد"} buttons={<Button />} />
      <section className="flex items-center gap-3 w-full ">
        {summery.map((data) => (
          <SummeryCard
            key={data.id}
            title={data.title}
            Icon={data.Icon}
            value={data.value}
          />
        ))}
      </section>
      <Chart />
      <ProductsTable />
      <QuickOverView />
    </div>
  );
}

export default page;
