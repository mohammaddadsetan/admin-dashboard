import React from "react";
import LastProducts from "./LastProducts/LastProducts";
import LastUsers from "./LastUsers/LastUsers";

function QuickOverView() {
  return (
    <section className="space-y-10 grid grid-cols-5 *:p-5 *:border *:primary-border-color *:bg-white *:rounded-xl gap-5 *:shadow">
      <LastProducts />
      <LastUsers />
    </section>
  );
}

export default QuickOverView;
