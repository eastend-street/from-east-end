(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return g});n(38);var a=n(8),r=n.n(a),i=n(0),o=n.n(i),c=n(162),l=n.n(c),u=n(148),s=n(164),p=n.n(s),d=n(159),m=n(161),f=n(147),h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=p()(this.props,"data.site.siteMetadata.title"),n=e.excerpt,a=this.props.pageContext,r=a.previous,i=a.next;return o.a.createElement(m.a,{location:this.props.location},o.a.createElement(l.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:n}],title:e.frontmatter.title+" | "+t}),o.a.createElement("h1",null,e.frontmatter.title),o.a.createElement("p",{style:Object.assign({},Object(f.b)(-.2),{display:"block",marginBottom:Object(f.a)(1),marginTop:Object(f.a)(-1)})},e.frontmatter.date),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),o.a.createElement("hr",{style:{marginBottom:Object(f.a)(1)}}),o.a.createElement(d.a,null),o.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},o.a.createElement("li",null,r&&o.a.createElement(u.Link,{to:r.fields.slug,rel:"prev"},"← ",r.frontmatter.title)),o.a.createElement("li",null,i&&o.a.createElement(u.Link,{to:i.fields.slug,rel:"next"},i.frontmatter.title," →"))))},t}(o.a.Component);t.default=h;var g="3804820323"},147:function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"b",function(){return u});var a=n(170),r=n.n(a),i=n(171),o=n.n(i);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var c=new r.a(o.a);var l=c.rhythm,u=c.scale},148:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),i=n(5),o=n.n(i),c=n(146),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var u=n(27);n.d(t,"waitForRouteChange",function(){return u.c});var s=n(149),p=n.n(s);n.d(t,"PageRenderer",function(){return p.a});var d=n(40);n.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),f=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},149:function(e,t,n){var a;e.exports=(a=n(154))&&a.default||a},154:function(e,t,n){"use strict";n.r(t);n(38);var a=n(0),r=n.n(a),i=n(5),o=n.n(i),c=n(56),l=n(1),u=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({key:t.pathname,location:t,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},159:function(e,t,n){"use strict";var a=n(8),r=n.n(a),i=n(0),o=n.n(i),c=(n(168),n(169),n(160)),l=n.n(c),u=n(147),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement("div",{style:{display:"flex",marginBottom:Object(u.a)(2.5)}},o.a.createElement("img",{src:l.a,alt:"Kyle Mathews",style:{marginRight:Object(u.a)(.5),marginBottom:0,width:Object(u.a)(2),height:Object(u.a)(2)}}),o.a.createElement("p",{style:{marginTop:10}},"Front-end engineer / living in Tokyo, Japan"," "))},t}(o.a.Component);t.a=s},160:function(e,t,n){e.exports=n.p+"static/profile-pic-2a18670919fddb79aad350c2987157fa.jpg"},161:function(e,t,n){"use strict";n(38);var a=n(8),r=n.n(a),i=n(0),o=n.n(i),c=n(148),l=n(147),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props,n=t.location,a=t.children;return e="/"===n.pathname?o.a.createElement("h1",{style:Object.assign({},Object(l.b)(1.5),{marginBottom:Object(l.a)(1.5),marginTop:0})},o.a.createElement(c.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},"From East-end")):o.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:Object(l.a)(-1)}},o.a.createElement(c.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},"From East-end")),o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(24),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)}},e,a)},t}(o.a.Component);t.a=u}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-ddbfc080b023bc089452.js.map