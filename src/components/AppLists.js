import React from 'react';

const react101 = [
   { doc: 'Introducing JSX', url: 'https://bit.ly/3E2ruxn', code: 'https://bit.ly/3krcRfb' },
   { doc: 'Rendering Elements', url: 'https://bit.ly/3k21dab', code: 'https://bit.ly/3zyrKkg' },
   { doc: 'Components and Props', url: 'https://bit.ly/3hwzXim', code: 'https://bit.ly/3lCn9bG' },
   { doc: 'State and Lifecycle', url: 'https://bit.ly/3EuM3Cx', code: 'https://bit.ly/3CyfdPo' },
   { doc: 'Handling Events', url: 'https://bit.ly/39g7eKt', code: 'https://bit.ly/3nT6uDm' },
   { doc: 'Conditional Rendering', url: 'https://bit.ly/3nPije2', code: 'https://bit.ly/3EDfZfN' }
];

export default function React101(props) {
   return (
      <table>
      <thead>
         <tr><th>React doc</th><th>My code</th></tr>
      </thead><tbody>
         {react101.map(row => 
            <tr key={row.url.slice(row.url.lastIndexOf('/') + 1)}>
               <td><a href={row.url} title="Jump to React docs">{row.doc}</a></td>
               <td><a href={row.code} title="My test code">{row.code}</a></td>
            </tr>
         )}
      </tbody></table>
   )
};
