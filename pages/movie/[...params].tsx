import Seo from "../../components/Seo";

interface IParams {
  params: {
    params: string[];
  };
}

interface IParam {
  params: string[];
}

const MovieDetail = ({ params }: IParam) => {
  const [title, id] = params;
  return (
    <div>
      <Seo title={title} />
    </div>
  );
};

export const getServerSideProps = async ({ params: { params } }: IParams) => {
  return {
    props: {
      params,
    },
  };
};

export default MovieDetail;
