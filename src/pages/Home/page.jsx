import React from "react";
import TitleElement from "../../components/layout/main/dashboard/home/TitleElement";
import summery from "../../data/summery";
import SummeryCard from "../../components/layout/main/dashboard/home/SummeryCard";
import Chart from "../../components/layout/main/dashboard/home/Chart";
import Table from "../../components/ui/Table/Table";
import FilterIcon from "../../components/ui/FilterIcon";
import SearchBox from "../../components/ui/SearchBox";
import { Link } from "react-router";
import { MdOpenInNew } from "react-icons/md";
function page() {
  const Button = () => {
    return <button className="primary-bg px-4 py-2">ایجاد محصول</button>;
  };

  const tableData = {
    headerTitle: {
      title: "لیست محصولات",
      Button: () => (
        <Link
          to={"/products"}
          className="underline hover:text-blue-400 text-blue-500 flex-center gap-1"
        >
          <span>صفحه محصولات</span>
          <MdOpenInNew />
        </Link>
      ),
    },
  };

  return (
    <div className="flex flex-col gap-5">
      <TitleElement title={"داشبورد"} buttons={<Button />} />
      <div className="flex items-center gap-3 w-full ">
        {summery.map((data) => (
          <SummeryCard
            key={data.id}
            title={data.title}
            Icon={data.Icon}
            value={data.value}
          />
        ))}
      </div>
      <Chart />
      <Table data={tableData} />
    </div>
  );
}

export default page;
