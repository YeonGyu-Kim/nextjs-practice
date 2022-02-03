export interface IParams {
  params: {
    params: string[];
  };
}

const MovieDetail = ({ params }: any) => {
  const [title, id] = params as string[];
  return <div>{title}</div>;
};

export const getServerSideProps = async ({ params: { params } }: IParams) => {
  return {
    props: {
      params,
    },
  };
};

export default MovieDetail;
