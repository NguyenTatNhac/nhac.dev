import Link from 'next/link';

const Home = () => {
  return (
    <div className="h-96 w-max flex justify-center">
      Home Page
      <Link href="/about">About</Link>
    </div>
  );
};

export default Home;
