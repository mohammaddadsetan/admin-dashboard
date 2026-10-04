const AddNewProductsFields = ({ newProduct, onChange }) => {
  const fields = [
    { label: "عنوان محصول", key: "title", type: "text" },
    { label: "وضعیت انتشار", key: "isPublished", type: "select" },
    { label: "تعداد موجودی", key: "entity", type: "number" },
    { label: "قیمت محصول", key: "price", type: "number" },
    { label: "توضیحات محصول", key: "description", type: "textarea" },
  ];

  const setNewProductHandler = (key, value) => {
    const product = {
      ...newProduct,
      [key]: key === "price" ? Number(value) : value,
    };
    onChange(product);
  };

  return (
    <div>
      {fields.map((field) => (
        <div key={field.key}>
          <label className="text-xs select-none text-neutral-500">
            {field.label}
          </label>

          {field.type === "textarea" ? (
            <textarea
              value={newProduct[field.key]}
              onChange={(event) => {
                setNewProductHandler(field.key, event.target.value);
              }}
              className="block mt-2 text-sm min-h-[140px] px-3 rounded-md bg-gradient-to-t from-zinc-100/70 shadow placeholder:text-sm border outline-none primary-border-color w-full"
            />
          ) : field.type === "select" ? (
            <select
              onChange={(event) =>
                setNewProductHandler(field.key, event.target.value)
              }
              className="block mt-2 px-3 rounded-md bg-gradient-to-t from-zinc-100/70 shadow placeholder:text-sm h-10 border outline-none primary-border-color w-full"
              value={newProduct[field.key]}
            >
              <option value="true">منتشر شده</option>
              <option value="false">منتشر نشده</option>
            </select>
          ) : (
            <input
              value={newProduct[field.key]}
              onChange={(event) =>
                setNewProductHandler(field.key, event.target.value)
              }
              type={field.type}
              className="block mt-2 px-3 rounded-md bg-gradient-to-t from-zinc-100/70 shadow placeholder:text-sm h-10 border outline-none primary-border-color w-full"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default AddNewProductsFields;
