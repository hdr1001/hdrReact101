import React from "react";

const author1stName = 'Hans';
const authorLastName = 'de Rooij';

//Functional component
function HiThere(props) {
   const hdrBlogUrl = 'https://hdr1001.github.io/blog/';

   return (
      <p>Hi, I am {props.firstName} {props.lastName} &amp;
         this is my <a href={hdrBlogUrl} title="blog">blog</a>
      </p>
   )
}

//(ES6) Class based component
class HowDoYouFeel extends React.Component {
   render() {
      let starLevel = '';

      for(let i = 0; i < this.props.starLevel; i++) {starLevel += '⭐'}
   
      return <p>I feel {starLevel}</p>;
   }
}

//React component composition
function AppComposition(props) {
   const starLevel = props.starLevel ? props.starLevel : 5;

   return (
      <div>
         <HiThere firstName={author1stName} lastName={authorLastName} />
         <HowDoYouFeel starLevel={starLevel} />
      </div>
   );
}

export default AppComposition;
