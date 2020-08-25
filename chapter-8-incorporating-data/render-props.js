import React from "react";

const tahoe_peaks = [
  { name: "Free Peak", elevation: 10983 },
  { name: "Monument Peak", elevation: 15683 },
  { name: "Pyramid Peak", elevation: 12383 },
  { name: "Mt. Tallac ", elevation: 10483 },
];

function List({ data = [], renderEmpty }) {
  return !data.length ? (
    renderEmpty
  ) : (
    <ul>
      {data.map((item, i) => (
        <li key={i}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

export default function App() {
  return (
    <List
      renderEmpty={<p>This list is empty</p>}
      data={tahoe_peaks}
      renderItem={(item) => (
        <>
          {item.name} = {item.elevation.toLocaleString()} ft
        </>
      )}
    />
  );
}
