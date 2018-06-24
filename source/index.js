import React from "react";
import { render, Artboard, Text } from "react-sketchapp";

const Document = () => {
  return (
    <Artboard
      name="Starter"
      style={{
        flexDirection: "column",
        width: (96 + 8) * 4,
        height: 100,
        backgroundColor: "rgb(249,99,2)",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Text
        style={{
          fontFamily: "Arial",
          color: "#fff",
          fontWeight: "bold"
        }}
      >
        Welcome to
      </Text>
      <Text
        style={{
          fontFamily: "Arial",
          color: "#fff",
          fontWeight: "bold"
        }}
      >
        React Sketch App
      </Text>
    </Artboard>
  );
};

render(<Document />, context.document.currentPage());
