/*! For license information please see stories-components-Loading-Loading-mdx.340b4201.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkstorybook_project=self.webpackChunkstorybook_project||[]).push([[227,349],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>DocsRenderer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:children}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components};return new Promise(((resolve,reject)=>{__webpack_require__.e(433).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI,{context,docsParameter}))),element))).then(resolve)}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.h_});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-R4NKYYJA.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/stories/components/Loading/Loading.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Loading_stories__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/stories/components/Loading/Loading.stories.tsx");const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",h3:"h3",h4:"h4",pre:"pre",ul:"ul",li:"li"},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"loading",children:"Loading"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Xz,{of:_Loading_stories__WEBPACK_IMPORTED_MODULE_3__.Primary,sourceState:"hidden",additionalActions:[{title:"Open in Github",onClick:()=>{window.open("https://github.com/Mornieur/storybook-project.git")}}]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.h_,{title:"global/components/Loading",of:_Loading_stories__WEBPACK_IMPORTED_MODULE_3__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["O ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Loading"})," é um componente de loading reutilizável usado para ações de Loading em componentes que esperam dados para serem renderizados."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"exemplo",children:"Exemplo:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"loading-padrão",children:"Loading padrão:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:'<Loading label="Carregando" />\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"parâmetros",children:"Parâmetros"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Parâmetros disponíveis para personalizar o componente."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Ed,{of:_Loading_stories__WEBPACK_IMPORTED_MODULE_3__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Principais mudanças:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Removido import e definição do tipo Story do arquivo Loading.stories, já que não é necessário para a documentação."}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Usado component em vez de of na definição do Meta, e especificado o tipo do componente como Loading."}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Simplificado o exemplo para ficar dentro do bloco de código."}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Adicionado uma quebra de linha entre o título e o exemplo para melhorar a legibilidade."}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Usado o bloco ArgTypes para listar os parâmetros do componente, em vez de definir manualmente."}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Isso permite que as propriedades do componente sejam atualizadas automaticamente, sem precisar de uma atualização manual no MDX."}),"\n"]}),"\n"]})]})}}},"./src/stories/components/Loading/Loading.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,Secondary:()=>Secondary,StoryWithLocale:()=>StoryWithLocale,Unchecked:()=>Unchecked,default:()=>Loading_stories});var _templateObject,_templateObject2,objectDestructuringEmpty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Container=styled_components_browser_esm.ZP.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  /* width: 100%;\n  height: 100%; */\n  position: absolute;\n  overflow: hidden;\n  max-width: 300px;\n  max-height: 400px;\n  width: 100%;\n  height: 100%;\n\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: ",";\n\n  .rick-container {\n    display: flex;\n    justify-content: center;\n\n    div {\n      width: 100px;\n      height: 100px;\n      display: flex;\n      justify-content: center;\n      margin: 0 auto;\n      align-items: center;\n      position: relative;\n\n      img {\n        object-fit: contain;\n        width: 5rem;\n        height: 5rem;\n      }\n    }\n  }\n\n  .refresh {\n    padding: 10px;\n    position: absolute;\n    background: rgba(0, 0, 0, 0.4);\n    border-radius: 10px;\n    width: 20px;\n    height: 20px;\n    top: 10px;\n    right: 10px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n  }\n\n  article {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    text-align: center;\n    font-size: 2rem;\n\n    display: flex;\n\n    h4 {\n      color: white;\n      padding-top: 1.3rem;\n    }\n  }\n\n  section {\n    margin-left: -2.5rem;\n    display: flex;\n    justify-content: center;\n    align-items: left;\n    gap: 1rem;\n    padding-top: 1rem;\n    div {\n      color: white;\n\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n  }\n"])),(function(_ref){return _ref.background})),LoadingContainer=styled_components_browser_esm.ZP.div(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  width: 600px;\n  height: 400px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]))),MotionConfig=__webpack_require__("./node_modules/framer-motion/dist/es/components/MotionConfig/index.mjs"),motion=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion.mjs");const rick_loading={src:"static/media/rick-loading.1b97df19.png",height:400,width:400,blurDataURL:"static/media/rick-loading.1b97df19.png"};var next_image=__webpack_require__("./node_modules/next/image.js"),image_default=__webpack_require__.n(next_image),__jsx=react.createElement,Loading=function Loading(_ref){var label=_ref.label,background=_ref.background;return __jsx(Container,{background},__jsx(LoadingContainer,null,__jsx(MotionConfig.A,{reducedMotion:"user"},__jsx("div",{className:"rick-container"},__jsx(motion.E.div,{animate:{scale:[1,2,2,1,1],rotate:[0,360,360,0]},transition:{duration:2,ease:"easeInOut",times:[0,.2,.5,.8,1],repeat:1/0,repeatDelay:1}},__jsx(image_default(),{src:rick_loading,alt:"logo",width:100,height:100}))),__jsx("article",null,__jsx("h4",null,label),__jsx("section",null,__jsx(motion.E.div,{animate:{x:50,opacity:1,scale:1},transition:{ease:[0,.71,.2,1.01],duration:.3,delay:.5,repeat:1/0,repeatDelay:1},initial:{opacity:0,scale:.5}},"."),__jsx(motion.E.div,{animate:{x:50,opacity:1,scale:1},transition:{ease:[0,.71,.2,1.01],duration:.3,delay:.4,repeat:1/0,repeatDelay:1},initial:{opacity:0,scale:.5}},"."),__jsx(motion.E.div,{animate:{x:50,opacity:1,scale:1},transition:{ease:[0,.71,.2,1.01],duration:.3,delay:.3,repeat:1/0,repeatDelay:1},initial:{opacity:0,scale:.5}},"."))))))};Loading.displayName="Loading",Loading.__docgenInfo={description:"",methods:[],displayName:"Loading",props:{label:{required:!0,tsType:{name:"string"},description:""},background:{required:!1,tsType:{name:"string"},description:""}}};try{Loading.displayName="Loading",Loading.__docgenInfo={description:"",displayName:"Loading",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},background:{defaultValue:null,description:"",name:"background",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/global/components/Animation/index.tsx#Loading"]={docgenInfo:Loading.__docgenInfo,name:"Loading",path:"src/global/components/Animation/index.tsx#Loading"})}catch(__react_docgen_typescript_loader_error){}var Loading_stories_templateObject,_Primary$parameters,_Primary$parameters2,_Primary$parameters2$,_Secondary$parameters,_Secondary$parameters2,_Secondary$parameters3,_StoryWithLocale$para,_StoryWithLocale$para2,_StoryWithLocale$para3,_Unchecked$parameters,_Unchecked$parameters2,_Unchecked$parameters3,dist=__webpack_require__("./node_modules/@storybook/addon-viewport/dist/index.mjs"),index_esm=__webpack_require__("./node_modules/react-icons/ai/index.esm.js"),Loading_stories_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var arrows={AiOutlineArrowDown:index_esm.Duv,AiOutlineArrowLeft:index_esm.kyg,AiOutlineArrowRight:index_esm.mGl,AiOutlineArrowUp:index_esm.y1n},meta={title:"Global/components/Loading",decorators:[function(Story){var Container=styled_components_browser_esm.ZP.div(Loading_stories_templateObject||(Loading_stories_templateObject=(0,taggedTemplateLiteral.Z)(["\n        width: 100vw;\n        height: 100vh;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      "])));return Loading_stories_jsx(Container,null,Loading_stories_jsx(Story,null))}],excludeStories:/.*Data$/,component:Loading,argTypes:{label:{control:"text"},advanced:{control:"boolean"},margin:{control:"number",if:{arg:"advanced"}},padding:{control:"number",if:{arg:"advanced"}},cornerRadius:{control:"number",if:{arg:"advanced"}},arrow:{if:{arg:"advanced"},options:Object.keys(arrows),mapping:arrows,control:{type:"select",labels:{ArrowUp:"Up",ArrowDown:"Down",ArrowLeft:"Left",ArrowRight:"Right"}}},background:{control:"color"},backgroundColor:{control:"color"},variantColor:{control:"text"},variant:{options:["primary","secondary"],control:{type:"radio"}},TesteRadioOne:{options:["Item One","Item Two","Item Three"],control:{type:"select"}},TesteRadioTwo:{options:["Another Item One","Another Item Two","Another Item Three"],control:{type:"select"}}},parameters:{storySource:{source:'import type { Meta, StoryObj } from "@storybook/react";\nimport { Loading } from "../../../global/components/Animation";\nimport { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";\nimport { withKnobs } from "@storybook/addon-knobs";\nimport React, { useEffect } from "react";\nimport { AiOutlineArrowDown, AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineArrowUp } from "react-icons/ai";\nimport styled from "styled-components";\nconst getCaptionForLocale = (locale: any) => {\n  switch (locale) {\n    case "es":\n      return "Hola!";\n    case "fr":\n      return "Bonjour!";\n    case "kr":\n      return "안녕하세요!";\n    case "zh":\n      return "你好!";\n    default:\n      return "Hello!";\n  }\n};\nconst arrows = {\n  AiOutlineArrowDown,\n  AiOutlineArrowLeft,\n  AiOutlineArrowRight,\n  AiOutlineArrowUp\n};\nconst customViewports = {\n  MOBILE: {\n    name: "Cellphone Example",\n    styles: {\n      width: "415px",\n      height: "915px"\n    }\n  },\n  IPAD: {\n    name: "iPad Example",\n    styles: {\n      width: "810px",\n      height: "1080px"\n    }\n  },\n  DESKTOP: {\n    name: "Desktop Example",\n    styles: {\n      width: "1300px",\n      height: "1080px"\n    }\n  }\n};\nconst meta: Meta<typeof Loading> = {\n  title: "Global/components/Loading",\n  // decorators: [withKnobs],\n  decorators: [Story => {\n    const Container = styled.div`\n        width: 100vw;\n        height: 100vh;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      `;\n    return <Container>\r\n          <Story />\r\n        </Container>;\n  }],\n  excludeStories: /.*Data$/,\n  component: Loading,\n  argTypes: {\n    label: {\n      control: "text"\n    },\n    advanced: {\n      control: "boolean"\n    },\n    margin: {\n      control: "number",\n      if: {\n        arg: "advanced"\n      }\n    },\n    padding: {\n      control: "number",\n      if: {\n        arg: "advanced"\n      }\n    },\n    cornerRadius: {\n      control: "number",\n      if: {\n        arg: "advanced"\n      }\n    },\n    arrow: {\n      if: {\n        arg: "advanced"\n      },\n      options: Object.keys(arrows),\n      mapping: arrows,\n      control: {\n        type: "select",\n        labels: {\n          ArrowUp: "Up",\n          ArrowDown: "Down",\n          ArrowLeft: "Left",\n          ArrowRight: "Right"\n        }\n      }\n    },\n    background: {\n      control: "color"\n    },\n    backgroundColor: {\n      control: "color"\n    },\n    variantColor: {\n      control: "text"\n    },\n    variant: {\n      options: ["primary", "secondary"],\n      control: {\n        type: "radio"\n      }\n    },\n    TesteRadioOne: {\n      options: ["Item One", "Item Two", "Item Three"],\n      control: {\n        type: "select"\n      }\n    },\n    TesteRadioTwo: {\n      options: ["Another Item One", "Another Item Two", "Another Item Three"],\n      control: {\n        type: "select"\n      }\n    }\n  },\n  parameters: {\n    // viewport: {\n    //   viewports: { ...INITIAL_VIEWPORTS, ...customViewports },\n    //   defaultViewport: "iPad",\n    // },\n  }\n};\nexport default meta;\ntype Story = StoryObj<typeof Loading>;\nexport const Primary: Story = {\n  args: {\n    background: "white",\n    label: "Carregando"\n  },\n  parameters: {\n    nextjs: {\n      appDirectory: true\n    },\n    // viewport: {\n    //   defaultViewport: "iPad",\n    //   viewport: { INITIAL_VIEWPORTS, ...customViewports },\n    // },\n    viewport: {\n      defaultViewport: "responsive",\n      viewports: {\n        mobileS: {\n          name: "Mobile S",\n          styles: {\n            width: "320px",\n            height: "568px"\n          }\n        },\n        mobileM: {\n          name: "Mobile M",\n          styles: {\n            width: "375px",\n            height: "667px"\n          }\n        },\n        mobileL: {\n          name: "Mobile L",\n          styles: {\n            width: "425px",\n            height: "812px"\n          }\n        },\n        tablet: {\n          name: "Tablet",\n          styles: {\n            width: "768px",\n            height: "1024px"\n          }\n        },\n        desktop: {\n          name: "Desktop",\n          styles: {\n            width: "1440px",\n            height: "900px"\n          }\n        }\n      }\n    }\n  }\n};\n\n// Primary.storyName = "Primary";\n\nexport const Secondary: Story = {\n  args: {\n    ...Primary.args,\n    primary: false\n  },\n  parameters: {\n    viewport: {\n      viewport: {\n        ...INITIAL_VIEWPORTS,\n        ...customViewports\n      },\n      defaultViewport: "iPad"\n    }\n  }\n  // decorators : [ story => ({story()})]\n};\n\n// Secondary.storyName = "Secondary";\n\nexport const StoryWithLocale = ({}, {\n  globals: {\n    locale\n  }\n}: {\n  globals: {\n    locale: string;\n  };\n}) => {\n  const caption = getCaptionForLocale(locale);\n  return <p>{caption}</p>;\n};\nexport const Unchecked: Story = {\n  args: {\n    label: "Unchecked"\n  },\n  decorators: [Story => <>\r\n        <Story />\r\n        <div role="button"></div>\r\n      </>]\n};\nPrimary.parameters = {\n  ...Primary.parameters,\n  docs: {\n    ...Primary.parameters?.docs,\n    source: {\n      originalSource: "{\\n  args: {\\n    background: \\"white\\",\\n    label: \\"Carregando\\"\\n  },\\n  parameters: {\\n    nextjs: {\\n      appDirectory: true\\n    },\\n    // viewport: {\\n    //   defaultViewport: \\"iPad\\",\\n    //   viewport: { INITIAL_VIEWPORTS, ...customViewports },\\n    // },\\n    viewport: {\\n      defaultViewport: \\"responsive\\",\\n      viewports: {\\n        mobileS: {\\n          name: \\"Mobile S\\",\\n          styles: {\\n            width: \\"320px\\",\\n            height: \\"568px\\"\\n          }\\n        },\\n        mobileM: {\\n          name: \\"Mobile M\\",\\n          styles: {\\n            width: \\"375px\\",\\n            height: \\"667px\\"\\n          }\\n        },\\n        mobileL: {\\n          name: \\"Mobile L\\",\\n          styles: {\\n            width: \\"425px\\",\\n            height: \\"812px\\"\\n          }\\n        },\\n        tablet: {\\n          name: \\"Tablet\\",\\n          styles: {\\n            width: \\"768px\\",\\n            height: \\"1024px\\"\\n          }\\n        },\\n        desktop: {\\n          name: \\"Desktop\\",\\n          styles: {\\n            width: \\"1440px\\",\\n            height: \\"900px\\"\\n          }\\n        }\\n      }\\n    }\\n  }\\n}",\n      ...Primary.parameters?.docs?.source\n    }\n  }\n};\nSecondary.parameters = {\n  ...Secondary.parameters,\n  docs: {\n    ...Secondary.parameters?.docs,\n    source: {\n      originalSource: "{\\n  args: {\\n    ...Primary.args,\\n    primary: false\\n  },\\n  parameters: {\\n    viewport: {\\n      viewport: {\\n        ...INITIAL_VIEWPORTS,\\n        ...customViewports\\n      },\\n      defaultViewport: \\"iPad\\"\\n    }\\n  }\\n  // decorators : [ story => ({story()})]\\n}",\n      ...Secondary.parameters?.docs?.source\n    }\n  }\n};\nStoryWithLocale.parameters = {\n  ...StoryWithLocale.parameters,\n  docs: {\n    ...StoryWithLocale.parameters?.docs,\n    source: {\n      originalSource: "({}, {\\n  globals: {\\n    locale\\n  }\\n}: {\\n  globals: {\\n    locale: string;\\n  };\\n}) => {\\n  const caption = getCaptionForLocale(locale);\\n  return <p>{caption}</p>;\\n}",\n      ...StoryWithLocale.parameters?.docs?.source\n    }\n  }\n};\nUnchecked.parameters = {\n  ...Unchecked.parameters,\n  docs: {\n    ...Unchecked.parameters?.docs,\n    source: {\n      originalSource: "{\\n  args: {\\n    label: \\"Unchecked\\"\\n  },\\n  decorators: [Story => <>\\r\\n        <Story />\\r\\n        <div role=\\"button\\"></div>\\r\\n      </>]\\n}",\n      ...Unchecked.parameters?.docs?.source\n    }\n  }\n};',locationsMap:{primary:{startLoc:{col:30,line:146},endLoc:{col:1,line:200},startBody:{col:30,line:146},endBody:{col:1,line:200}},secondary:{startLoc:{col:32,line:204},endLoc:{col:1,line:219},startBody:{col:32,line:204},endBody:{col:1,line:219}},"story-with-locale":{startLoc:{col:31,line:223},endLoc:{col:1,line:234},startBody:{col:31,line:223},endBody:{col:1,line:234}},unchecked:{startLoc:{col:32,line:235},endLoc:{col:1,line:243},startBody:{col:32,line:235},endBody:{col:1,line:243}}}}}};const Loading_stories=meta;var Primary={args:{background:"white",label:"Carregando"},parameters:{nextjs:{appDirectory:!0},viewport:{defaultViewport:"responsive",viewports:{mobileS:{name:"Mobile S",styles:{width:"320px",height:"568px"}},mobileM:{name:"Mobile M",styles:{width:"375px",height:"667px"}},mobileL:{name:"Mobile L",styles:{width:"425px",height:"812px"}},tablet:{name:"Tablet",styles:{width:"768px",height:"1024px"}},desktop:{name:"Desktop",styles:{width:"1440px",height:"900px"}}}}}},Secondary={args:_objectSpread(_objectSpread({},Primary.args),{},{primary:!1}),parameters:{viewport:{viewport:_objectSpread(_objectSpread({},dist.p),{MOBILE:{name:"Cellphone Example",styles:{width:"415px",height:"915px"}},IPAD:{name:"iPad Example",styles:{width:"810px",height:"1080px"}},DESKTOP:{name:"Desktop Example",styles:{width:"1300px",height:"1080px"}}}),defaultViewport:"iPad"}}},StoryWithLocale=function StoryWithLocale(_ref,_ref2){(0,objectDestructuringEmpty.Z)(_ref);var caption=function getCaptionForLocale(locale){switch(locale){case"es":return"Hola!";case"fr":return"Bonjour!";case"kr":return"안녕하세요!";case"zh":return"你好!";default:return"Hello!"}}(_ref2.globals.locale);return Loading_stories_jsx("p",null,caption)};StoryWithLocale.displayName="StoryWithLocale";var Unchecked={args:{label:"Unchecked"},decorators:[function(Story){return Loading_stories_jsx(react.Fragment,null,Loading_stories_jsx(Story,null),Loading_stories_jsx("div",{role:"button"}))}]};Primary.parameters=_objectSpread(_objectSpread({},Primary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    background: "white",\n    label: "Carregando"\n  },\n  parameters: {\n    nextjs: {\n      appDirectory: true\n    },\n    // viewport: {\n    //   defaultViewport: "iPad",\n    //   viewport: { INITIAL_VIEWPORTS, ...customViewports },\n    // },\n    viewport: {\n      defaultViewport: "responsive",\n      viewports: {\n        mobileS: {\n          name: "Mobile S",\n          styles: {\n            width: "320px",\n            height: "568px"\n          }\n        },\n        mobileM: {\n          name: "Mobile M",\n          styles: {\n            width: "375px",\n            height: "667px"\n          }\n        },\n        mobileL: {\n          name: "Mobile L",\n          styles: {\n            width: "425px",\n            height: "812px"\n          }\n        },\n        tablet: {\n          name: "Tablet",\n          styles: {\n            width: "768px",\n            height: "1024px"\n          }\n        },\n        desktop: {\n          name: "Desktop",\n          styles: {\n            width: "1440px",\n            height: "900px"\n          }\n        }\n      }\n    }\n  }\n}'},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2$=_Primary$parameters2.docs)||void 0===_Primary$parameters2$?void 0:_Primary$parameters2$.source)})}),Secondary.parameters=_objectSpread(_objectSpread({},Secondary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Secondary$parameters=Secondary.parameters)||void 0===_Secondary$parameters?void 0:_Secondary$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    ...Primary.args,\n    primary: false\n  },\n  parameters: {\n    viewport: {\n      viewport: {\n        ...INITIAL_VIEWPORTS,\n        ...customViewports\n      },\n      defaultViewport: "iPad"\n    }\n  }\n  // decorators : [ story => ({story()})]\n}'},null===(_Secondary$parameters2=Secondary.parameters)||void 0===_Secondary$parameters2||null===(_Secondary$parameters3=_Secondary$parameters2.docs)||void 0===_Secondary$parameters3?void 0:_Secondary$parameters3.source)})}),StoryWithLocale.parameters=_objectSpread(_objectSpread({},StoryWithLocale.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_StoryWithLocale$para=StoryWithLocale.parameters)||void 0===_StoryWithLocale$para?void 0:_StoryWithLocale$para.docs),{},{source:_objectSpread({originalSource:"({}, {\n  globals: {\n    locale\n  }\n}: {\n  globals: {\n    locale: string;\n  };\n}) => {\n  const caption = getCaptionForLocale(locale);\n  return <p>{caption}</p>;\n}"},null===(_StoryWithLocale$para2=StoryWithLocale.parameters)||void 0===_StoryWithLocale$para2||null===(_StoryWithLocale$para3=_StoryWithLocale$para2.docs)||void 0===_StoryWithLocale$para3?void 0:_StoryWithLocale$para3.source)})}),Unchecked.parameters=_objectSpread(_objectSpread({},Unchecked.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Unchecked$parameters=Unchecked.parameters)||void 0===_Unchecked$parameters?void 0:_Unchecked$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    label: "Unchecked"\n  },\n  decorators: [Story => <>\r\n        <Story />\r\n        <div role="button"></div>\r\n      </>]\n}'},null===(_Unchecked$parameters2=Unchecked.parameters)||void 0===_Unchecked$parameters2||null===(_Unchecked$parameters3=_Unchecked$parameters2.docs)||void 0===_Unchecked$parameters3?void 0:_Unchecked$parameters3.source)})}),StoryWithLocale.__docgenInfo={description:"",methods:[],displayName:"StoryWithLocale"}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);