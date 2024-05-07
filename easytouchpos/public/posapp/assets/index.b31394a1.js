var h = (s, r, o) =>
  new Promise((t, e) => {
    var n = (i) => {
        try {
          u(o.next(i));
        } catch (f) {
          e(f);
        }
      },
      c = (i) => {
        try {
          u(o.throw(i));
        } catch (f) {
          e(f);
        }
      },
      u = (i) => (i.done ? t(i.value) : Promise.resolve(i.value).then(n, c));
    u((o = o.apply(s, r)).next());
  });
import {
  c as d,
  r as y,
  a as v,
  b as E,
  d as P,
  _ as I,
  e as R,
  o as k,
  f as O,
  g as w,
  h as A,
  s as b,
  i as j,
  j as C,
  C as S,
  I as V,
  k as $,
} from "./vendor.91551698.js";
const D = function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) t(e);
  new MutationObserver((e) => {
    for (const n of e)
      if (n.type === "childList")
        for (const c of n.addedNodes)
          c.tagName === "LINK" && c.rel === "modulepreload" && t(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(e) {
    const n = {};
    return (
      e.integrity && (n.integrity = e.integrity),
      e.referrerpolicy && (n.referrerPolicy = e.referrerpolicy),
      e.crossorigin === "use-credentials"
        ? (n.credentials = "include")
        : e.crossorigin === "anonymous"
        ? (n.credentials = "omit")
        : (n.credentials = "same-origin"),
      n
    );
  }
  function t(e) {
    if (e.ep) return;
    e.ep = !0;
    const n = o(e);
    fetch(e.href, n);
  }
};
D();
const H = "modulepreload",
  L = {},
  N = "/assets/easytouchpos/posapp/",
  m = function (r, o) {
    return !o || o.length === 0
      ? r()
      : Promise.all(
          o.map((t) => {
            if (((t = `${N}${t}`), t in L)) return;
            L[t] = !0;
            const e = t.endsWith(".css"),
              n = e ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${t}"]${n}`)) return;
            const c = document.createElement("link");
            if (
              ((c.rel = e ? "stylesheet" : H),
              e || ((c.as = "script"), (c.crossOrigin = "")),
              (c.href = t),
              document.head.appendChild(c),
              e)
            )
              return new Promise((u, i) => {
                c.addEventListener("load", u), c.addEventListener("error", i);
              });
          })
        ).then(() => r());
  },
  _ = d({
    url: "frappe.auth.get_logged_user",
    cache: "User",
    onError(s) {
      s &&
        s.exc_type === "AuthenticationError" &&
        p.push({ name: "LoginPage" });
    },
  });
function g() {
  let r = new URLSearchParams(document.cookie.split("; ").join("&")).get(
    "user_id"
  );
  return r === "Guest" && (r = null), r;
}
const l = y({
    login: d({
      url: "login",
      makeParams({ email: s, password: r }) {
        return { usr: s, pwd: r };
      },
      onSuccess(s) {
        _.reload(),
          (l.user = g()),
          l.login.reset(),
          p.replace(s.default_route || "/");
      },
    }),
    logout: d({
      url: "logout",
      onSuccess() {
        _.reset(), (l.user = g()), p.replace({ name: "Login" });
      },
    }),
    user: g(),
    isLoggedIn: v(() => !!l.user),
  }),
  T = [
    {
      path: "/",
      name: "Public",
      redirect: "/",
      component: () =>
        m(
          () => import("./layout.1243d722.js"),
          [
            "assets/layout.1243d722.js",
            "assets/pos-sheet.50c41be8.js",
            "assets/index.c7b188d2.js",
            "assets/vendor.91551698.js",
            "assets/vendor.dc87475e.css",
            "assets/Input.b4d7fa34.js",
          ]
        ),
      children: [
        {
          path: "/",
          name: "Home",
          component: () =>
            m(
              () => import("./Home.cff2aca2.js"),
              [
                "assets/Home.cff2aca2.js",
                "assets/index.c7b188d2.js",
                "assets/vendor.91551698.js",
                "assets/vendor.dc87475e.css",
                "assets/pos-sheet.50c41be8.js",
              ]
            ),
        },
        {
          path: "/recent-sales",
          name: "Recent Sales",
          component: () =>
            m(
              () => import("./recent-sales.0c861084.js"),
              [
                "assets/recent-sales.0c861084.js",
                "assets/vendor.91551698.js",
                "assets/vendor.dc87475e.css",
              ]
            ),
        },
      ],
    },
    {
      name: "Login",
      path: "/account/login",
      component: () =>
        m(
          () => import("./Login.0c4f0e28.js"),
          [
            "assets/Login.0c4f0e28.js",
            "assets/vendor.91551698.js",
            "assets/vendor.dc87475e.css",
            "assets/index.c7b188d2.js",
            "assets/Input.b4d7fa34.js",
          ]
        ),
    },
  ];
let p = E({ history: P("/posapp"), routes: T });
p.beforeEach((s, r, o) =>
  h(void 0, null, function* () {
    let t = l.isLoggedIn;
    try {
      yield _.promise;
    } catch (e) {
      t = !1;
    }
    s.name === "Login" && t
      ? o({ name: "Home" })
      : s.name !== "Login" && !t
      ? o({ name: "Login" })
      : o();
  })
);
const U = {};
function q(s, r) {
  const o = R("router-view");
  return k(), O("main", null, [w(o)]);
}
var x = I(U, [["render", q]]);
let a = A(x);
b("resourceFetcher", $);
a.use(p);
a.use(j);
a.component("Button", C);
a.component("Card", S);
a.component("Input", V);
a.mount("#app");
export { l as s };
