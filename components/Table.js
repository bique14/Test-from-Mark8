function SummaryTable() {
  return (
    <div className="flex flex-row border-t justify-between">
      <div className="flex flex-row text-xl">
        <h1 className="inline-block bg-gray-300 p-4">0</h1>
        <span className="flex font-bold items-center ml-4">
          listings successfully and Ready to published
        </span>
      </div>
      <div className="flex flex-row px-6">
        <button className="mr-8 hover:text-blue-500">Update data</button>
        <button className="hover:text-blue-500">Published</button>
      </div>
    </div>
  );
}

function TableHeader() {
  return (
    <thead>
      <tr className="border text-gray-500 text-xs whitespace-no-wrap">
        <th></th>
        <th>CONDO NAME</th>
        <th>RENT PRICE (Baht)</th>
        <th>SELL PRICE (Baht)</th>
        <th>BEDROOM</th>
        <th>BATHROOM</th>
        <th>SIZE (sqm.)</th>
        <th>FLOOR</th>
        <th>STATUS</th>
        <th>PHOTO</th>
        <th>TITLE</th>
        <th>DESCRIPTION</th>
        <th>BENEFIT</th>
        <th>Amenities</th>
      </tr>
    </thead>
  );
}

function TableItem({ data }) {
  return (
    <tr className="border-b text-sm">
      <td className="text-center text-gray-500">{data["id"]}</td>
      <td className="ellipsis" style={{ maxWidth: "18rem" }}>
        {data["condo_name-EN"]}
      </td>
      <td>
        {data["rent_price"]}
        <span className="text-gray-400">/month</span>
      </td>
      <td>{data["sale_price"]}</td>
      <td>{data["bedroom"]}</td>
      <td>{data["bath"]}</td>
      <td>{data["size (sq.m)"]}</td>
      <td>{data["floor"]}</td>
      <td className="text-red-500">STATUS</td>
      <td className="text-red-500">PHOTO</td>
      <td className="ellipsis" style={{ maxWidth: "10rem" }}>
        {data["title"]}
      </td>
      <td className="ellipsis" style={{ maxWidth: "10rem" }}>
        {data["description"]}
      </td>
      <td className="text-red-500">BENEFIT</td>
      <td className="text-red-500">Amenities</td>
    </tr>
  );
}

function TableList({ data }) {
  console.log("64", data);
  const items = data.map((d) => <TableItem key={d.id} data={d} />);

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <TableHeader />
        <tbody>{items}</tbody>
      </table>
    </div>
  );
}

function Table({ data }) {
  return (
    <div className="bg-white">
      <SummaryTable />
      <TableList data={data} />
    </div>
  );
}

function ellipsis(n, limit) {
  const c = n.length > limit ? n.substring(0, limit) + "..." : n;
  return c;
}

export default Table;
