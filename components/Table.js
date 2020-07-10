function SummaryTable() {
  return (
    <div className="flex flex-row border-t justify-between">
      <div className="flex flex-row text-xl">
        <h1 className="inline-block bg-gray-300 p-4">38</h1>
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

function TableItem() {
  return (
    <table className="w-full text-left">
      <thead>
        <tr className="border text-gray-500 text-xs">
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
      <tbody>
        <tr>
          <td className="text-center">1</td>
          <td>CONDO NAME</td>
          <td>RENT PRICE (Baht)</td>
          <td>SELL PRICE (Baht)</td>
          <td>BEDROOM</td>
          <td>BAtdROOM</td>
          <td>SIZE (sqm.)</td>
          <td>FLOOR</td>
          <td>STATUS</td>
          <td>PHOTO</td>
          <td>TITLE</td>
          <td>DESCRIPTION</td>
          <td>BENEFIT</td>
          <td>Amenities</td>
        </tr>
      </tbody>
    </table>
  );
}

function Table({ data }) {
  console.log(data);
  return (
    <div>
      table
      <SummaryTable />
      <TableItem />
    </div>
  );
}

export default Table;
