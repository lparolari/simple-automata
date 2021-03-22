import { Q, q0, Sigma, F } from "../src/automata";

describe("struttura automa", () => {
  test("è composto da tre stati: q0, q1, q2", () => {
    expect(Q).toEqual(["q0", "q1", "q2"]);
  });

  test("lavora sull'alfabeto 0, 1", () => {
    expect(Sigma).toEqual([0, 1]);
  });

  test("lo stato iniziale è q0", () => {
    expect(q0).toEqual("q0");
  });

  test("gli stati finali sono solo q1", () => {
    expect(F).toEqual(["q1"]);
  });
});

// TODO: delta tests
// TODO: delta_c tests
// TODO: is_accettata tests
