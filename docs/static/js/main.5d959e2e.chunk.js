(this["webpackJsonpnft-minter"]=this["webpackJsonpnft-minter"]||[]).push([[0],{248:function(e,t,n){},249:function(e,t,n){},273:function(e){e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"string","name":"tokenURI","type":"string"}],"name":"mintNFT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},287:function(e,t){},290:function(e,t){},293:function(e,t){},297:function(e,t){},324:function(e,t){},326:function(e,t){},335:function(e,t){},337:function(e,t){},347:function(e,t){},349:function(e,t){},465:function(e,t){},467:function(e,t){},474:function(e,t){},475:function(e,t){},576:function(e,t,n){"use strict";n.r(t);var a=n(4),r=n.n(a),s=n(230),i=n.n(s),u=(n(248),n(249),n(23)),o=n(25),p=n(16),c=n.n(p);n(125).config();var d=n(253),l=function(){var e=Object(u.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.pinata.cloud/pinning/pinJSONToIPFS",e.abrupt("return",d.post("https://api.pinata.cloud/pinning/pinJSONToIPFS",t,{headers:{pinata_api_key:"43ced222530625ce22ca",pinata_secret_api_key:"7037eb2ad9f56e184b7aa9f3ee8cbfbf5946c0246fceb6e8cb776853e07aab92"}}).then((function(e){return{success:!0,pinataUrl:"https://gateway.pinata.cloud/ipfs/"+e.data.IpfsHash}})).catch((function(e){return console.log(e),{success:!1,message:e.message}})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=n(9);n(125).config();var m=n(273),f="0x4C4a07F737Bf57F6632B6CAB089B78f62385aCaE",b=(0,n(577).createAlchemyWeb3)("https://eth-ropsten.alchemyapi.io/v2/gi-4B6tJV6tE5VERosCQ__K8DrfzI_-M"),h=function(){var e=Object(u.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=14;break}return e.prev=1,e.next=4,window.ethereum.request({method:"eth_requestAccounts"});case 4:return t=e.sent,n={status:"\ud83d\udc46\ud83c\udffd Write a message in the text-field above.",address:t[0]},e.abrupt("return",n);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",{address:"",status:"\ud83d\ude25 "+e.t0.message});case 12:e.next=15;break;case 14:return e.abrupt("return",{address:"",status:Object(y.jsx)("span",{children:Object(y.jsxs)("p",{children:[" ","\ud83e\udd8a"," ",Object(y.jsx)("a",{target:"_blank",href:"https://metamask.io/download.html",rel:"noreferrer",children:"You must install Metamask, a virtual Ethereum wallet, in your browser."})]})})});case 15:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(u.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=17;break}return e.prev=1,e.next=4,window.ethereum.request({method:"eth_accounts"});case 4:if(!((t=e.sent).length>0)){e.next=9;break}return e.abrupt("return",{address:t[0],status:"\ud83d\udc46\ud83c\udffd Write a message in the text-field above."});case 9:return e.abrupt("return",{address:"",status:"\ud83e\udd8a Connect to Metamask using the top right button."});case 10:e.next=15;break;case 12:return e.prev=12,e.t0=e.catch(1),e.abrupt("return",{address:"",status:"\ud83d\ude25 "+e.t0.message});case 15:e.next=18;break;case 17:return e.abrupt("return",{address:"",status:Object(y.jsx)("span",{children:Object(y.jsxs)("p",{children:[" ","\ud83e\udd8a"," ",Object(y.jsx)("a",{target:"_blank",href:"https://metamask.io/download.html",rel:"noreferrer",children:"You must install Metamask, a virtual Ethereum wallet, in your browser."})]})})});case 18:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}();function x(e){return new Promise((function(t,n){return navigator.geolocation.getCurrentPosition(t,n,e)}))}var w=function(){var e=Object(u.a)(c.a.mark((function e(t,n,a){var r,s,i,u,o,p;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t.trim()&&""!==n.trim()&&""!==a.trim()){e.next=2;break}return e.abrupt("return",{success:!1,status:"\u2757Please make sure all fields are completed before minting."});case 2:return(r={}).name=n,r.image=t,r.description=a,e.next=8,x();case 8:return s=e.sent,r.location={latitude:s.coords.latitude,longitude:s.coords.longitude},e.next=12,l(r);case 12:if((i=e.sent).success){e.next=15;break}return e.abrupt("return",{success:!1,status:"\ud83d\ude22 Something went wrong while uploading your tokenURI."});case 15:return u=i.pinataUrl,e.next=18,new b.eth.Contract(m,f);case 18:return window.contract=e.sent,o={to:f,from:window.ethereum.selectedAddress,data:window.contract.methods.mintNFT(window.ethereum.selectedAddress,u).encodeABI()},e.prev=20,e.next=23,window.ethereum.request({method:"eth_sendTransaction",params:[o]});case 23:return p=e.sent,e.abrupt("return",{success:!0,status:"\u2705 Check out your transaction on Etherscan: https://ropsten.etherscan.io/tx/"+p});case 27:return e.prev=27,e.t0=e.catch(20),e.abrupt("return",{success:!1,status:"\ud83d\ude25 Something went wrong: "+e.t0.message});case 30:case"end":return e.stop()}}),e,null,[[20,27]])})));return function(t,n,a){return e.apply(this,arguments)}}(),v=function(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),r=n[0],s=n[1],i=Object(a.useState)(""),p=Object(o.a)(i,2),d=p[0],l=p[1],m=Object(a.useState)(""),f=Object(o.a)(m,2),b=f[0],x=f[1],v=Object(a.useState)(""),g=Object(o.a)(v,2),T=g[0],O=g[1],k=Object(a.useState)(""),M=Object(o.a)(k,2),I=M[0],C=M[1];function F(){window.ethereum?window.ethereum.on("accountsChanged",(function(e){e.length>0?(s(e[0]),l("\ud83d\udc46\ud83c\udffd Write a message in the text-field above.")):(s(""),l("\ud83e\udd8a Connect to Metamask using the top right button."))})):l(Object(y.jsxs)("p",{children:[" ","\ud83e\udd8a"," ",Object(y.jsx)("a",{target:"_blank",href:"https://metamask.io/download.html",rel:"noreferrer",children:"You must install Metamask, a virtual Ethereum wallet, in your browser."})]}))}Object(a.useEffect)((function(){function e(){return e=Object(u.a)(c.a.mark((function e(){var t,n,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:t=e.sent,n=t.address,a=t.status,s(n),l(a),F();case 8:case"end":return e.stop()}}),e)}))),e.apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var S=function(){var e=Object(u.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:t=e.sent,l(t.status),s(t.address);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(u.a)(c.a.mark((function e(){var t,n,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(I,b,T);case 2:t=e.sent,n=t.success,a=t.status,l(a),n&&(x(""),O(""),C(""));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(y.jsxs)("div",{className:"Minter",children:[Object(y.jsx)("button",{id:"walletButton",onClick:S,children:r.length>0?"Connected: "+String(r).substring(0,6)+"..."+String(r).substring(38):Object(y.jsx)("span",{children:"Connect Wallet"})}),Object(y.jsx)("br",{}),Object(y.jsx)("h1",{id:"title",children:"\ud83e\uddd9\u200d\u2642\ufe0f Alchemy NFT Minter"}),Object(y.jsx)("p",{children:'Simply add your asset\'s link, name, and description, then press "Mint."'}),Object(y.jsxs)("form",{children:[Object(y.jsx)("h2",{children:"\ud83d\uddbc Link to asset: "}),Object(y.jsx)("input",{type:"text",placeholder:"e.g. https://gateway.pinata.cloud/ipfs/<hash>",onChange:function(e){return C(e.target.value)}}),Object(y.jsx)("h2",{children:"\ud83e\udd14 Name: "}),Object(y.jsx)("input",{type:"text",placeholder:"e.g. My first NFT!",onChange:function(e){return x(e.target.value)}}),Object(y.jsx)("h2",{children:"\u270d\ufe0f Description: "}),Object(y.jsx)("input",{type:"text",placeholder:"e.g. Even cooler than cryptokitties ;)",onChange:function(e){return O(e.target.value)}})]}),Object(y.jsx)("button",{id:"mintButton",onClick:A,children:"Mint NFT"}),Object(y.jsx)("p",{id:"status",style:{color:"red"},children:d})]})},g=function(){var e=Object(u.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.alchemy.getNftMetadata({contractAddress:"0x4c4a07f737bf57f6632b6cab089b78f62385acae",tokenId:3669});case 2:return n=e.sent,console.log(n),e.abrupt("return",Object(y.jsx)(y.Fragment,{}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=g,O=n(11);var k=function(){return Object(y.jsx)("div",{className:"App",children:Object(y.jsxs)(O.c,{children:[Object(y.jsx)(O.a,{path:"/map",element:Object(y.jsx)(T,{})}),Object(y.jsx)(O.a,{exact:!0,path:"",element:Object(y.jsx)(v,{})})]})})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,581)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),s(e),i(e)}))},I=n(122);i.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(I.a,{basename:"/".concat("/cryptocurrency-p1"),children:Object(y.jsx)(k,{})})}),document.getElementById("root")),M()}},[[576,1,2]]]);
//# sourceMappingURL=main.5d959e2e.chunk.js.map