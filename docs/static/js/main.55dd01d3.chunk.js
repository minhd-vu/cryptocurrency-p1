(this["webpackJsonpnft-minter"]=this["webpackJsonpnft-minter"]||[]).push([[0],{267:function(e,t,n){},268:function(e,t,n){},292:function(e){e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"string","name":"tokenURI","type":"string"}],"name":"mintNFT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},306:function(e,t){},309:function(e,t){},312:function(e,t){},316:function(e,t){},343:function(e,t){},345:function(e,t){},354:function(e,t){},356:function(e,t){},366:function(e,t){},368:function(e,t){},484:function(e,t){},486:function(e,t){},493:function(e,t){},494:function(e,t){},597:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),s=n(248),i=n.n(s),u=(n(267),n(268),n(30)),o=n(14),c=n(23),p=n.n(c);n(142).config();var d=n(272),l=function(){var e=Object(u.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.pinata.cloud/pinning/pinJSONToIPFS",e.abrupt("return",d.post("https://api.pinata.cloud/pinning/pinJSONToIPFS",t,{headers:{pinata_api_key:"43ced222530625ce22ca",pinata_secret_api_key:"7037eb2ad9f56e184b7aa9f3ee8cbfbf5946c0246fceb6e8cb776853e07aab92"}}).then((function(e){return{success:!0,pinataUrl:"https://gateway.pinata.cloud/ipfs/"+e.data.IpfsHash}})).catch((function(e){return console.log(e),{success:!1,message:e.message}})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=n(15);n(142).config();var m=n(292),b="0x4C4a07F737Bf57F6632B6CAB089B78f62385aCaE",f=(0,n(598).createAlchemyWeb3)("https://eth-ropsten.alchemyapi.io/v2/gi-4B6tJV6tE5VERosCQ__K8DrfzI_-M"),h=function(){var e=Object(u.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=14;break}return e.prev=1,e.next=4,window.ethereum.request({method:"eth_requestAccounts"});case 4:return t=e.sent,n={status:"\ud83d\udc46\ud83c\udffd Write a message in the text-field above.",address:t[0]},e.abrupt("return",n);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",{address:"",status:"\ud83d\ude25 "+e.t0.message});case 12:e.next=15;break;case 14:return e.abrupt("return",{address:"",status:Object(y.jsx)("span",{children:Object(y.jsxs)("p",{children:[" ","\ud83e\udd8a"," ",Object(y.jsx)("a",{target:"_blank",href:"https://metamask.io/download.html",rel:"noreferrer",children:"You must install Metamask, a virtual Ethereum wallet, in your browser."})]})})});case 15:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(u.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=17;break}return e.prev=1,e.next=4,window.ethereum.request({method:"eth_accounts"});case 4:if(!((t=e.sent).length>0)){e.next=9;break}return e.abrupt("return",{address:t[0],status:"\ud83d\udc46\ud83c\udffd Write a message in the text-field above."});case 9:return e.abrupt("return",{address:"",status:"\ud83e\udd8a Connect to Metamask using the top right button."});case 10:e.next=15;break;case 12:return e.prev=12,e.t0=e.catch(1),e.abrupt("return",{address:"",status:"\ud83d\ude25 "+e.t0.message});case 15:e.next=18;break;case 17:return e.abrupt("return",{address:"",status:Object(y.jsx)("span",{children:Object(y.jsxs)("p",{children:[" ","\ud83e\udd8a"," ",Object(y.jsx)("a",{target:"_blank",href:"https://metamask.io/download.html",rel:"noreferrer",children:"You must install Metamask, a virtual Ethereum wallet, in your browser."})]})})});case 18:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}();function x(e){return new Promise((function(t,n){return navigator.geolocation.getCurrentPosition(t,n,e)}))}var g=function(){var e=Object(u.a)(p.a.mark((function e(t,n,a){var r,s,i,u,o,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t.trim()&&""!==n.trim()&&""!==a.trim()){e.next=2;break}return e.abrupt("return",{success:!1,status:"\u2757Please make sure all fields are completed before minting."});case 2:return(r={}).name=n,r.image=t,r.description=a,e.next=8,x();case 8:return s=e.sent,r.location={latitude:s.coords.latitude,longitude:s.coords.longitude},e.next=12,l(r);case 12:if((i=e.sent).success){e.next=15;break}return e.abrupt("return",{success:!1,status:"\ud83d\ude22 Something went wrong while uploading your tokenURI."});case 15:return u=i.pinataUrl,e.next=18,new f.eth.Contract(m,b);case 18:return window.contract=e.sent,o={to:b,from:window.ethereum.selectedAddress,data:window.contract.methods.mintNFT(window.ethereum.selectedAddress,u).encodeABI()},e.prev=20,e.next=23,window.ethereum.request({method:"eth_sendTransaction",params:[o]});case 23:return c=e.sent,e.abrupt("return",{success:!0,status:"\u2705 Check out your transaction on Etherscan: https://ropsten.etherscan.io/tx/"+c});case 27:return e.prev=27,e.t0=e.catch(20),e.abrupt("return",{success:!1,status:"\ud83d\ude25 Something went wrong: "+e.t0.message});case 30:case"end":return e.stop()}}),e,null,[[20,27]])})));return function(t,n,a){return e.apply(this,arguments)}}(),v=n(82),w=function(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),r=n[0],s=n[1],i=Object(a.useState)(""),c=Object(o.a)(i,2),d=c[0],l=c[1],m=Object(a.useState)(""),b=Object(o.a)(m,2),f=b[0],x=b[1],w=Object(a.useState)(""),O=Object(o.a)(w,2),T=O[0],k=O[1],M=Object(a.useState)(""),I=Object(o.a)(M,2),C=I[0],S=I[1];function A(){window.ethereum?window.ethereum.on("accountsChanged",(function(e){e.length>0?(s(e[0]),l("\ud83d\udc46\ud83c\udffd Write a message in the text-field above.")):(s(""),l("\ud83e\udd8a Connect to Metamask using the top right button."))})):l(Object(y.jsxs)("p",{children:[" ","\ud83e\udd8a"," ",Object(y.jsx)("a",{target:"_blank",href:"https://metamask.io/download.html",rel:"noreferrer",children:"You must install Metamask, a virtual Ethereum wallet, in your browser."})]}))}Object(a.useEffect)((function(){function e(){return e=Object(u.a)(p.a.mark((function e(){var t,n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:t=e.sent,n=t.address,a=t.status,s(n),l(a),A();case 8:case"end":return e.stop()}}),e)}))),e.apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var F=function(){var e=Object(u.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:t=e.sent,l(t.status),s(t.address);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(u.a)(p.a.mark((function e(){var t,n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(C,f,T);case 2:t=e.sent,n=t.success,a=t.status,l(a),n&&(x(""),k(""),S(""));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(y.jsxs)("div",{className:"Minter",children:[Object(y.jsx)(v.b,{to:"/map",children:Object(y.jsx)("button",{id:"nftButton",children:"NFT Map"})}),Object(y.jsx)("button",{id:"walletButton",onClick:F,children:r.length>0?"Connected: "+String(r).substring(0,6)+"..."+String(r).substring(38):Object(y.jsx)("span",{children:"Connect Wallet"})}),Object(y.jsx)("br",{}),Object(y.jsx)("h1",{id:"title",children:"\ud83e\uddd9\u200d\u2642\ufe0f Alchemy NFT Minter"}),Object(y.jsx)("p",{children:'Simply add your asset\'s link, name, and description, then press "Mint."'}),Object(y.jsxs)("form",{children:[Object(y.jsx)("h2",{children:"\ud83d\uddbc Link to asset: "}),Object(y.jsx)("input",{type:"text",placeholder:"e.g. https://gateway.pinata.cloud/ipfs/<hash>",onChange:function(e){return S(e.target.value)}}),Object(y.jsx)("h2",{children:"\ud83e\udd14 Name: "}),Object(y.jsx)("input",{type:"text",placeholder:"e.g. My first NFT!",onChange:function(e){return x(e.target.value)}}),Object(y.jsx)("h2",{children:"\u270d\ufe0f Description: "}),Object(y.jsx)("input",{type:"text",placeholder:"e.g. Even cooler than cryptokitties ;)",onChange:function(e){return k(e.target.value)}})]}),Object(y.jsx)("button",{id:"mintButton",onClick:_,children:"Mint NFT"}),Object(y.jsx)("p",{id:"status",style:{color:"red"},children:d})]})},O=n(140),T=n(141),k=function(e){var t=e.size,n=void 0===t?50:t,a=e.onClick,r=e.image;return Object(y.jsx)("img",{src:r,alt:"Pin",height:n,viewBox:"0 0 24 24",style:{cursor:"pointer",transform:"translate(".concat(-n/2,"px,").concat(-n,"px)")},onClick:a})},M=function(e){var t=Object(a.useState)({latitude:38.8298,longitude:-77.3074,zoom:8}),n=Object(o.a)(t,2),r=n[0],s=n[1],i=Object(a.useState)([]),c=Object(o.a)(i,2),d=c[0],l=c[1],m=Object(a.useRef)();Object(a.useEffect)((function(){function e(){return e=Object(u.a)(p.a.mark((function e(){var t,n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[],n=3669;case 2:return e.next=4,f.alchemy.getNftMetadata({contractAddress:"0x4c4a07f737bf57f6632b6cab089b78f62385acae",tokenId:n++});case 4:(a=e.sent).metadata.location&&t.push(a.metadata);case 6:if(!a.error){e.next=2;break}case 7:l(t);case 8:case"end":return e.stop()}}),e)}))),e.apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var b=Object(a.useCallback)((function(e){return s(e)}),[]);return Object(y.jsx)("div",{style:{height:"100vh"},children:Object(y.jsx)(T.b,Object(O.a)(Object(O.a)({},r),{},{ref:m,width:"100%",height:"100%",mapStyle:"mapbox://styles/mapbox/light-v9",onViewportChange:b,mapboxApiAccessToken:"pk.eyJ1IjoibWluaGQtdnUiLCJhIjoiY2trMGZyY2JoMGg2MDJ1bnk3MTR4ZWp3NiJ9.yZtpDtTySV57_Mc680vzbA",children:d.map((function(e,t){return Object(y.jsx)(T.a,{latitude:e.location.latitude,longitude:e.location.longitude,children:Object(y.jsx)(k,{image:e.image})},t)}))}))})},I=n(17);var C=function(){return Object(y.jsx)("div",{className:"App",children:Object(y.jsxs)(I.c,{children:[Object(y.jsx)(I.a,{path:"/map",element:Object(y.jsx)(M,{})}),Object(y.jsx)(I.a,{exact:!0,path:"",element:Object(y.jsx)(w,{})})]})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,602)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),s(e),i(e)}))};i.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(v.a,{basename:"/".concat("/cryptocurrency-p1"),children:Object(y.jsx)(C,{})})}),document.getElementById("root")),S()}},[[597,1,2]]]);
//# sourceMappingURL=main.55dd01d3.chunk.js.map