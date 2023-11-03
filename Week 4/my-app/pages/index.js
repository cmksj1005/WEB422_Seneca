import Hello from '@/components/Hello';
import Clock from '@/components/Clock';
import ClickCounter from '@/components/ClickCounter';
import Post from '@/components/Post';

// This function gets called at build time
export function getStaticProps() {
  // Call an external API endpoint to get posts
  return new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((res) => res.json())
      .then((data) => {
        resolve({ props: { staticPost: data } });
      });
  });
}

export default function Home(props) {
  return (
    <div>
      <Hello fName="Jason" lName="Perez" />
      <Clock locale="en-CA" />
      <ClickCounter />
      <br />
      <Post post={props.staticPost} />
    </div>
  );
}
