import { useState } from "react";

const BENEFITS = [
  "-",
  "ห้องใหม่เอี่ยม",
  "เจ้าของขายเอง",
  "วิวสวย ริมแม่น้ำ",
  "วิวทางด่วน",
  "สระว่ายน้ำสวย",
];

function SummaryTable({ data }) {
  const filtered = data.filter((d) => validateRowClass(d) !== "btn-remove")
    .length;

  return (
    <div className="flex flex-row border-t justify-between">
      <div className="flex flex-row text-xl">
        <h1 className="inline-block bg-gray-300 p-4">{filtered}</h1>
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

function validateRowClass(d) {
  return !!d["id"] &&
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
    : "btn-remove";
}

function TableItem({ data }) {
  const [benefitSelected, setBenefit] = useState("");

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

  const photo = (src) => {
    const photos = [];
    for (let i = 0; i < 4; i++) {
      photos.push(
        <img
          key={i}
          className="inline-block rounded-lg h-8 w-8 mr-1"
          src={src}
        ></img>
      );
    }
    return photos;
  };

  const optionBenefits = (benefits) =>
    benefits.map((b, i) => (
      <option key={i} value={b}>
        {b}
      </option>
    ));

  const amenities = {
    Aircon: data["Aircon"],
    "Bath tub": data["Bath tub"],
    "Electric stove": data["Electric stove"],
    Furniture: data["Furniture"],
    "Gas stove": data["Gas stove"],
    Refrigerator: data["Refrigerator"],
    "Washing machine": data["Washing machine"],
    "Water heater": data["Water heater"],
  };

  const filterAmenities = Object.keys(amenities).filter(
    (a) => amenities[a] == "TRUE"
  );

  const amenitiesElement = (amenities) =>
    amenities.map((a) => <span className="block">{a}</span>);

  return (
    <tr className="border-b text-sm">
      <td className={validateRowClass(data)}>
        <span>{validateString(data["id"])}</span>
      </td>
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
      <td className="whitespace-no-wrap text-red-500 photo">
        {photo(data["photo1"])}
        <span className="inline-block text-blue-500 ml-1 w-20 cursor-pointer"></span>
      </td>
      <td className="ellipsis" style={{ maxWidth: "10rem" }}>
        {validateString(data["title"])}
      </td>
      <td className="ellipsis" style={{ maxWidth: "10rem" }}>
        {validateString(data["description"])}
      </td>
      <td>
        <select
          className="cursor-pointer"
          value={benefitSelected}
          onChange={(event) => {
            setBenefit(event.target.value);
          }}
        >
          {optionBenefits(BENEFITS)}
        </select>
      </td>
      <td className="amenities relative">
        <span className="block text-center cursor-pointer">
          {filterAmenities.length ? filterAmenities.length : "-"}
        </span>
        <div className="show-amenities text-xs w-32 hidden">
          <span className="block text-center font-bold border-blue-400 border-b-2 py-2">
            Amenities
          </span>
          <div className="px-2 py-2">
            {filterAmenities.length ? amenitiesElement(filterAmenities) : "No amenities"}
          </div>
        </div>
      </td>
    </tr>
  );
}

function TableList({ data }) {
  const items = data.map((d) => <TableItem key={d.id} data={d} />);

  return (
    <div className="overflow-x-auto pb-24">
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
      <SummaryTable data={data} />
      <TableList data={data} />
    </div>
  );
}

function ellipsis(n, limit) {
  const c = n.length > limit ? n.substring(0, limit) + "..." : n;
  return c;
}

export default Table;
