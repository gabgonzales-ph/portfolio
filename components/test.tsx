"use client";

export default function TestButton() {
  return (
    <button
      onClick={() => alert("isolated test works")}
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        zIndex: 9999,
        background: "red",
        color: "white",
        padding: "16px",
      }}
    >
      TEST
    </button>
  );
}