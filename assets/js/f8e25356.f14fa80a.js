"use strict";(self.webpackChunkstade_phenolo_documentation=self.webpackChunkstade_phenolo_documentation||[]).push([[989],{2649:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"partie-1-detection-stades-phenologiques","title":"\ud83c\udf31 Partie 1 : D\xe9tection des Stades Ph\xe9nologiques","description":"\ud83e\udde0 Description du mod\xe8le CNN","source":"@site/docs/partie-1-detection-stades-phenologiques.md","sourceDirName":".","slug":"/partie-1-detection-stades-phenologiques","permalink":"/stade-pheno/docs/partie-1-detection-stades-phenologiques","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Introduction","permalink":"/stade-pheno/docs/"},"next":{"title":"\ud83c\udf4a Partie 2 : Pr\xe9diction du Rendement avec YOLO","permalink":"/stade-pheno/docs/partie-2-prediction-rendement-avec-yolo"}}');var r=t(4848),i=t(8453);const o={},l="\ud83c\udf31 Partie 1 : D\xe9tection des Stades Ph\xe9nologiques",d={},a=[{value:"\ud83e\udde0 Description du mod\xe8le CNN",id:"-description-du-mod\xe8le-cnn",level:2},{value:"\ud83d\udd0d Architecture du mod\xe8le :",id:"-architecture-du-mod\xe8le-",level:3},{value:"\u2699\ufe0f Pr\xe9traitement des donn\xe9es",id:"\ufe0f-pr\xe9traitement-des-donn\xe9es",level:2},{value:"\ud83d\ude80 Entra\xeenement et \xe9valuation",id:"-entra\xeenement-et-\xe9valuation",level:2},{value:"\u23f1\ufe0f Entra\xeenement :",id:"\ufe0f-entra\xeenement-",level:3},{value:"\ud83d\udee1\ufe0f Strat\xe9gies d&#39;\xe9valuation :",id:"\ufe0f-strat\xe9gies-d\xe9valuation-",level:3},{value:"\ud83d\udcf1 Exportation du mod\xe8le en TensorFlow Lite",id:"-exportation-du-mod\xe8le-en-tensorflow-lite",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"-partie-1--d\xe9tection-des-stades-ph\xe9nologiques",children:"\ud83c\udf31 Partie 1 : D\xe9tection des Stades Ph\xe9nologiques"})}),"\n",(0,r.jsx)(n.h2,{id:"-description-du-mod\xe8le-cnn",children:"\ud83e\udde0 Description du mod\xe8le CNN"}),"\n",(0,r.jsxs)(n.p,{children:["Le mod\xe8le ",(0,r.jsx)(n.strong,{children:"CNN"})," (Convolutional Neural Network) est con\xe7u pour d\xe9tecter les trois principaux stades ph\xe9nologiques des orangers :"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\ud83c\udf3f ",(0,r.jsx)(n.strong,{children:"Dormance"})]}),"\n",(0,r.jsxs)(n.li,{children:["\ud83c\udf43 ",(0,r.jsx)(n.strong,{children:"Fruits verts"})]}),"\n",(0,r.jsxs)(n.li,{children:["\ud83c\udf4a ",(0,r.jsx)(n.strong,{children:"Fruits m\xfbrs"})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"-architecture-du-mod\xe8le-",children:"\ud83d\udd0d Architecture du mod\xe8le :"}),"\n",(0,r.jsxs)(n.p,{children:["Le mod\xe8le repose sur ",(0,r.jsx)(n.strong,{children:"EfficientNetB0"})," comme base pour l'extraction des caract\xe9ristiques d'image. Des couches de classification personnalis\xe9es sont ajout\xe9es pour d\xe9tecter les stades ph\xe9nologiques avec une grande pr\xe9cision."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"\ufe0f-pr\xe9traitement-des-donn\xe9es",children:"\u2699\ufe0f Pr\xe9traitement des donn\xe9es"}),"\n",(0,r.jsx)(n.p,{children:"Avant d'entra\xeener le mod\xe8le, les donn\xe9es passent par plusieurs \xe9tapes de pr\xe9paration :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\ud83d\udd04 ",(0,r.jsx)(n.strong,{children:"Redimensionnement"})," des images \xe0 la taille (240, 240)"]}),"\n",(0,r.jsxs)(n.li,{children:["\ud83d\udd25 ",(0,r.jsx)(n.strong,{children:"Normalisation"})," des pixels pour am\xe9liorer la stabilit\xe9 de l'apprentissage"]}),"\n",(0,r.jsxs)(n.li,{children:["\ud83d\udd04 ",(0,r.jsx)(n.strong,{children:"Augmentation des donn\xe9es"})," pour augmenter la robustesse et \xe9viter le surapprentissage"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Les images sont ensuite divis\xe9es en trois ensembles :"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Ensemble d'entra\xeenement"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Ensemble de validation"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Ensemble de test"})}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"-entra\xeenement-et-\xe9valuation",children:"\ud83d\ude80 Entra\xeenement et \xe9valuation"}),"\n",(0,r.jsx)(n.h3,{id:"\ufe0f-entra\xeenement-",children:"\u23f1\ufe0f Entra\xeenement :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Nombre d'\xe9poques"})," : 20"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Optimiseur"})," : Adam"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Fonction de perte"})," : ",(0,r.jsx)(n.code,{children:"categorical_crossentropy"})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\ufe0f-strat\xe9gies-d\xe9valuation-",children:"\ud83d\udee1\ufe0f Strat\xe9gies d'\xe9valuation :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"EarlyStopping"})," : Arr\xeat pr\xe9coce si aucune am\xe9lioration n'est observ\xe9e"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"ModelCheckpoint"})," : Sauvegarde des meilleurs poids du mod\xe8le pour \xe9viter le surapprentissage"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"-exportation-du-mod\xe8le-en-tensorflow-lite",children:"\ud83d\udcf1 Exportation du mod\xe8le en TensorFlow Lite"}),"\n",(0,r.jsxs)(n.p,{children:["Une fois le mod\xe8le entra\xeen\xe9 et valid\xe9, il est export\xe9 au format ",(0,r.jsx)(n.strong,{children:"TensorFlow Lite"})," pour permettre son d\xe9ploiement sur des appareils mobiles et IoT."]}),"\n",(0,r.jsx)(n.hr,{})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var s=t(6540);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);