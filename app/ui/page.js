import Layout from "../components/Layout";

const UITest = () => {
  return (
    <Layout dark={true}>
      <div className="w-full h-full flex gap-5 items-center justify-center">
        <div className="flex flex-col gap-5">
          <div className="w-10 h-10 bg-blue-100"></div>
          <div className="w-10 h-10 bg-blue-200"></div>
          <div className="w-10 h-10 bg-blue-300"></div>
          <div className="w-10 h-10 bg-blue-400"></div>
          <div className="w-10 h-10 bg-blue-500"></div>
          <div className="w-10 h-10 bg-blue-600"></div>
          <div className="w-10 h-10 bg-blue-700"></div>
          <div className="w-10 h-10 bg-blue-800"></div>
          <div className="w-10 h-10 bg-blue-900"></div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="w-10 h-10 bg-orange-100"></div>
          <div className="w-10 h-10 bg-orange-200"></div>
          <div className="w-10 h-10 bg-orange-300"></div>
          <div className="w-10 h-10 bg-orange-400"></div>
          <div className="w-10 h-10 bg-orange-500"></div>
          <div className="w-10 h-10 bg-orange-600"></div>
          <div className="w-10 h-10 bg-orange-700"></div>
          <div className="w-10 h-10 bg-orange-800"></div>
          <div className="w-10 h-10 bg-orange-900"></div>
        </div>
      </div>
    </Layout>
  );
};

export default UITest;
