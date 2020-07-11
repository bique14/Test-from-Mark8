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
  const validateRowClass = (d) =>
    !!d["id"] &&
    !!d["condo_name-EN"] &&
    !!d["rent_price"] &&
    !!d["sale_price"] &&
    !!d["bedroom"] &&
    !!d["bath"] &&
    !!d["size (sq.m)"] &&
    !!d["floor"] &&
    !!d["title"] &&
    !!d["description"]
      ? "text-center text-gray-500"
      : "bg-red-500 text-white rounded";

  const validateString = (str) =>
    !!str ? str : <span className="text-red-500">not found</span>;

  const rentPrice = (price) =>
    price == "0" ? (
      "-"
    ) : !!price ? (
      <span>
        {price}
        <span className="text-gray-400">/month</span>
      </span>
    ) : (
      "-"
    );

  const salePrice = (price) => (price == "0" ? "-" : !!price ? price : "-");

  const agentPost = (bool) =>
    bool == "TRUE" ? (
      <span className="inline-block bg-green-200 text-green-600 rounded-full px-3 py-1 mr-1">
        Agent post
      </span>
    ) : (
      <span className="hidden"></span>
    );

  const acceptAgent = (bool) =>
    bool == "TRUE" ? (
      <span className="inline-block bg-yellow-200 text-yellow-600 rounded-full px-3 py-1">
        รับ Co-Agent
      </span>
    ) : (
      <span className="hidden"></span>
    );

  return (
    <tr className="border-b text-sm">
      <td className={validateRowClass(data)}>{validateString(data["id"])}</td>
      <td className="ellipsis" style={{ maxWidth: "18rem" }}>
        {validateString(data["condo_name-EN"])}
      </td>
      <td>{rentPrice(data["rent_price"])}</td>
      <td>{salePrice(data["sale_price"])}</td>
      <td>{validateString(data["bedroom"])}</td>
      <td>{validateString(data["bath"])}</td>
      <td>{validateString(data["size (sq.m)"])}</td>
      <td>{validateString(data["floor"])}</td>
      <td className="whitespace-no-wrap text-xs">
        {agentPost(data["agent_post"])}
        {acceptAgent(data["accept_agent"])}
      </td>
      <td className="text-red-500">PHOTO</td>
      <td className="ellipsis" style={{ maxWidth: "10rem" }}>
        {validateString(data["title"])}
      </td>
      <td className="ellipsis" style={{ maxWidth: "10rem" }}>
        {validateString(data["description"])}
      </td>
      <td className="text-red-500">BENEFIT</td>
      <td className="text-red-500">Amenities</td>
    </tr>
  );
}

function TableList({ data }) {
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
