import React from "react";
import TitleElement from "../../components/layout/main/dashboard/home/TitleElement";
import summery from "../../data/summery";
import SummeryCard from "../../components/layout/main/dashboard/home/SummeryCard";
function page() {
  const Button = () => {
    return <button className="primary-bg px-4 py-2">ایجاد محصول</button>;
  };

  return (
    <div className="flex flex-col gap-5">
      <TitleElement title={"داشبورد"} buttons={<Button />} />
      <div className="flex items-center gap-3">
        {summery.map((data) => (
          <SummeryCard
            key={data.id}
            title={data.title}
            Icon={data.Icon}
            value={data.value}
          />
        ))}
      </div>
    </div>
  );
}

export default page;
