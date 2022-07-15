import{o as t,c as a,b as e,F as p,d as b,e as y,i as h,t as d,u as C,g as x,h as s,a as N}from"./index.5123f132.js";import{_ as B}from"./ShowRating.162a660a.js";const L={class:"overflow-hidden"},j=["src","alt"],E={__name:"ImagePortrait",props:{imageUrl:String,alt:String},setup(_){return(w,v)=>(t(),a("div",L,[e("img",{src:_.imageUrl,alt:_.alt,class:"w-12 h-12 object-cover rounded-full",height:"80",width:"80"},null,8,j)]))}},H=e("h2",{class:"pt-4"}," Cast ",-1),T={class:"md:grid md:grid-cols-2"},A={class:"flex items-center space-y-2 space-x-2"},F={class:"font-bold"},I={class:"font-light"},V={__name:"Cast",props:{cast:Array},setup(_){return(w,v)=>(t(),a(p,null,[H,e("div",T,[(t(!0),a(p,null,b(_.cast,r=>(t(),a("div",A,[r.character.image?(t(),y(E,{key:0,imageUrl:r.character.image.medium,alt:r.person.name},null,8,["imageUrl","alt"])):h("",!0),e("div",null,[e("div",F,d(r.person.name),1),e("div",I,d(r.character.name),1)])]))),256))])],64))}},z={class:"flex items-center space-x-2 pt-4"},D=e("h2",null," Episodes ",-1),J={class:"text-gray-300"},M={class:"space-x-2"},P={class:"text-lg font-semibold"},R={class:"text-gray-300"},q={class:"px-4 py-1"},G={class:"font-semibold"},K={class:"space-y-2 sm:space-y-0 sm:flex sm:space-x-2"},Q=["src","alt"],W={class:"flex flex-col justify-between"},X=["innerHTML"],Y={__name:"Episodes",props:{numberOfEpisodes:Number,episodesBySeason:Array},setup(_){return(w,v)=>(t(),a(p,null,[e("span",z,[D,e("span",J," ("+d(_.numberOfEpisodes)+")",1)]),(t(!0),a(p,null,b(_.episodesBySeason,(r,k)=>{var f;return t(),a("details",null,[e("summary",M,[e("span",P,"Season "+d(k+1),1),e("span",R,"("+d((f=r[0])==null?void 0:f.airdate.slice(0,4))+")",1)]),(t(!0),a(p,null,b(r,u=>{var g;return t(),a("details",q,[e("summary",G,d(u.number)+". "+d(u.name),1),e("div",K,[e("img",{src:(g=u.image)==null?void 0:g.medium,alt:u.summary,width:"250",height:"140",class:"rounded-md object-contain"},null,8,Q),e("div",W,[e("span",{class:"text-sm sm:text-base",innerHTML:u.summary},null,8,X),u.rating.average?(t(),y(B,{key:0,rating:u.rating.average},null,8,["rating"])):h("",!0)])])])}),256))])}),256))],64))}},Z={key:0,class:"overflow-hidden space-y-2"},ee={class:"pt-4 md:pt-6"},se={class:"flex justify-between"},te={class:"pt-1 space-x-2 divide-x divide-gray-300"},ne={class:"pl-2"},ae={class:"flex space-x-4"},oe=["href"],re=["href"],ie={key:0},le=["srcset","src","alt"],ce=["src","alt"],de={class:"space-x-1 py-2"},_e={class:"rounded-lg border border-white px-2"},ue=["innerHTML"],me={key:2,class:"pt-2"},he={key:0},pe={key:1},ge={class:"flex space-x-2 pt-2"},fe={class:"flex space-x-2"},xe={class:"self-center"},ye={class:"font-bold"},$e={__name:"Show",props:{id:String,slug:String},setup(_){const v=`https://api.tvmaze.com/shows/${_.id}`,{data:r,error:k}=C(`${v}?embed[]=cast&embed[]=crew&embed[]=episodes&embed[]=images`),f=x(()=>{var i,l;const n=(l=(i=r.value)==null?void 0:i._embedded)==null?void 0:l.images;if(!!n){for(let c=0;c<n.length;c++)if(n[c].type==="background")return n[c].resolutions.original.url;return!1}}),u=x(()=>{var i;const n=(i=r.value)==null?void 0:i._embedded.cast;return n||[]}),g=x(()=>{var i;const n=(i=r.value)==null?void 0:i._embedded.crew;return n?n.filter(l=>l.type==="Creator"):[]}),S=x(()=>{var l;let n=(l=r.value)==null?void 0:l._embedded.episodes;return n?(n=JSON.parse(JSON.stringify(n)),U(n)):[]}),o=x(()=>{const n=r.value;return n||null}),U=n=>{let i=0,l=[];const c=m=>{for(let $=0;$<m.length;$++)if(m[$].season!==i+1){const O=m.splice(0,m.indexOf(m[$]));return l.push(O),i+=1,c(m)}i===0&&l.push(m)};return c(n),l};return(n,i)=>{var l;return s(o)?(t(),a("div",Z,[e("h1",ee,d(s(o).name),1),e("div",se,[e("span",te,[e("span",null,d((l=s(o).premiered)==null?void 0:l.slice(0,4))+"\u2013"+d(s(o).ended?s(o).ended.slice(0,4):""),1),e("span",ne,d(s(o).averageRuntime)+"m",1)]),e("span",ae,[s(o).rating.average?(t(),y(B,{key:0,rating:s(o).rating.average,class:"inline-flex"},null,8,["rating"])):h("",!0),e("a",{class:"link-base pt-1",href:`https://imdb.com/title/${s(o).externals.imdb}`,target:"_blank"}," IMDb ",8,oe),e("a",{class:"link-base pt-1",href:`https://thetvdb.com/?id=${s(o).externals.thetvdb}&tab=series`,target:"_blank"}," tvdb ",8,re)])]),s(f)===!1&&s(o).image?(t(),a("figure",ie,[e("img",{srcset:`${s(o).image.medium} 210w,
                    ${s(o).image.original} 680w`,sizes:"(max-width: 767px) 210px, 680px",src:s(o).image.original,alt:s(o).name,class:"rounded-lg"},null,8,le)])):(t(),a("img",{key:1,src:s(f),alt:s(o).name,width:"976",height:"549",class:"min-w-full aspect-[16/9] rounded-lg"},null,8,ce)),e("div",de,[(t(!0),a(p,null,b(s(o).genres,c=>(t(),a("span",_e,d(c),1))),256))]),e("div",{innerHTML:s(o).summary},null,8,ue),s(g)?(t(),a("div",me,[s(g).length>1?(t(),a("h2",he,"Creators")):(t(),a("h2",pe," Creator")),e("div",ge,[(t(!0),a(p,null,b(s(g),c=>(t(),a("span",fe,[c.person.image?(t(),y(E,{key:0,imageUrl:c.person.image.medium,alt:c.person.name},null,8,["imageUrl","alt"])):h("",!0),e("span",xe,[e("span",ye,d(c.person.name),1)])]))),256))])])):h("",!0),s(S)[0].length?(t(),y(Y,{key:3,numberOfEpisodes:s(r)._embedded.episodes.length,episodesBySeason:s(S)},null,8,["numberOfEpisodes","episodesBySeason"])):h("",!0),N(V,{cast:s(u)},null,8,["cast"])])):h("",!0)}}};export{$e as default};
