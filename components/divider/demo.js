webpackJsonp([48],{1706:function(n,a,s){n.exports={horizontal:s(2074),vertical:s(2075)}},2074:function(n,a,s){n.exports={content:{"zh-CN":[["p","\u9ed8\u8ba4\u4e3a\u6c34\u5e73\u5206\u5272\u7ebf\uff0c\u53ef\u5728\u4e2d\u95f4\u52a0\u5165\u6587\u5b57\u3002"]],"en-US":[["p","Divider default type is ",["code","horizontal"],". Support inner text inside Divider."]]},meta:{order:0,title:{"zh-CN":"\u6c34\u5e73\u5206\u5272\u7ebf","en-US":"Horizontal"},filename:"components/divider/demo/horizontal.md",id:"components-divider-demo-horizontal"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Divider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet<span class="token punctuation">,</span> consectetur adipiscing elit<span class="token punctuation">.</span> Sed nonne merninisti licere mihi ista probare<span class="token punctuation">,</span> quae sunt a te dicta<span class="token operator">?</span> Refert tamen<span class="token punctuation">,</span> quo modo<span class="token punctuation">.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Divider</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet<span class="token punctuation">,</span> consectetur adipiscing elit<span class="token punctuation">.</span> Sed nonne merninisti licere mihi ista probare<span class="token punctuation">,</span> quae sunt a te dicta<span class="token operator">?</span> Refert tamen<span class="token punctuation">,</span> quo modo<span class="token punctuation">.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Divider</span><span class="token punctuation">></span></span>With Text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Divider</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet<span class="token punctuation">,</span> consectetur adipiscing elit<span class="token punctuation">.</span> Sed nonne merninisti licere mihi ista probare<span class="token punctuation">,</span> quae sunt a te dicta<span class="token operator">?</span> Refert tamen<span class="token punctuation">,</span> quo modo<span class="token punctuation">.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Divider</span> <span class="token attr-name">dashed</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet<span class="token punctuation">,</span> consectetur adipiscing elit<span class="token punctuation">.</span> Sed nonne merninisti licere mihi ista probare<span class="token punctuation">,</span> quae sunt a te dicta<span class="token operator">?</span> Refert tamen<span class="token punctuation">,</span> quo modo<span class="token punctuation">.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Divider</span> <span class="token attr-name">orientation</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>left<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>With Text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Divider</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet<span class="token punctuation">,</span> consectetur adipiscing elit<span class="token punctuation">.</span> Sed nonne merninisti licere mihi ista probare<span class="token punctuation">,</span> quae sunt a te dicta<span class="token operator">?</span> Refert tamen<span class="token punctuation">,</span> quo modo<span class="token punctuation">.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Divider</span> <span class="token attr-name">orientation</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>right<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>With Text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Divider</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet<span class="token punctuation">,</span> consectetur adipiscing elit<span class="token punctuation">.</span> Sed nonne merninisti licere mihi ista probare<span class="token punctuation">,</span> quae sunt a te dicta<span class="token operator">?</span> Refert tamen<span class="token punctuation">,</span> quo modo<span class="token punctuation">.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(0),a=(s(4),s(32));return n.createElement("div",null,n.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo."),n.createElement(a.Divider,null),n.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo."),n.createElement(a.Divider,null,"With Text"),n.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo."),n.createElement(a.Divider,{dashed:!0}),n.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo."),n.createElement(a.Divider,{orientation:"left"},"With Text"),n.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo."),n.createElement(a.Divider,{orientation:"right"},"With Text"),n.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo."))}}},2075:function(n,a,s){n.exports={content:{"zh-CN":[["p","\u4f7f\u7528 ",["code",'type="vertical"']," \u8bbe\u7f6e\u4e3a\u884c\u5185\u7684\u5782\u76f4\u5206\u5272\u7ebf\u3002"]],"en-US":[["p","Use ",["code",'type="vertical"']," make it vertical."]]},meta:{order:1,title:{"zh-CN":"\u5782\u76f4\u5206\u5272\u7ebf","en-US":"Vertical"},filename:"components/divider/demo/vertical.md",id:"components-divider-demo-vertical"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Divider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    Text\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Divider</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Link<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Divider</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Link<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(0),a=(s(4),s(32));return n.createElement("div",null,"Text",n.createElement(a.Divider,{type:"vertical"}),n.createElement("a",{href:"#"},"Link"),n.createElement(a.Divider,{type:"vertical"}),n.createElement("a",{href:"#"},"Link"))}}}});