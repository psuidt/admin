webpackJsonp([14],{gKtY:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("mvHQ"),s=a.n(n),r=a("M+K7"),c={name:"import",data:function(){return{imports:[{label:"API",value:2},{label:"Strategy",value:3}],selectedImport:2,content:""}},methods:{beginImport:function(e){var t=this;if(""!=this.selectedImport)switch(this.selectedImport){case 2:var a="";"create"==e&&(a="create");var n=JSON.parse(this.content);n.param_rules=s()(n.param_rules);var c={target_app:"juzManage",target_path:"/manage/api/define",api:n,action:a};Object(r.a)("POST",c).then(function(e){t.content="",t.$message({message:"imported ok",type:"success",duration:3e3,center:!0})});break;case 3:if("create"==e){c={target_app:"juzManage",target_path:"/manage/strategy/create",strategy:this.content};Object(r.a)("POST",c).then(function(e){t.content="",t.$message({message:"Strategy created ok",type:"success",duration:3e3,center:!0})})}else{c={target_app:"juzManage",target_path:"/manage/strategy/update",strategy:this.content};Object(r.a)("POST",c).then(function(e){t.content="",t.$message({message:"Strategy created ok",type:"success",duration:3e3,center:!0})})}}else this.$message({message:"select import type",type:"warning",duration:5e3,center:!0})}},created:function(){},destroyed:function(){}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-select",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"select impor type"},model:{value:e.selectedImport,callback:function(t){e.selectedImport=t},expression:"selectedImport"}},e._l(e.imports,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),e._v(" "),a("el-row",{staticStyle:{"margin-top":"10px"}},[a("el-col",{attrs:{span:12}},[a("el-alert",{attrs:{title:"Tips: copy the config first ,then paste below to import",closable:!1,type:"warning"}}),e._v(" "),a("el-input",{attrs:{type:"textarea",autosize:{minRows:10,maxRows:50},placeholder:"Config JSON"},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}}),e._v(" "),a("el-button",{staticStyle:{"margin-top":"6px"},on:{click:function(t){e.beginImport("edit")}}},[e._v("Update")]),e._v(" "),a("el-button",{staticStyle:{"margin-top":"6px"},attrs:{type:"success"},on:{click:function(t){e.beginImport("create")}}},[e._v("Create")])],1)],1)],1)])},staticRenderFns:[]},i=a("VU/8")(c,o,!1,null,null,null);t.default=i.exports}});