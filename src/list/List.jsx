const List = ({ list }) => {
  const { id, logo, category_name, availability } = list;
  return (
    <div className="text-center mb-20">
      <img className=" mx-auto my-4" src={logo} alt="" />

      <div className="mx-auto">
        <h2 className="text-lg font-medium">{category_name}</h2>
        <p className="text-sm font-semibold text-slate-600">{availability}</p>
      </div>
    </div>
  );
};

export default List;
