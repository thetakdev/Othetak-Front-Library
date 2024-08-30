"use strict";(self.webpackChunkthetak_library=self.webpackChunkthetak_library||[]).push([[758],{"./src/stories/modal/modal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{PrimaryModal:()=>PrimaryModal,__namedExportsOrder:()=>__namedExportsOrder,default:()=>modal_stories});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),Modal=__webpack_require__("./node_modules/@mui/material/Modal/Modal.js"),next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),common=__webpack_require__("./src/styles/common.ts"),emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),__jsx=react.createElement;function modal_Modal(_ref){let{open,onClose,style,hideBackdrop=!1,isClose=!0,closeSize=24,closeStyle,children}=_ref;return __jsx(Modal.A,{open,onClose,hideBackdrop},__jsx(EContainer,{style},isClose&&__jsx(next_image.A,{className:"close",src:"https://image.thetak.net/asset/product/images/x_close_gray_2.svg",alt:"close",width:closeSize,height:closeSize,onClick:onClose,style:closeStyle}),children))}const EContainer=emotion_styled_browser_esm.A.div`
  position: absolute;
  top: ${_ref2=>{let{style}=_ref2;return style?.top?style.top:"50%"}};
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
  background-color: ${common.l.grayScale.white};
  border-radius: 8px;
  border: 1px solid ${common.l.grayScale.gray3};

  :focus {
    outline: none;
  }

  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
`;modal_Modal.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},hideBackdrop:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isClose:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeSize:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"24",computed:!1}},closeStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};var modal_stories_jsx=react.createElement;const modal_stories={title:"components/Modal/Modal",component:modal_Modal,tags:["autodocs"]},PrimaryModal={render:()=>{const{0:visible,1:setVisible}=(0,react.useState)(!1);return modal_stories_jsx(react.Fragment,null,modal_stories_jsx("button",{onClick:()=>setVisible(!0)},"모달"),modal_stories_jsx(modal_Modal,{onClose:()=>setVisible(!1),open:visible},"내용내용"))}},__namedExportsOrder=["PrimaryModal"];PrimaryModal.parameters={...PrimaryModal.parameters,docs:{...PrimaryModal.parameters?.docs,source:{originalSource:"{\n  render: () => {\n    const [visible, setVisible] = useState(false);\n    return <>\n        <button onClick={() => setVisible(true)}>모달</button>\n        <Modal onClose={() => setVisible(false)} open={visible}>\n            내용내용\n        </Modal>\n      </>;\n  }\n}",...PrimaryModal.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=stories-modal-modal-stories.e4598c64.iframe.bundle.js.map