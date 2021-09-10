import React from "react";

const App = () => {
   const strMdf = 'my dear friends';
   const langEs = 'es';
   const colorRed = {color: 'red'};
   const reactLogoUrl = 'https://reactjs.org/logo-og.png';
   const hdrBlogUrl = 'https://hdr1001.github.io/blog/';

   const jsxElem = []; //Array of JSX elements

   //A simple JSX example
   jsxElem.push(<h1>Hello world!</h1>);

   //Embedding expressions in JSX
   jsxElem.push(<h1>Hello {strMdf}!</h1>);
   jsxElem.push(<h1>Hello {'y' + 'o' + 'u'}!</h1>);
   jsxElem.push(<h1>Hello {(param => param)('reader')}!</h1>);

   //Specifying attributes with JSX
   jsxElem.push(<p lang="nl">Hallo wereld!</p>);
   jsxElem.push(<p lang={langEs}>Olá Mundo!</p>);
   jsxElem.push(<p style={colorRed}>Hello world!</p>);

   //Empty tag
   jsxElem.push(<img src={reactLogoUrl} alt="React logo" height="25%" width="25%" />);

   //JSX elements may contain children
   jsxElem.push(<p>My <a href={hdrBlogUrl} title="My blog">blog</a> on GitHub</p>);

   return (
      <div>
         {jsxElem[jsxElem.length - 1]}
      </div>
   );
};

export default App;
