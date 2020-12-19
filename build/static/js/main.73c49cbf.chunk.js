(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n(2),i=n(10),c=n.n(i),r=n(7),s=n(1),l=n(12),d=n(3),u=n(4),b=n(6),j=n(5),g=(n(18),function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).onLabelChange=function(e){a.setState({label:e.target.value})},a.onKeyDown=function(e){var t=a.props.onItemAdded,n=a.state.label;13===e.keyCode&&(t(n),a.setState({label:""}))},a.state={label:""},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.label;return Object(a.jsx)("input",{className:"new-todo",placeholder:"What needs to be done?",onChange:this.onLabelChange,onKeyDown:this.onKeyDown,value:e})}}]),n}(o.Component)),f=n(8),p=n(11),m=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(e){var a;Object(d.a)(this,n),(a=t.call(this,e)).onLabelChange=function(e){a.setState({description:e.target.value})};var o=a.props.description;return a.state={description:o},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.onDeleted,n=e.onToggleCompleted,o=e.onToggleEditing,i=e.completed,c=e.hidden,r=e.time,s=e.editing,l=e.onKeyCodeDown,d=this.state.description;return Object(a.jsxs)("li",{className:function(){var e="";return s&&(e+=" editing"),i&&(e+=" completed"),c&&(e+=" hidden"),e}(),children:[Object(a.jsxs)("div",{className:"view",children:[Object(a.jsx)("input",{className:"toggle",type:"checkbox",onClick:n}),Object(a.jsxs)("label",{htmlFor:"description created",children:[Object(a.jsx)("span",{id:"description",className:"description",children:d}),Object(a.jsx)("span",{id:"created",className:"created",children:Object(p.a)(r,{includeSeconds:!0})})]}),Object(a.jsx)("button",{type:"button",className:"icon icon-edit",onClick:o,"aria-label":"Editing Toggle"}),Object(a.jsx)("button",{type:"button",className:"icon icon-destroy",onClick:t,"aria-label":"Delete Task"})]}),Object(a.jsx)("input",{type:"text",className:"edit",onChange:this.onLabelChange,onKeyDown:l,value:d})]})}}]),n}(o.Component),h=function(e){var t=e.tasks,n=e.onDeleted,o=e.onToggleCompleted,i=e.onToggleEditing,c=e.onKeyCodeDown,r=t.map((function(e){var t=e.id,r=Object(f.a)(e,["id"]);return Object(a.jsx)(m,Object(s.a)(Object(s.a)({},r),{},{onKeyCodeDown:function(e){return c(e,t)},onDeleted:function(){return n(t)},onToggleCompleted:function(){return o(t)},onToggleEditing:function(){return i(t)}}),t)}));return Object(a.jsx)("ul",{className:"todo-list",children:r})},v=function(e){var t=e.label,n=e.isActive,o=e.onToggleActive;return Object(a.jsx)("li",{children:Object(a.jsx)("button",{type:"button",className:function(){var e="";return n&&(e+=" selected"),e}(),onClick:o,children:t})})},O=function(e){var t=e.filterBtns,n=e.onToggleActive,o=t.map((function(e){var t=e.id,o=Object(f.a)(e,["id"]);return Object(a.jsx)(v,Object(s.a)(Object(s.a)({},o),{},{onToggleActive:function(){return n(t)}}),t)}));return Object(a.jsx)("ul",{className:"filters",children:o})},k=function(e){var t=e.taskCount,n=e.onClearCompleted,o=e.filterBtns,i=e.onToggleActive;return Object(a.jsxs)("footer",{className:"footer",children:[Object(a.jsxs)("span",{className:"todo-count",children:[t," items left"]}),Object(a.jsx)(O,{filterBtns:o,onToggleActive:i}),Object(a.jsx)("button",{type:"button",className:"clear-completed",onClick:n,children:"Clear completed"})]})},C=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).setID=function(){return"_".concat(Math.random().toString(36).substr(2,9))},a.deleteItem=function(e){a.setState((function(t){return{taskData:t.taskData.filter((function(t){return t.id!==e}))}}))},a.addItem=function(e){var t=a.createTodoItem(e);a.setState((function(e){var n=e.taskData;return{taskData:[].concat(Object(l.a)(n),[t])}}))},a.onToggleCompleted=function(e){a.setState((function(t){var n=t.taskData;return{taskData:a.toggleProperty(n,e,"completed")}}))},a.onToggleEditing=function(e){a.setState((function(t){var n=t.taskData;return{taskData:a.toggleProperty(n,e,"editing")}}))},a.onClearCompleted=function(){var e=a.state.taskData.filter((function(e){return!e.completed}));a.setState((function(){return{taskData:e}}))},a.onToggleActive=function(e){a.setState((function(t){var n=t.filterBtnsData;return{filterBtnsData:a.activeToggler(n,e,"isActive")}}));var t=a.state,n=t.taskData;t.filterBtnsData.forEach((function(e){if(e.isActive&&3===e.id){var t=n.map((function(e){return!1===e.completed?Object(s.a)(Object(s.a)({},e),{},{hidden:!0}):e.completed?Object(s.a)(Object(s.a)({},e),{},{hidden:!1}):e}));a.setState((function(){return{taskData:t}}))}else if(e.isActive&&2===e.id){var o=n.map((function(e){return e.completed?Object(s.a)(Object(s.a)({},e),{},{hidden:!0}):!1===e.completed?Object(s.a)(Object(s.a)({},e),{},{hidden:!1}):e}));a.setState((function(){return{taskData:o}}))}else if(e.isActive&&1===e.id){var i=n.map((function(e){return Object(s.a)(Object(s.a)({},e),{},{hidden:!1})}));a.setState((function(){return{taskData:i}}))}}))},a.onKeyCodeDown=function(e,t){13!==e.keyCode&&27!==e.keyCode||a.setState((function(e){var n=e.taskData;return{taskData:a.toggleProperty(n,t,"editing")}}))},a.state={taskData:[a.createTodoItem("Completed Task"),a.createTodoItem("Editing Task"),a.createTodoItem("New Task")],filterBtnsData:[{label:"All",isActive:!1,id:1},{label:"Active",isActive:!0,id:2},{label:"Completed",isActive:!1,id:3}]},a}return Object(u.a)(n,[{key:"activeToggler",value:function(e,t,n){return e.map((function(e){return e.id===t&&!1===e.isActive||e.id!==t&&!0===e.isActive?Object(s.a)(Object(s.a)({},e),{},Object(r.a)({},n,!e[n])):e}))}},{key:"toggleProperty",value:function(e,t,n){return e.map((function(e){return e.id===t?Object(s.a)(Object(s.a)({},e),{},Object(r.a)({},n,!e[n])):e}))}},{key:"createTodoItem",value:function(e){return{description:e,completed:!1,editing:!1,id:this.setID(),hidden:!1,time:new Date}}},{key:"render",value:function(){var e=this.state,t=e.taskData,n=e.filterBtnsData,o=t.filter((function(e){return e.completed})).length,i=t.length-o;return Object(a.jsxs)("section",{className:"todoapp",children:[Object(a.jsxs)("header",{className:"header",children:[Object(a.jsx)("h1",{children:"todos"}),Object(a.jsx)(g,{onItemAdded:this.addItem})]}),Object(a.jsxs)("section",{className:"main",children:[Object(a.jsx)(h,{tasks:t,onDeleted:this.deleteItem,onToggleCompleted:this.onToggleCompleted,onToggleEditing:this.onToggleEditing,filterBtns:n,onKeyCodeDown:this.onKeyCodeDown}),Object(a.jsx)(k,{taskCount:i,onClearCompleted:this.onClearCompleted,filterBtns:n,onToggleActive:this.onToggleActive})]})]})}}]),n}(o.Component);c.a.render(Object(a.jsx)(C,{}),document.querySelector("#root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.73c49cbf.chunk.js.map