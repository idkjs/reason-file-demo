// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as Fetch from "bs-fetch/lib/es6/src/Fetch.bs.js";
import * as React from "react";
import * as $$FormData from "./FormData.bs.js";
import * as Caml_array from "bs-platform/lib/es6/caml_array.js";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";

function str(prim) {
  return prim;
}

function BsFileDemo(Props) {
  var match = React.useReducer((function (state, action) {
          if (action) {
            return {
                    files: [action._0]
                  };
          }
          console.log("upload");
          var data = $$FormData.make(undefined);
          data.append("avatar", Caml_array.get(state.files, 0));
          data.append("filename", "santaduck");
          console.log(data.get("avatar"));
          console.log(data.get("filename"));
          fetch("http://localhost:8080/profile", Fetch.RequestInit.make(/* Post */2, undefined, Caml_option.some(data), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(undefined)).then(function (prim) {
                return prim.json();
              });
          return {
                  files: []
                };
        }), {
        files: []
      });
  var dispatch = match[1];
  console.log(match[0]);
  return React.createElement("div", undefined, React.createElement("h1", undefined, "bs-file"), React.createElement("p", undefined, "open the console (CMD + C) to view logs"), React.createElement("input", {
                  type: "file",
                  onChange: (function (e) {
                      var files = e.target.files;
                      return Curry._1(dispatch, /* ChangeFile */{
                                  _0: Caml_array.get(files, 0)
                                });
                    })
                }), React.createElement("div", {
                  id: "preview"
                }), React.createElement("button", {
                  onClick: (function (e) {
                      return Curry._1(dispatch, /* Upload */0);
                    })
                }, "Upload"));
}

var make = BsFileDemo;

export {
  str ,
  make ,
  
}
/* react Not a pure module */
