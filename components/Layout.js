import Head from 'next/head';

export default props => {
  return (
    <div>
      <Head>
        <title>SSR</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
      </Head>
      <div className="container">
        <h1 className="display-4 text-center">Json Placeholder Data</h1>
        {props.children}
      </div>
    </div>
  );
};
