import Head from "next/head";

interface ITitle {
  title: string;
}

const Seo = ({ title }: ITitle) => {
  return (
    <Head>
      <title>{title} | Movies</title>
    </Head>
  );
};

export default Seo;
