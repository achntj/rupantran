import Layout from "../components/Layout";
import { GetServerSideProps } from "next";
import { PostProps } from "../components/Post";
import prisma from "../lib/prisma";
import Feed from "../components/Feed";

export const getServerSideProps: GetServerSideProps = async () => {
  let feed = await prisma.post.findMany();
  feed = JSON.parse(JSON.stringify(feed));
  feed = feed.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );
  return {
    props: { feed },
  };
};

type Props = {
  feed: PostProps[];
};

const Home: React.FC<Props> = (props) => {
  return (
    <div>
      <Layout>
        <h1>Feedbacks</h1>
        <Feed props={props} />
      </Layout>
    </div>
  );
};

export default Home;
