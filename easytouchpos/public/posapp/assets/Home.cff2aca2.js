var y = Object.getOwnPropertySymbols;
var F = Object.prototype.hasOwnProperty,
  P = Object.prototype.propertyIsEnumerable;
var x = (a, r) => {
  var e = {};
  for (var s in a) F.call(a, s) && r.indexOf(s) < 0 && (e[s] = a[s]);
  if (a != null && y)
    for (var s of y(a)) r.indexOf(s) < 0 && P.call(a, s) && (e[s] = a[s]);
  return e;
};
var b = (a, r, e) =>
  new Promise((s, o) => {
    var t = (n) => {
        try {
          i(e.next(n));
        } catch (g) {
          o(g);
        }
      },
      d = (n) => {
        try {
          i(e.throw(n));
        } catch (g) {
          o(g);
        }
      },
      i = (n) => (n.done ? s(n.value) : Promise.resolve(n.value).then(t, d));
    i((e = e.apply(a, r)).next());
  });
import { c as k, l as E, _ as I, ak as N, al as O } from "./index.c7b188d2.js";
import {
  l as m,
  o as u,
  f as p,
  p as $,
  q as C,
  u as c,
  a as w,
  m as B,
  w as h,
  g as f,
  O as q,
  e as D,
  P as l,
  t as _,
  x as S,
  T as j,
  U as L,
  am as v,
  an as T,
  n as U,
} from "./vendor.91551698.js";
import {
  C as z,
  s as A,
  t as V,
  r as M,
  p as R,
  f as G,
  q as H,
} from "./pos-sheet.50c41be8.js";
import "./index.b31394a1.js";
const J = m({
    __name: "Badge",
    props: { variant: {}, class: {} },
    setup(a) {
      const r = a;
      return (e, s) => (
        u(),
        p(
          "div",
          { class: C(c(k)(c(Q)({ variant: e.variant }), r.class)) },
          [$(e.$slots, "default")],
          2
        )
      );
    },
  }),
  Q = E(
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
      variants: {
        variant: {
          default:
            "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
          secondary:
            "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
          destructive:
            "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
          outline: "text-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    }
  ),
  K = m({
    __name: "Checkbox",
    props: {
      defaultChecked: { type: Boolean },
      checked: { type: [Boolean, String] },
      disabled: { type: Boolean },
      required: { type: Boolean },
      name: {},
      value: {},
      id: {},
      asChild: { type: Boolean },
      as: {},
      class: {},
    },
    emits: ["update:checked"],
    setup(a, { emit: r }) {
      const e = a,
        s = r,
        o = w(() => {
          const n = e,
            { class: d } = n;
          return x(n, ["class"]);
        }),
        t = I(o, s);
      return (d, i) => (
        u(),
        B(
          c(O),
          q(c(t), {
            class: c(k)(
              "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
              e.class
            ),
          }),
          {
            default: h(() => [
              f(
                c(N),
                {
                  class:
                    "flex h-full w-full items-center justify-center text-current",
                },
                {
                  default: h(() => [
                    $(d.$slots, "default", {}, () => [
                      f(c(z), { class: "h-4 w-4" }),
                    ]),
                  ]),
                  _: 3,
                }
              ),
            ]),
            _: 3,
          },
          16,
          ["class"]
        )
      );
    },
  }),
  W = {
    class: "bg-white rounded-xl flex justify-center items-center w-full h-28",
  },
  X = ["src", "alt"],
  Y = { class: "p-2" },
  Z = { class: "flex justify-between" },
  ee = { class: "flex flex-col" },
  te = { class: "text-gray-400" },
  se = { class: "flex flex-col items-end" },
  re = { class: "font-semibold" },
  oe = m({
    __name: "product",
    props: { product: {} },
    setup(a) {
      const { cart: r, addToCart: e, removeAllById: s } = A((t) => t),
        o = (t) => r.value.some((d) => d.item_code === t.item_code);
      return (t, d) => {
        const i = D("Label");
        return (
          u(),
          p("div", null, [
            f(
              c(K),
              {
                id: `checkbox-${t.product.item_code}`,
                onClick:
                  d[0] ||
                  (d[0] = (n) =>
                    o(t.product) ? c(s)(t.product) : c(e)(t.product)),
                checked: o(t.product),
                class: "peer sr-only",
              },
              null,
              8,
              ["id", "checked"]
            ),
            f(
              i,
              {
                for: `checkbox-${t.product.item_code}`,
                class: C(
                  ` flex cursor-pointer flex-col  justify-between rounded-xl border-2 border-muted bg-popover hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary ${
                    o(t.product) && "border-primary"
                  }`
                ),
              },
              {
                default: h(() => [
                  l("div", W, [
                    l(
                      "img",
                      {
                        src: t.product.image,
                        alt: t.product.item_name,
                        class: "h-24",
                      },
                      null,
                      8,
                      X
                    ),
                  ]),
                  l("div", Y, [
                    l("div", Z, [
                      l("div", ee, [
                        l("b", null, _(t.product.item_name), 1),
                        l("small", te, _(t.product.item_group), 1),
                      ]),
                      l("div", se, [
                        l("p", re, "Qty: " + _(t.product.is_stock_item), 1),
                        l("b", null, "$" + _(t.product.rate), 1),
                      ]),
                    ]),
                  ]),
                ]),
                _: 1,
              },
              8,
              ["for", "class"]
            ),
          ])
        );
      };
    },
  }),
  ae = {
    class:
      "grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 overflow-scroll 2xl:grid-cols-6 gap-2",
  },
  ne = m({
    __name: "product-list",
    setup(a) {
      const { isSelectedCategory: r } = V((t) => t),
        e = S([]);
      (() =>
        b(this, null, function* () {
          const t = yield M(`${R()}`),
            d = yield G.post(
              "/api/method/easytouchpos.easytouchpos.api.posapp.get_items",
              {
                pos_profile: JSON.stringify(t.message.pos_profile),
                price_list: "",
                item_group: "",
                search_value: "",
              }
            );
          e.value = d.data.message;
        }))();
      const o = w(() => e.value.filter((t) => t.item_group === r.value));
      return (t, d) => (
        u(),
        p("div", ae, [
          (u(!0),
          p(
            j,
            null,
            L(
              o.value,
              (i, n) => (
                u(),
                p("div", { key: n }, [
                  f(oe, { product: i }, null, 8, ["product"]),
                ])
              )
            ),
            128
          )),
        ])
      );
    },
  });
class ce {
  FindMany({
    doctype: r,
    fields: e = ["*"],
    filters: s = {},
    orderBy: o = "",
  }) {
    return v({ doctype: r, fields: e, filters: s, orderBy: o, auto: !0 });
  }
  FindOne({ doctype: r, fields: e = ["*"], name: s }) {
    return (
      console.log(r, e, s), T({ doctype: r, fields: e, name: s, auto: !0 })
    );
  }
  Insert({ doctype: r, data: e }) {
    v({
      doctype: r,
      auto: !0,
      insert: {
        onError(o) {
          return o;
        },
        onSuccess(o) {
          return o;
        },
      },
    }).insert.submit(e);
  }
  Update({ doctype: r, data: e }) {
    v({
      doctype: r,
      auto: !0,
      setValue: {
        onError(o) {
          return o;
        },
        onSuccess(o) {
          return o;
        },
      },
    }).setValue.submit(e);
  }
  Delete({ doctype: r, id: e }) {
    v({
      doctype: r,
      auto: !0,
      delete: {
        onError(o) {
          return o;
        },
        onSuccess(o) {
          return o;
        },
      },
    }).delete.submit(e);
  }
}
const ie = new ce(),
  le = {
    class:
      "relative space-y-3 flex h-full flex-col rounded-xl bg-muted/50 p-4 flex-[2] 2xl:flex-[3]",
  },
  de = l("h1", { class: "text-2xl font-semibold" }, "Products", -1),
  ue = { class: "flex flex-wrap gap-2" },
  pe = { class: "py-4" },
  fe = m({
    __name: "main-pos",
    setup(a) {
      const { setSelectedCategory: r, isSelectedCategory: e } = V((t) => t),
        s = S([]);
      return (
        (() =>
          b(this, null, function* () {
            const t = yield ie.FindMany({
              doctype: "Item Group",
              fields: ["name", "item_group_name"],
            });
            s.value = t;
          }))(),
        (t, d) => (
          u(),
          p("div", le, [
            de,
            l("div", ue, [
              (u(!0),
              p(
                j,
                null,
                L(
                  s.value.data,
                  (i, n) => (
                    u(),
                    B(
                      c(J),
                      {
                        variant: c(e) === i.name ? "default" : "outline",
                        onClick: (g) =>
                          c(e) === i.name ? c(r)() : c(r)(i.name),
                        class: "capitalize cursor-pointer",
                        key: n,
                      },
                      { default: h(() => [U(_(i.item_group_name), 1)]), _: 2 },
                      1032,
                      ["variant", "onClick"]
                    )
                  )
                ),
                128
              )),
            ]),
            l("div", pe, [f(ne)]),
          ])
        )
      );
    },
  }),
  me = { class: "flex items-start gap-4 flex-1 p-4" },
  _e = { class: "sticky hidden lg:block top-[73px] flex-1" },
  xe = m({
    __name: "Home",
    setup(a) {
      return (r, e) => (u(), p("main", me, [f(fe), l("div", _e, [f(H)])]));
    },
  });
export { xe as default };
