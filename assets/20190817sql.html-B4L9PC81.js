import{_ as n,r as a,o as t,c as e,a as o,b as p}from"./app-B6NiJo-f.js";const l={},c=p(`<p>最近有这样一个需求,按照用户输入的顺序从数据库中取出数据。但是默认sql查询会有自动排序的功能,导致查询的结果是按照数字的顺序出现。百度查询后发现解决办法，在此记录一下sql语句写法</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="line"><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> 表名 <span class="token keyword">WHERE</span> 关键字 <span class="token operator">IN</span><span class="token punctuation">(</span>数字<span class="token number">1</span><span class="token punctuation">,</span> 数字<span class="token number">2</span><span class="token punctuation">,</span> 数字<span class="token number">3</span><span class="token punctuation">,</span> 数字<span class="token number">4</span><span class="token punctuation">,</span> 数字<span class="token number">5</span><span class="token punctuation">)</span>  <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> INSTR<span class="token punctuation">(</span><span class="token string">&#39;,数字1, 数字2, 数字3, 数字4, 数字5,&#39;</span><span class="token punctuation">,</span>CONCAT<span class="token punctuation">(</span><span class="token string">&#39;,&#39;</span><span class="token punctuation">,</span>关键字<span class="token punctuation">,</span><span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2);function i(r,u){const s=a("Boxx");return t(),e("div",null,[o(s),c])}const d=n(l,[["render",i],["__file","20190817sql.html.vue"]]),m=JSON.parse('{"path":"/blogs/technology/20190817sql.html","title":"sql语句不排序,按照in语句的顺序返回结果","lang":"en-US","frontmatter":{"title":"sql语句不排序,按照in语句的顺序返回结果","author":"Rain","tags":["PHP","sql"],"categories":["technology"],"date":"2019-08-17 13:08"},"headers":[],"git":{"createdTime":1717432393000,"updatedTime":1717432393000,"contributors":[{"name":"Rain","email":"smalltime153@gmail.com","commits":1}]},"filePathRelative":"blogs/technology/20190817sql.md"}');export{d as comp,m as data};