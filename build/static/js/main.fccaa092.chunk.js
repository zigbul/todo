(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),o=n(10),s=n.n(o),r=n(8),i=n(6),l=n(7),d=n(2),j=n(3),u=n(5),b=n(4),m=(n(17),function(e){var t=e.onItemAdded;return Object(c.jsx)("input",{className:"new-todo",placeholder:"What needs to be done?",autoFocus:!0,onKeyDown:function(){return t("Hello, world!")}})}),O=n(11),p=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var e=this.props,t=e.description,n=e.onDeleted,a=e.onToggleCompleted,o=e.onToggleEditing,s=e.completed,r="";return e.editing&&(r+=" editing"),s&&(r+=" completed"),Object(c.jsxs)("li",{className:r,children:[Object(c.jsxs)("div",{className:"view",children:[Object(c.jsx)("input",{className:"toggle",type:"checkbox",onClick:a}),Object(c.jsxs)("label",{children:[Object(c.jsx)("span",{className:"description",children:t}),Object(c.jsx)("span",{className:"created",children:"created 5 minutes ago"})]}),Object(c.jsx)("button",{className:"icon icon-edit",onClick:o}),Object(c.jsx)("button",{className:"icon icon-destroy",onClick:n})]}),Object(c.jsx)("input",{type:"text",className:"edit",value:t})]})}}]),n}(a.Component),g=function(e){var t=e.tasks,n=e.onDeleted,a=e.onToggleCompleted,o=e.onToggleEditing,s=t.map((function(e){var t=e.key,s=Object(O.a)(e,["key"]);return Object(c.jsx)(p,Object(i.a)(Object(i.a)({},s),{},{onDeleted:function(){return n(t)},onToggleCompleted:function(){return a(t)},onToggleEditing:function(){return o(t)}}),t)}));return Object(c.jsx)("ul",{className:"todo-list",children:s})},h=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("ul",{className:"filters",children:[Object(c.jsx)("li",{children:Object(c.jsx)("button",{className:"selected",children:"All"})}),Object(c.jsx)("li",{children:Object(c.jsx)("button",{children:"Active"})}),Object(c.jsx)("li",{children:Object(c.jsx)("button",{children:"Completed"})})]})}}]),n}(a.Component),f=function(e){var t=e.taskCount;return Object(c.jsxs)("footer",{className:"footer",children:[Object(c.jsxs)("span",{className:"todo-count",children:[t," items left"]}),Object(c.jsx)(h,{}),Object(c.jsx)("button",{className:"clear-completed",children:"Clear completed"})]})},x=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(d.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).maxId=100,e.state={taskData:[e.createTodoItem("Completed Task"),e.createTodoItem("Editing Task"),e.createTodoItem("New Task")]},e.deleteItem=function(t){e.setState((function(e){var n=e.taskData,c=n.findIndex((function(e){return e.key===t})),a=n.slice(0,c),o=n.slice(c+1);return{taskData:[].concat(Object(l.a)(a),Object(l.a)(o))}}))},e.addItem=function(t){var n=e.createTodoItem(t);e.setState((function(e){var t=e.taskData;return{taskData:[].concat(Object(l.a)(t),[n])}}))},e.onToggleCompleted=function(t){e.setState((function(n){var c=n.taskData;return{taskData:e.toggleProperty(c,t,"completed")}}))},e.onToggleEditing=function(t){e.setState((function(n){var c=n.taskData;return{taskData:e.toggleProperty(c,t,"editing")}}))},e}return Object(j.a)(n,[{key:"createTodoItem",value:function(e){return{description:e,completed:!1,editing:!1,key:this.maxId++}}},{key:"toggleProperty",value:function(e,t,n){var c=e.findIndex((function(e){return e.key===t})),a=e[c],o=Object(i.a)(Object(i.a)({},a),{},Object(r.a)({},n,!a[n])),s=e.slice(0,c),d=e.slice(c+1);return[].concat(Object(l.a)(s),[o],Object(l.a)(d))}},{key:"render",value:function(){var e=this.state.taskData,t=e.filter((function(e){return e.completed})).length,n=e.length-t;return Object(c.jsxs)("section",{className:"todoapp",children:[Object(c.jsxs)("header",{className:"header",children:[Object(c.jsx)("h1",{children:"todos"}),Object(c.jsx)(m,{onItemAdded:this.addItem})]}),Object(c.jsxs)("section",{className:"main",children:[Object(c.jsx)(g,{tasks:e,onDeleted:this.deleteItem,onToggleCompleted:this.onToggleCompleted,onToggleEditing:this.onToggleEditing}),Object(c.jsx)(f,{taskCount:n})]})]})}}]),n}(a.Component);s.a.render(Object(c.jsx)(x,{}),document.querySelector("#root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.fccaa092.chunk.js.map