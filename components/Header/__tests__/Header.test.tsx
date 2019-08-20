import React from "react";
import { matchers } from "jest-emotion";
import { render } from "@testing-library/react";
import { Theme } from "../../../hooks/Theme";
import { Header } from "..";
import { headerData } from "../../../data/header";

expect.extend(matchers);

describe("Header", () => {
  it("should render without error", () => {
    const title = "Jakub Skoneczny";

    const { container, getByText } = render(
      <Theme>
        <Header {...headerData} title={title} />
      </Theme>
    );

    expect(container).toBeDefined();
    expect(getByText(title)).toBeDefined();
  });
});
