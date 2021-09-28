import looksLike from "utils/looksLike";

it("compares two plain objects (happy case)", () => {
  expect(
    looksLike(
      {
        foo: "foo",
        bar: {
          boo: 999,
        },
      },
      {
        bar: {
          boo: 999,
        },
      }
    )
  ).toBe(true);
});

it("compares two plain objects (sad case)", () => {
  expect(
    looksLike(
      {
        foo: "foo",
        bar: {
          boo: 999,
        },
      },
      {
        bar: {
          boo: 1000,
        },
      }
    )
  ).toBe(false);
});

it("compares with functions (happy case)", () => {
  expect(
    looksLike(
      {
        foo: "foo",
        bar: {
          boo: 999,
        },
      },
      {
        foo: (x) => x === "foo",
        bar: {
          boo: (x) => x === 999,
        },
      }
    )
  ).toBe(true);
});

it("compares with functions (sad case)", () => {
  expect(
    looksLike(
      {
        foo: "foo",
        bar: {
          boo: 999,
        },
      },
      {
        foo: (x) => x === "woo",
        bar: {
          boo: (x) => x === 1000,
        },
      }
    )
  ).toBe(false);
});
