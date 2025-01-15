```javascript
// pages/about.js
import { useRouter } from 'next/router';

export async function getServerSideProps(context) {
  return {
    props: {
      myVariable: process.env.MY_VARIABLE,
    },
  };
}

export default function About({ myVariable }) {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
      {myVariable && <p>My variable: {myVariable}</p>}
    </div>
  );
}
```