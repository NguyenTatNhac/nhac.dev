import Link from 'next/link';

const Home = () => {
  return (
    <div className="prose dark:prose-invert">
      <h1 className="text-xl">
        Hi, I&apos;m Nhac{' '}
        <span className="inline-block animate-waving-hand">👋</span>
      </h1>
      <p>
        I&apos;m a fullstack software engineer, I enjoy working with Java,
        React, Next.js and crafting beautiful software.
      </p>
      <p>
        I currently <Link href="/work">work</Link> as a Senior Software Engineer
        at{' '}
        <Link href="https://www.mgm-tp.com/" target="_blank">
          mgm technology partners
        </Link>
        .
      </p>
    </div>
  );
};

export default Home;
