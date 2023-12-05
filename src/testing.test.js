import React from "react";
import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom/extend-expect";
import * as fetching from "./componentes/fetchData";
import useFecthDatos from "./componentes/fetchData";

describe("UI functionality", () => {
  test("placeholder text in document", () => {
    render(<App />);
    const text = screen.getByPlaceholderText(
      "Search topics that interest you to see the latest news. like bitcoin, madrid, messi"
    );
    expect(text).toBeInTheDocument();
  });

  test("numbers of word general appear in document", () => {
    render(<App />);
    const newWord = screen.queryAllByText(/News/i);
    expect(newWord).toHaveLength(2);
  });

  test("numbers of buttons", () => {
    render(<App />);
    const buttons = screen.queryAllByRole("button");
    expect(buttons).toHaveLength(3);
  });

  test("have imgs the alt text 'img-news'", async () => {
    render(<App />);
    const altImg = await screen.findAllByAltText("img-news");
    expect(altImg.length).toBeGreaterThan(15);
  });

  test("checking position when clicking", async () => {
    render(<App />);
    const button = screen.getByTestId("btnVolverArriba");
    fireEvent.click(button);
    expect(document.body.scrollTop).toBe(0);
  });
});

describe("test of obtaining and returning data from the API", () => {
  test("get data", async () => {
    const mocking = jest
      .spyOn(fetching, "getInfoNews")
      .mockImplementation(() =>
        Promise.resolve({ articles: Array(20).fill(0) })
      );
    const result = await mocking();
    expect(result).toBeInstanceOf(Object);
  });

  test("returned Data", async () => {
    const { result } = renderHook(() => useFecthDatos());
    expect(result.current).toHaveProperty(
      "datos",
      "tema",
      "setDatos",
      "setTema",
      "getInfo"
    );
  });
});


afterEach(() => {
  jest.clearAllMocks();
});